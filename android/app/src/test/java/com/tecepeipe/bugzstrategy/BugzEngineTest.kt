package com.tecepeipe.bugzstrategy

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNull
import org.junit.Assert.assertTrue
import org.junit.Test

/**
 * JVM unit tests for the bugz core engine (rules in BugzApp.kt). These pure
 * functions have no Android dependencies, so they run as plain JUnit tests.
 */
class BugzEngineTest {

    // --- hex helpers ---

    @Test
    fun `parseKey round trips`() {
        assertEquals(AxialHex(1, -2), parseKey("1,-2"))
        assertEquals("3,4", AxialHex(3, 4).key())
    }

    @Test
    fun `axial hex neighbors are the six surrounding hexes`() {
        val neighbors = AxialHex(0, 0).getNeighbors()
        assertEquals(6, neighbors.size)
        assertTrue(neighbors.contains(AxialHex(1, 0)))
        assertTrue(neighbors.contains(AxialHex(0, 1)))
        assertTrue(neighbors.contains(AxialHex(-1, 1)))
        assertTrue(neighbors.contains(AxialHex(-1, 0)))
        assertTrue(neighbors.contains(AxialHex(0, -1)))
        assertTrue(neighbors.contains(AxialHex(1, -1)))
    }

    // --- board helpers ---

    @Test
    fun `board helpers handle empty and stacked hexes`() {
        val board: Map<String, List<Piece>> = emptyMap()
        assertFalse(isOccupied(board, AxialHex(0, 0)))
        assertEquals(0, getStackHeight(board, AxialHex(0, 0)))
        assertNull(getTopPiece(board, AxialHex(0, 0)))

        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val beetle = Piece("p1_BEETLE_0", BugType.BEETLE, Player.ONE)
        val boardWithStack = mapOf("0,0" to listOf(queen, beetle))

        assertTrue(isOccupied(boardWithStack, AxialHex(0, 0)))
        assertEquals(2, getStackHeight(boardWithStack, AxialHex(0, 0)))
        assertEquals(beetle, getTopPiece(boardWithStack, AxialHex(0, 0)))
    }

    @Test
    fun `cloneBoard deep copies stacks`() {
        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val original = mapOf("0,0" to mutableListOf(queen))
        val copy = cloneBoard(original)

        copy["0,0"]!!.clear()

        assertEquals(1, original["0,0"]!!.size)
    }

    @Test
    fun `queen helpers report placement and location`() {
        val queen = Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO)
        val board = mapOf("2,1" to listOf(queen))

