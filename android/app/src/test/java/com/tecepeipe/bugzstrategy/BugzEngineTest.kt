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
        assertTrue(isHiveConnected(emptyMap()))
        val single = mapOf("0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)))
        assertTrue(isHiveConnected(single))
    }

    @Test
    fun `two adjacent pieces keep the swarm connected`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertTrue(isHiveConnected(board))
    }

    @Test
    fun `two separated pieces break the swarm`() {
        val board = mapOf(
            "0,0" to listOf(Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)),
            "0,2" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertFalse(isHiveConnected(board))
    }

    @Test
    fun `canRemovePiece returns true for stacks`() {
        val queen = Piece("p1_QUEEN_0", BugType.QUEEN, Player.ONE)
        val beetle = Piece("p1_BEETLE_0", BugType.BEETLE, Player.ONE)
        val board = mapOf(
            "0,0" to listOf(queen, beetle),
            "1,0" to listOf(Piece("p2_QUEEN_0", BugType.QUEEN, Player.TWO))
        )
        assertTrue(canRemovePieceWithoutBreakingHive(board, AxialHex(0, 0)))
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
        val engine = HiveEngine()
        engine.initNewGame(ExpansionsConfig())
        assertEquals(1 + 2 + 2 + 3 + 3 + 1 + 1 + 1, engine.p1Reserve.size)
        assertEquals(engine.p1Reserve.size, engine.p2Reserve.size)
        assertEquals(Player.ONE, engine.currentPlayer)
        assertEquals(1, engine.turnCountP1)
        assertEquals(1, engine.turnCountP2)
    }

    @Test
    fun `initNewGame without expansions shrinks reserves`() {
        val engine = HiveEngine()
        engine.initNewGame(ExpansionsConfig(mosquito = false, ladybug = false, pillbug = false))
        assertEquals(1 + 2 + 2 + 3 + 3, engine.p1Reserve.size)
    }

    @Test
    fun `placing the first piece updates the board and turns`() {
        val engine = HiveEngine()
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
        val engine = HiveEngine()
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
        val engine = HiveEngine()
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
        val engine = HiveEngine()
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
        val engine = HiveEngine()
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
    fun `queen never slides through a closed gate in any neighbor occupancy pattern`() {
        val origin = AxialHex(0, 0)
        val neighbors = origin.getNeighbors()

        for (mask in 0 until 64) {
            val board = mutableMapOf<String, MutableList<Piece>>()
            board[origin.key()] = mutableListOf(Piece("p1_q", BugType.QUEEN, Player.ONE))
            var idx = 0
            for (n in neighbors) {
                if ((mask and (1 shl idx)) != 0) {
                    board[n.key()] = mutableListOf(Piece("p2_$idx", BugType.SPIDER, Player.TWO))
                }
                idx++
            }

            val moves = getQueenMoves(board, origin)
            for (dest in moves) {
                val common = getCommonNeighbors(origin, dest)
                val gateClosed = common.size == 2 &&
                    isOccupied(board, common[0]) && isOccupied(board, common[1])
                assertFalse(
                    "mask=$mask queen must not slide through closed gate to ${dest.key()}",
                    gateClosed,
                )
            }
        }
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

    // --- ant movement (freedom to move / gate rule) ---

    @Test
    fun `ant can slide through an open gate to an empty hex`() {
        // P1 ant at (0,0), P2 blocks 4 of the 6 neighbours.
        // Empty hexes at (1,0) and (0,1). Gate for (0,0)->(0,1) is (-1,1) and (1,0);
        // (1,0) is empty so the gate is open and the ant CAN slide to (0,1).
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_ant", BugType.SOLDIER_ANT, Player.ONE))
        board[AxialHex(1, -1).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))
        board[AxialHex(0, -1).key()] = mutableListOf(Piece("p2_b", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 0).key()] = mutableListOf(Piece("p2_c", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 1).key()] = mutableListOf(Piece("p2_d", BugType.SPIDER, Player.TWO))

        val moves = getSoldierAntMoves(board, AxialHex(0, 0))

        assertTrue("Ant should slide through the open gate to (0,1)", moves.contains(AxialHex(0, 1)))
    }

    @Test
    fun `ant trapped inside a ring of pieces has no moves`() {
        // P1 ant at (0,0) surrounded by P2 pieces on 5 of its 6 neighbours.
        // The only empty neighbour (1,-1) sits behind a closed gate (its gate
        // hexes (1,0) and (0,-1) are both occupied), so the ant cannot
        // physically slide out and has no legal moves.
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_ant", BugType.SOLDIER_ANT, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))
        board[AxialHex(0, 1).key()] = mutableListOf(Piece("p2_b", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 1).key()] = mutableListOf(Piece("p2_c", BugType.SPIDER, Player.TWO))
        board[AxialHex(-1, 0).key()] = mutableListOf(Piece("p2_d", BugType.SPIDER, Player.TWO))
        board[AxialHex(0, -1).key()] = mutableListOf(Piece("p2_e", BugType.SPIDER, Player.TWO))

        val moves = getSoldierAntMoves(board, AxialHex(0, 0))

        assertTrue("Ant surrounded by a closed ring must have no moves", moves.isEmpty())
    }

    @Test
    fun `ant can travel around the outside of the hive`() {
        // P1 ant at (0,0) with a single P2 piece at (1,0).
        // The ant may orbit the hive: (0,1), (1,1) and (2,0) are all reachable
        // around the outside, while hexes that would isolate it are not.
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_ant", BugType.SOLDIER_ANT, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))

        val moves = getSoldierAntMoves(board, AxialHex(0, 0))

        assertTrue("Ant should reach (0,1)", moves.contains(AxialHex(0, 1)))
        assertTrue("Ant should reach (1,1) via the open gate left behind", moves.contains(AxialHex(1, 1)))
        assertTrue("Ant should reach (2,0) around the piece", moves.contains(AxialHex(2, 0)))
        assertFalse("Ant must not leave the hive to (-1,0)", moves.contains(AxialHex(-1, 0)))
    }

    // --- spider movement (exactly 3 steps, freedom to move) ---

    @Test
    fun `spider moves exactly three hexes`() {
        // P1 spider at (0,0), single P2 piece at (1,0).
        // (0,0) -> (0,1) -> (1,1) -> (2,0) is a legal three-step slide.
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_spider", BugType.SPIDER, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))

        val moves = getSpiderMoves(board, AxialHex(0, 0))

        assertTrue("Spider should land on (2,0) after exactly three steps", moves.contains(AxialHex(2, 0)))
        assertFalse("Spider must not land a single step away at (0,1)", moves.contains(AxialHex(0, 1)))
        assertFalse("Spider must not land two steps away at (1,1)", moves.contains(AxialHex(1, 1)))
    }

    @Test
    fun `spider cannot walk through an occupied hex`() {
        // P1 spider at (0,0). P2 pieces at (1,0) and (0,-1).
        // (2,-1) and (1,-2) are only reachable in three steps by walking
        // THROUGH the occupied hexes — illegal under freedom-to-move.
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_spider", BugType.SPIDER, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))
        board[AxialHex(0, -1).key()] = mutableListOf(Piece("p2_b", BugType.SPIDER, Player.TWO))

        val moves = getSpiderMoves(board, AxialHex(0, 0))

        assertFalse("Spider must NOT walk through (1,0) to reach (2,-1)", moves.contains(AxialHex(2, -1)))
        assertFalse("Spider must NOT walk through (0,-1) to reach (1,-2)", moves.contains(AxialHex(1, -2)))
    }

    // --- beetle movement (climbing + gate rule) ---

    @Test
    fun `beetle climbs onto an adjacent piece`() {
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_q", BugType.QUEEN, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p1_beetle", BugType.BEETLE, Player.ONE))

        val moves = getBeetleMoves(board, AxialHex(1, 0))

        assertTrue("Beetle should climb onto the queen at (0,0)", moves.contains(AxialHex(0, 0)))
    }

    @Test
    fun `beetle on top can step down onto an empty ground hex`() {
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(
            Piece("p1_q", BugType.QUEEN, Player.ONE),
            Piece("p2_beetle", BugType.BEETLE, Player.TWO),
        )

        val moves = getBeetleMoves(board, AxialHex(0, 0))

        assertTrue("Beetle on top should step down to (1,0)", moves.contains(AxialHex(1, 0)))
    }

    @Test
    fun `beetle cannot climb through a closed gate`() {
        // Gate hexes for climbing from (1,0) onto (0,0) are (0,1) and (1,-1);
        // both occupied so the beetle cannot squeeze through.
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_q", BugType.QUEEN, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p1_beetle", BugType.BEETLE, Player.ONE))
        board[AxialHex(0, 1).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))
        board[AxialHex(1, -1).key()] = mutableListOf(Piece("p2_b", BugType.SPIDER, Player.TWO))

        val moves = getBeetleMoves(board, AxialHex(1, 0))

        assertFalse("Beetle must NOT climb onto (0,0) through a closed gate", moves.contains(AxialHex(0, 0)))
    }

    // --- grasshopper movement ---

    @Test
    fun `grasshopper jumps over a line of pieces to the first empty hex`() {
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_gh", BugType.GRASSHOPPER, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))
        board[AxialHex(2, 0).key()] = mutableListOf(Piece("p2_b", BugType.SPIDER, Player.TWO))

        val moves = getGrasshopperMoves(board, AxialHex(0, 0))

        assertTrue("Grasshopper should jump to (3,0)", moves.contains(AxialHex(3, 0)))
        assertFalse("Grasshopper must not land on an occupied hex (1,0)", moves.contains(AxialHex(1, 0)))
        assertFalse("Grasshopper must not land on an occupied hex (2,0)", moves.contains(AxialHex(2, 0)))
    }

    @Test
    fun `grasshopper cannot jump with no pieces in a row`() {
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_gh", BugType.GRASSHOPPER, Player.ONE))

        val moves = getGrasshopperMoves(board, AxialHex(0, 0))

        assertTrue(moves.isEmpty())
    }

    // --- mosquito movement (copies adjacent pieces) ---

    @Test
    fun `mosquito copies an adjacent grasshopper and jumps`() {
        val mosquito = Piece("p1_m", BugType.MOSQUITO, Player.ONE)
        val board = mapOf(
            "0,0" to listOf(mosquito),
            "1,0" to listOf(Piece("p1_gh", BugType.GRASSHOPPER, Player.ONE)),
            "2,0" to listOf(Piece("p2_a", BugType.SPIDER, Player.TWO)),
            "3,0" to listOf(Piece("p2_b", BugType.SPIDER, Player.TWO)),
        )

        val effective = getEffectiveBugTypes(board, AxialHex(0, 0), mosquito)
        assertTrue(effective.contains(BugType.GRASSHOPPER))

        val moves = effective.flatMap { getMovesForBugType(board, AxialHex(0, 0), it) }
        assertTrue("Mosquito copying grasshopper should jump to (4,0)", moves.contains(AxialHex(4, 0)))
    }

    @Test
    fun `mosquito with no adjacent pieces has no movement`() {
        val mosquito = Piece("p1_m", BugType.MOSQUITO, Player.ONE)
        val board = mapOf("0,0" to listOf(mosquito))

        assertTrue(getEffectiveBugTypes(board, AxialHex(0, 0), mosquito).isEmpty())
    }

    @Test
    fun `mosquito adjacent only to another mosquito has no movement`() {
        val mosquito = Piece("p1_m", BugType.MOSQUITO, Player.ONE)
        val board = mapOf(
            "0,0" to listOf(mosquito),
            "1,0" to listOf(Piece("p2_m", BugType.MOSQUITO, Player.TWO)),
        )

        assertTrue(getEffectiveBugTypes(board, AxialHex(0, 0), mosquito).isEmpty())
    }

    // --- ladybug movement (two steps on top, one step down) ---

    @Test
    fun `ladybug moves two steps on top then one step down`() {
        // (0,0) -> on top of (1,0) -> on top of (2,0) -> down to (3,0)
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_ladybug", BugType.LADYBUG, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))
        board[AxialHex(2, 0).key()] = mutableListOf(Piece("p2_b", BugType.SPIDER, Player.TWO))

        val moves = getLadybugMoves(board, AxialHex(0, 0))

        assertTrue("Ladybug should land at (3,0)", moves.contains(AxialHex(3, 0)))
        assertFalse("Ladybug must not land on the occupied (1,0)", moves.contains(AxialHex(1, 0)))
        assertFalse("Ladybug must not land on the occupied (2,0)", moves.contains(AxialHex(2, 0)))
    }

    // --- pillbug movement (queen-like move + special ability) ---

    @Test
    fun `pillbug moves one hex like the queen`() {
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_pillbug", BugType.PILLBUG, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p2_a", BugType.SPIDER, Player.TWO))

        val moves = getPillbugMoves(board, AxialHex(0, 0))

        assertTrue("Pillbug should slide to (0,1)", moves.contains(AxialHex(0, 1)))
    }

    @Test
    fun `pillbug special moves an adjacent friendly piece to an empty hex`() {
        val board = mutableMapOf<String, MutableList<Piece>>()
        board[AxialHex(0, 0).key()] = mutableListOf(Piece("p1_pillbug", BugType.PILLBUG, Player.ONE))
        board[AxialHex(1, 0).key()] = mutableListOf(Piece("p1_friend", BugType.SPIDER, Player.ONE))
        board[AxialHex(-1, 1).key()] = mutableListOf(Piece("p1_queen", BugType.QUEEN, Player.ONE))

        val options = getPillbugSpecialTargets(board, AxialHex(0, 0), Player.ONE, null)
        val friendOption = options.first { it.targetHex == AxialHex(1, 0) }

        assertTrue("Pillbug should be able to move the friend to (0,1)", friendOption.destinationHexes.contains(AxialHex(0, 1)))
    }
}