        assertTrue(isQueenPlaced(board, Player.TWO))
        assertFalse(isQueenPlaced(board, Player.ONE))
        assertEquals(AxialHex(2, 1), getQueenHex(board, Player.TWO))
        assertNull(getQueenHex(board, Player.ONE))
    }

    // --- swarm connectivity ---

    @Test
    fun `empty and single-piece swarms are connected`() {
        assertTrue(isSwarmConnected(emptyMap()))
        val single = mapOf("0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)))
        assertTrue(isSwarmConnected(single))
    }

    @Test
    fun `two adjacent pieces keep the swarm connected`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertTrue(isSwarmConnected(board))
    }

    @Test
    fun `two separated pieces break the swarm`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "0,2" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertFalse(isSwarmConnected(board))
    }

    @Test
    fun `canRemovePiece returns true for stacks`() {
        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val beetle = Piece("p1_BEETLE_0", BugType.BEETLE, Player.ONE)
        val board = mapOf(
            "0,0" to listOf(queen, beetle),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertTrue(canRemovePieceWithoutBreakingSwarm(board, AxialHex(0, 0)))
    }

    // --- sliding / placement rules ---

    @Test
    fun `canSlide is false when both common neighbors are blocked`() {
        // From (0,0) to (1,-1): common neighbors are (1,0) and (0,-1).
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO)),
            "0,-1" to listOf(Piece("p2_SPIDER_0", BugType.SPIDER, Player.TWO))
        )
        assertFalse(canSlide(board, AxialHex(0, 0), AxialHex(1, -1)))
    }

    @Test
    fun `first placement is at the origin`() {
        val placements = getValidPlacements(emptyMap(), Player.ONE, 1)
        assertEquals(listOf(AxialHex(0, 0)), placements)
    }

    @Test
    fun `second placement touches the first piece`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE))
        )
        val placements = getValidPlacements(board, Player.TWO, 1)
        assertEquals(6, placements.size)
    }

    @Test
    fun `placements cannot touch enemy pieces`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        // A placement for P1 adjacent to the P2 queen would touch an enemy hex.
        val p1Placements = getValidPlacements(board, Player.ONE, 2)
        assertFalse(p1Placements.contains(AxialHex(2, 0)))
    }

    // --- BugzEngine state machine ---

    @Test
    fun `initNewGame creates full reserves`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())
        assertEquals(1 + 2 + 2 + 3 + 3 + 1 + 1 + 1, engine.p1Reserve.size)
        assertEquals(engine.p1Reserve.size, engine.p2Reserve.size)
        assertEquals(Player.ONE, engine.currentPlayer)
        assertEquals(1, engine.turnCountP1)
        assertEquals(1, engine.turnCountP2)
    }

    @Test
    fun `initNewGame without expansions shrinks reserves`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig(mosquito = false, ladybug = false, pillbug = false))
        assertEquals(1 + 2 + 2 + 3 + 3, engine.p1Reserve.size)
    }

    @Test
    fun `placing the first piece updates the board and turns`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        val queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )

        assertTrue(engine.board.containsKey("0,0"))
        assertFalse(engine.p1Reserve.any { it.id == queen.id })
        assertEquals(Player.TWO, engine.currentPlayer)
        assertEquals(2, engine.turnCountP1)
        assertEquals(1, engine.history.size)
    }

    @Test
    fun `snapshot and restore preserve state`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())
        val queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )

        val snap = engine.snapshot()
        engine.restore(snap)

        assertEquals(Player.TWO, engine.currentPlayer)
        assertTrue(engine.board.containsKey("0,0"))
        assertEquals(2, engine.turnCountP1)
    }

    @Test
    fun `game status is not over with only queens placed`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        val p1Queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )
        val p2Queen = engine.p2Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p2Queen.id, BugType.QUEEN, Player.TWO, toHex = AxialHex(1, 0))
        )

        val status = engine.checkGameStatus()
        assertFalse(status.isGameOver)
        assertNull(status.winner)
    }

    @Test
    fun `queen surrounded on all six sides ends the game`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        // P1 queen at origin; P2 surrounds it completely.
        val p1Queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0))
        )

        val p2Pieces = engine.p2Reserve.filter { it.type != BugType.QUEEN }.toMutableList()
        val neighbors = AxialHex(0, 0).getNeighbors()
        var p2Index = 0
        for (hex in neighbors) {
            if (engine.currentPlayer != Player.TWO) engine.switchTurn()
            val piece = p2Pieces[p2Index++]
            engine.executeMove(
                MoveAction(MoveAction.ActionType.PLACE, piece.id, piece.type, Player.TWO, toHex = hex)
            )
        }

        // Give P1 a non-surrounding filler so the game status can be evaluated.
        val p1Filler = engine.p1Reserve.first { it.type != BugType.QUEEN }
        if (engine.currentPlayer != Player.ONE) engine.switchTurn()
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Filler.id, p1Filler.type, Player.ONE, toHex = AxialHex(2, -2))
        )

        val status = engine.checkGameStatus()
        assertTrue(status.isGameOver)
        assertEquals(Player.TWO, status.winner)
        assertEquals(6, status.p1QueenSurroundedCount)
    }

    // --- simulateAction reserve deduction ---

    @Test
    fun `simulateAction deducts from AI reserve only when AI places`() {
        val aiReserve = listOf(
            Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE),
            Piece("p1_SPIDER_0", BugType.SPIDER, Player.ONE),
        )
        val humanReserve = listOf(
            Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO),
            Piece("p2_SPIDER_0", BugType.SPIDER, Player.TWO),
        )

        val action = MoveAction(
            MoveAction.ActionType.PLACE,
            "p1_QUEEN_0", BugType.QUEEN, Player.ONE,
            toHex = AxialHex(0, 0),
        )

        val (_, nextAI, nextHuman) = simulateAction(
            emptyMap(), action, Player.ONE, aiReserve, humanReserve,
        )

        assertEquals(1, nextAI.size)
        assertEquals("p1_SPIDER_0", nextAI[0].id)
        assertEquals(2, nextHuman.size) // Human reserve untouched
    }

    @Test
    fun `simulateAction deducts from human reserve only when human places`() {
        val aiReserve = listOf(
            Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE),
        )
        val humanReserve = listOf(
            Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO),
            Piece("p2_SPIDER_0", BugType.SPIDER, Player.TWO),
        )

        val action = MoveAction(
            MoveAction.ActionType.PLACE,
            "p2_QUEEN_0", BugType.QUEEN, Player.TWO,
            toHex = AxialHex(1, 0),
        )

        val (_, nextAI, nextHuman) = simulateAction(
            emptyMap(), action, Player.TWO, aiReserve, humanReserve,
        )

        assertEquals(1, nextAI.size) // AI reserve untouched
        assertEquals(1, nextHuman.size)
        assertEquals("p2_SPIDER_0", nextHuman[0].id)
    }

    @Test
    fun `simulateAction does not touch reserves on MOVE action`() {
        val aiReserve = listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE))
        val humanReserve = listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))

        val board = mapOf("0,0" to listOf(Piece("p1_SPIDER_0", BugType.SPIDER, Player.ONE)))
        val action = MoveAction(
            MoveAction.ActionType.MOVE,
            "p1_SPIDER_0", BugType.SPIDER, Player.ONE,
            fromHex = AxialHex(0, 0), toHex = AxialHex(1, 0),
        )

        val (_, nextAI, nextHuman) = simulateAction(
            board, action, Player.ONE, aiReserve, humanReserve,
        )

        assertEquals(1, nextAI.size)
        assertEquals(1, nextHuman.size)
    }

    // --- evaluateBoard reserve bonus ---

    @Test
    fun `evaluateBoard rewards having more reserve pieces`() {
        val engine = BugzEngine()
        engine.initNewGame(ExpansionsConfig())

        val p1Queen = engine.p1Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p1Queen.id, BugType.QUEEN, Player.ONE, toHex = AxialHex(0, 0)),
        )
        val p2Queen = engine.p2Reserve.first { it.type == BugType.QUEEN }
        engine.executeMove(
            MoveAction(MoveAction.ActionType.PLACE, p2Queen.id, BugType.QUEEN, Player.TWO, toHex = AxialHex(1, 0)),
        )

        val fullAIReserve = engine.p1Reserve
        val fullHumanReserve = engine.p2Reserve

        val scoreBigAIReserve = evaluateBoard(
            engine.board, Player.ONE,
            fullAIReserve, fullHumanReserve.drop(5),
            2, 2, ExpansionsConfig(),
        )
        val scoreSmallAIReserve = evaluateBoard(
            engine.board, Player.ONE,
            fullAIReserve.drop(5), fullHumanReserve,
            2, 2, ExpansionsConfig(),
        )

        assertTrue("AI with more reserve should score higher", scoreBigAIReserve > scoreSmallAIReserve)
    }

    // --- canSlide gate rule ---

    @Test
    fun `queen can slide through open gate`() {
        // P1 queen at (0,0), P2 pieces at 4 of 6 neighbors.
        // Empty hexes at (1,0) and (0,1).
        // Gate hexes for (0,0)→(0,1) are (1,0) and (-1,1).
        // (1,0) is empty → gate is open → queen CAN slide to (0,1).
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_q", BugType.QUEEN, Player.ONE))
        board[AxialHex(1, -1).key()] = mutableListOf(Piece("p2_a", BugType.SOLDIER_ANT, Player.TWO))
        board[AxialHex(0, -1).key()] = mutableListOf(Piece("p2_b", BugType.SOLDIER_ANT, Player.TWO))
        board[AxialHex(-1, 0).key()] = mutableListOf(Piece("p2_c", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 1).key()] = mutableListOf(Piece("p2_d", BugType.GRASSHOPPER, Player.TWO))
        // (1,0) empty, (0,1) empty — gate hex (1,0) is open

        val moves = getValidMovesForPiece(board, AxialHex(0, 0), Player.ONE, 99, null, ExpansionsConfig(mosquito = false, ladybug = false, pillbug = false))
        assertTrue("Queen should slide through open gate", moves.contains(AxialHex(0, 1)))
    }

    @Test
    fun `queen cannot escape through gate blocked on both sides`() {
        // P1 queen at (0,0), P2 pieces at 5 of 6 neighbors.
        // Empty hex at (0,1). Gate hexes for (0,0)→(0,1) are (1,0) and (-1,1).
        // Both occupied → gate is blocked → queen CANNOT slide to (0,1).
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_q", BugType.QUEEN, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SOLDIER_ANT, Player.TWO))
        board[AxialHex(1, -1).key()] = mutableListOf(Piece("p2_b", BugType.SOLDIER_ANT, Player.TWO))
        board[AxialHex(0, -1).key()] = mutableListOf(Piece("p2_c", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 0).key()] = mutableListOf(Piece("p2_d", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 1).key()] = mutableListOf(Piece("p2_e", BugType.GRASSHOPPER, Player.TWO))
        // Gate hexes (1,0) and (-1,1) both occupied — gate blocked

        val moves = getValidMovesForPiece(board, AxialHex(0, 0), Player.ONE, 99, null, ExpansionsConfig(mosquito = false, ladybug = false, pillbug = false))
        assertFalse("Queen should NOT escape through gate blocked on both sides", moves.contains(AxialHex(0, 1)))
    }

    @Test
    fun `beetle on top cannot step down through ground-level gate`() {
        // A beetle on top of a piece should not be able to step down to
        // an empty ground hex if both gate hexes at ground level are occupied.
        val board = mutableMapOf<String, MutableList<Piece>>()

        // P2 beetle on top of P1 piece at (0,0)
        board[AxialHex(0, 0).key()] = mutableListOf(
            Piece("p1_q", BugType.QUEEN, Player.ONE),
            Piece("p2_beetle", BugType.BEETLE, Player.TWO),
        )

        // P2 queen at (2, -1) so P2 can move
        board[AxialHex(2, -1).key()] = mutableListOf(Piece("p2_q", BugType.QUEEN, Player.TWO))

        // Empty hex at (1, 0) — the destination
        // Gate hexes between (0,0) and (1,0) are (1,-1) and (0,1)
        // Both occupied at ground level to block the gate
        board[AxialHex(1, -1).key()] = mutableListOf(Piece("p1_a", BugType.SPIDER, Player.ONE))
        board[AxialHex(0, 1).key()] = mutableListOf(Piece("p1_b", BugType.SPIDER, Player.ONE))

        val moves = getBeetleMoves(board, AxialHex(0, 0))

        assertFalse("Beetle on top should NOT step down through blocked ground gate", moves.contains(AxialHex(1, 0)))
    }
}
