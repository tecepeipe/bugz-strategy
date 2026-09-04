import {
  AxialHex,
  BoardState,
  BugType,
  BUG_DEFINITIONS,
  ExpansionsConfig,
  GameSettings,
  hexKey,
  MoveAction,
  Piece,
  Player,
} from '../types/bugz';
import {
  getAllNeighbors,
  getCommonNeighbors,
  getNeighborHex,
  hexDistance,
  isSameHex,
} from './hexMath';

// --- BOARD HELPER FUNCTIONS ---

export function cloneBoard(board: BoardState): BoardState {
  const newBoard: BoardState = new Map();
  board.forEach((stack, key) => {
    newBoard.set(key, [...stack]);
  });
  return newBoard;
}

export function getTopPiece(board: BoardState, hex: AxialHex): Piece | null {
  const stack = board.get(hexKey(hex.q, hex.r));
  if (!stack || stack.length === 0) return null;
  return stack[stack.length - 1];
}

export function getStackHeight(board: BoardState, hex: AxialHex): number {
  const stack = board.get(hexKey(hex.q, hex.r));
  return stack ? stack.length : 0;
}

export function isOccupied(board: BoardState, hex: AxialHex): boolean {
  return getStackHeight(board, hex) > 0;
}

export function getAllOccupiedHexes(board: BoardState): AxialHex[] {
  const occupied: AxialHex[] = [];
  board.forEach((stack, key) => {
    if (stack.length > 0) {
      const [q, r] = key.split(',').map(Number);
      occupied.push({ q, r });
    }
  });
  return occupied;
}

export function findPieceHex(board: BoardState, pieceId: string): { hex: AxialHex; stackIndex: number } | null {
  for (const [key, stack] of board.entries()) {
    const index = stack.findIndex(p => p.id === pieceId);
    if (index !== -1) {
      const [q, r] = key.split(',').map(Number);
      return { hex: { q, r }, stackIndex: index };
    }
  }
  return null;
}

export function isQueenPlaced(board: BoardState, player: Player): boolean {
  for (const stack of board.values()) {
    for (const p of stack) {
      if (p.player === player && p.type === 'QUEEN') {
        return true;
      }
    }
  }
  return false;
}

export function getQueenHex(board: BoardState, player: Player): AxialHex | null {
  for (const [key, stack] of board.entries()) {
    for (const p of stack) {
      if (p.player === player && p.type === 'QUEEN') {
        const [q, r] = key.split(',').map(Number);
        return { q, r };
      }
    }
  }
  return null;
}

// --- ONE-BUGZ & FREEDOM TO MOVE ---

/**
 * Checks if all occupied hexes on the board form a single connected group.
 */
export function isSwarmConnected(board: BoardState): boolean {
  const occupied = getAllOccupiedHexes(board);
  if (occupied.length <= 1) return true;

  const visited = new Set<string>();
  const queue: AxialHex[] = [occupied[0]];
  visited.add(hexKey(occupied[0].q, occupied[0].r));

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = getAllNeighbors(current);

    for (const n of neighbors) {
      const nKey = hexKey(n.q, n.r);
      if (isOccupied(board, n) && !visited.has(nKey)) {
        visited.add(nKey);
        queue.push(n);
      }
    }
  }

  return visited.size === occupied.length;
}

/**
 * Checks if removing a piece from `fromHex` (at top of stack) breaks the One-Swarm rule.
 */
export function canRemovePieceWithoutBreakingSwarm(board: BoardState, fromHex: AxialHex): boolean {
  const stack = board.get(hexKey(fromHex.q, fromHex.r));
  if (!stack || stack.length === 0) return false;

  // If there are other pieces under it in the same hex, removing top piece leaves hex occupied, so swarm cannot break!
  if (stack.length > 1) return true;

  // Otherwise, test removing fromHex from the board temporarily
  const testBoard = cloneBoard(board);
  testBoard.delete(hexKey(fromHex.q, fromHex.r));

  return isSwarmConnected(testBoard);
}

/**
 * Freedom to Move (Slide) check between two adjacent hexes.
 * The gate is formed by the two common neighbors of fromHex and toHex.
 * A slide is blocked if BOTH gate hexes have stack height greater than the
 * gate clearance level.
 *
 * The gate clearance is the LOWER of the source and destination levels.
 * When stepping down, the gate is checked at ground level; when crawling
 * on top of the hive, it is checked at the current level.  This enforces
 * the physical rule that a piece must be able to fit through the gap at
 * the narrowest transition point.
 */
export function canSlide(
  board: BoardState,
  fromHex: AxialHex,
  toHex: AxialHex,
  _atHeight?: number
): boolean {
  const common = getCommonNeighbors(fromHex, toHex);
  if (common.length !== 2) return false;

  const h1 = getStackHeight(board, common[0]);
  const h2 = getStackHeight(board, common[1]);

  const fromLevel = getStackHeight(board, fromHex) - 1;
  const toLevel = getStackHeight(board, toHex);
  const gateLevel = Math.min(fromLevel, toLevel);

  if (h1 > gateLevel && h2 > gateLevel) {
    return false;
  }

  return true;
}

/**
 * Ground slide check: Moving along ground (height 0).
 * Must slide and MUST stay in contact with at least 1 other piece in the swarm (excluding the piece moving itself if isolated).
 */
export function isValidGroundSlide(
  board: BoardState,
  fromHex: AxialHex,
  toHex: AxialHex,
  ignoreFromHexInContactCheck: boolean = true
): boolean {
  // 1. Destination must be empty (for ground slide)
  if (isOccupied(board, toHex)) return false;

  // 2. Gate freedom to move check
  if (!canSlide(board, fromHex, toHex, 0)) return false;

  // 3. Must touch at least one other occupied piece on the board
  const testBoard = cloneBoard(board);
  // Temporarily pop fromHex piece
  const stack = testBoard.get(hexKey(fromHex.q, fromHex.r));
  if (stack) {
    if (stack.length === 1) testBoard.delete(hexKey(fromHex.q, fromHex.r));
    else stack.pop();
  }

  const neighbors = getAllNeighbors(toHex);
  const touchesSwarm = neighbors.some(n => isOccupied(testBoard, n));

  return touchesSwarm;
}

// --- VALID PLACEMENT RULES ---

export function getValidPlacements(board: BoardState, player: Player, turnCountP: number): AxialHex[] {
  const occupied = getAllOccupiedHexes(board);

  // Turn 1, P1: Place anywhere (default center (0,0))
  if (occupied.length === 0) {
    return [{ q: 0, r: 0 }];
  }

  // Turn 1, P2: Must touch P1's piece
  if (occupied.length === 1) {
    return getAllNeighbors(occupied[0]);
  }

  // Turn 2+: Must touch at least one friendly piece and NO opponent pieces
  const candidateKeys = new Set<string>();
  const validPlacements: AxialHex[] = [];

  // Find all empty hexes adjacent to any occupied hex
  for (const hex of occupied) {
    for (const n of getAllNeighbors(hex)) {
      if (!isOccupied(board, n)) {
        candidateKeys.add(hexKey(n.q, n.r));
      }
    }
  }

  for (const key of candidateKeys) {
    const [q, r] = key.split(',').map(Number);
    const candidate: AxialHex = { q, r };
    const neighbors = getAllNeighbors(candidate);

    let touchesFriendly = false;
    let touchesEnemy = false;

    for (const n of neighbors) {
      const topPiece = getTopPiece(board, n);
      if (topPiece) {
        if (topPiece.player === player) {
          touchesFriendly = true;
        } else {
          touchesEnemy = true;
        }
      }
    }

    if (touchesFriendly && !touchesEnemy) {
      validPlacements.push(candidate);
    }
  }

  return validPlacements;
}

// --- PIECE MOVEMENT CALCULATIONS ---

/**
 * Calculates valid destination hexes for a piece currently at `fromHex`.
 */
export function getValidMovesForPiece(
  board: BoardState,
  fromHex: AxialHex,
  player: Player,
  turnCountP: number,
  lastMovedPieceId: string | null = null,
  expansions: ExpansionsConfig = { mosquito: true, ladybug: true, pillbug: true }
): AxialHex[] {
  // Rule: Cannot move any piece until Queen Bee is placed
  if (!isQueenPlaced(board, player)) {
    return [];
  }

  // Rule: Must be top piece on stack
  const stack = board.get(hexKey(fromHex.q, fromHex.r));
  if (!stack || stack.length === 0) return [];
  const topPiece = stack[stack.length - 1];
  if (topPiece.player !== player) return [];

  // Rule: A piece moved by a Pillbug special action is stunned and may not
  // move on the opponent's immediately following turn.
  if (topPiece.id === lastMovedPieceId) return [];

  // Rule: Must not break One-Swarm
  if (!canRemovePieceWithoutBreakingSwarm(board, fromHex)) {
    return [];
  }

  // Determine effective bug type (Mosquito copies adjacent abilities when on ground)
  const effectiveBugTypes = getEffectiveBugTypes(board, fromHex, topPiece, expansions);
  const validDestinations = new Set<string>();

  // Build a board without the moving piece so we can verify each
  // destination stays connected to the swarm (one-hive rule).
  const boardWithoutPiece = cloneBoard(board);
  const fromStack = boardWithoutPiece.get(hexKey(fromHex.q, fromHex.r));
  if (fromStack) {
    if (fromStack.length > 1) fromStack.pop();
    else boardWithoutPiece.delete(hexKey(fromHex.q, fromHex.r));
  }

  for (const bugType of effectiveBugTypes) {
    const dests = getMovesForBugType(board, fromHex, bugType, player);
    for (const dest of dests) {
      // Every destination must touch at least one other piece in the
      // remaining swarm. Sliding moves (Queen, Spider, Ant) already
      // check this inside isValidGroundSlide, but jumping / climbing
      // moves (Grasshopper, Beetle, Ladybug) do not.
      if (getAllNeighbors(dest).some(n => isOccupied(boardWithoutPiece, n))) {
        validDestinations.add(hexKey(dest.q, dest.r));
      }
    }
  }

  return Array.from(validDestinations).map(key => {
    const [q, r] = key.split(',').map(Number);
    return { q, r };
  });
}

/**
 * Get effective movement types for a piece (handles Mosquito copying adjacent abilities).
 */
export function getEffectiveBugTypes(
  board: BoardState,
  fromHex: AxialHex,
  piece: Piece,
  expansions: ExpansionsConfig
): BugType[] {
  if (piece.type !== 'MOSQUITO') {
    return [piece.type];
  }

  const stackHeight = getStackHeight(board, fromHex);
  // Mosquito on top of swarm acts strictly as a Beetle
  if (stackHeight > 1) {
    return ['BEETLE'];
  }

  // Mosquito on ground copies abilities of any adjacent pieces (at top of adjacent stacks)
  const copiedTypes = new Set<BugType>();
  const neighbors = getAllNeighbors(fromHex);

  for (const n of neighbors) {
    const adjTop = getTopPiece(board, n);
    if (adjTop) {
      if (adjTop.type === 'MOSQUITO') {
        // Mosquito touching Mosquito gives no abilities unless that Mosquito was on top
      } else {
        copiedTypes.add(adjTop.type);
      }
    }
  }

  if (copiedTypes.size === 0) {
    return []; // No valid moves if not touching any bug with abilities
  }

  return Array.from(copiedTypes);
}

/**
 * Movement calculator by bug type.
 */
function getMovesForBugType(
  board: BoardState,
  fromHex: AxialHex,
  bugType: BugType,
  player: Player
): AxialHex[] {
  switch (bugType) {
    case 'QUEEN':
      return getQueenMoves(board, fromHex);
    case 'SPIDER':
      return getSpiderMoves(board, fromHex);
    case 'BEETLE':
      return getBeetleMoves(board, fromHex);
    case 'GRASSHOPPER':
      return getGrasshopperMoves(board, fromHex);
    case 'SOLDIER_ANT':
      return getSoldierAntMoves(board, fromHex);
    case 'LADYBUG':
      return getLadybugMoves(board, fromHex);
    case 'PILLBUG':
      return getPillbugMoves(board, fromHex);
    default:
      return [];
  }
}

// 1. Queen Bee: 1 ground slide step along perimeter
function getQueenMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  const neighbors = getAllNeighbors(fromHex);
  return neighbors.filter(to => isValidGroundSlide(board, fromHex, to));
}

// 2. Spider: Exactly 3 steps around perimeter without backtracking
function getSpiderMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  const results: AxialHex[] = [];

  // DFS/BFS path finding of length exactly 3
  function spiderDFS(current: AxialHex, stepCount: number, visitedKeys: Set<string>) {
    if (stepCount === 3) {
      results.push(current);
      return;
    }

    const neighbors = getAllNeighbors(current);
    for (const next of neighbors) {
      const nextKey = hexKey(next.q, next.r);
      if (!visitedKeys.has(nextKey)) {
        if (isValidGroundSlide(board, current, next)) {
          const nextVisited = new Set(visitedKeys);
          nextVisited.add(nextKey);
          spiderDFS(next, stepCount + 1, nextVisited);
        }
      }
    }
  }

  const startVisited = new Set<string>([hexKey(fromHex.q, fromHex.r)]);
  spiderDFS(fromHex, 0, startVisited);

  // Remove duplicates
  const uniqueKeys = new Set<string>();
  const uniqueResults: AxialHex[] = [];
  for (const hex of results) {
    const key = hexKey(hex.q, hex.r);
    if (!uniqueKeys.has(key)) {
      uniqueKeys.add(key);
      uniqueResults.push(hex);
    }
  }

  return uniqueResults;
}

// 3. Beetle: 1 step slide, climb up onto adjacent stack, move on top, or step down
function getBeetleMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  const neighbors = getAllNeighbors(fromHex);
  const moves: AxialHex[] = [];
  const currentHeight = getStackHeight(board, fromHex);

  for (const to of neighbors) {
    const targetHeight = getStackHeight(board, to);

    // Climbing, moving on top, or stepping down — check the gate
    if (targetHeight >= 1 || currentHeight > 1) {
      if (canSlide(board, fromHex, to)) {
        moves.push(to);
      }
    }
    // Ground slide (beetle at ground level to empty ground hex)
    else {
      if (isValidGroundSlide(board, fromHex, to)) {
        moves.push(to);
      }
    }
  }

  return moves;
}

// 4. Grasshopper: Jumps over a straight line of connected pieces to first empty space
function getGrasshopperMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  const moves: AxialHex[] = [];

  for (let dirIndex = 0; dirIndex < 6; dirIndex++) {
    let current = getNeighborHex(fromHex, dirIndex);
    let countOver = 0;

    // Must jump over at least 1 occupied hex
    while (isOccupied(board, current)) {
      countOver++;
      current = getNeighborHex(current, dirIndex);
    }

    if (countOver > 0) {
      moves.push(current);
    }
  }

  return moves;
}

// 5. Soldier Ant: Moves any distance around perimeter of swarm
function getSoldierAntMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  const visited = new Set<string>([hexKey(fromHex.q, fromHex.r)]);
  const queue: AxialHex[] = [fromHex];

  while (queue.length > 0) {
    const current = queue.shift()!;
    const neighbors = getAllNeighbors(current);

    for (const next of neighbors) {
      const nextKey = hexKey(next.q, next.r);
      if (!visited.has(nextKey)) {
        if (isValidGroundSlide(board, current, next)) {
          visited.add(nextKey);
          queue.push(next);
        }
      }
    }
  }

  // Remove starting position
  visited.delete(hexKey(fromHex.q, fromHex.r));

  return Array.from(visited).map(key => {
    const [q, r] = key.split(',').map(Number);
    return { q, r };
  });
}

// 6. Ladybug: Exactly 3 steps: 2 steps on top of swarm, 1 step down to empty ground space
function getLadybugMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  const results = new Set<string>();

  // Step 1: Climb onto an adjacent occupied hex
  const step1Candidates = getAllNeighbors(fromHex).filter(
    n => isOccupied(board, n) && canSlide(board, fromHex, n)
  );

  for (const s1 of step1Candidates) {
    // Step 2: Move on top of swarm to another adjacent occupied hex (can be same level, cannot go down yet)
    const step2Candidates = getAllNeighbors(s1).filter(
      s2 =>
        !isSameHex(s2, fromHex) &&
        isOccupied(board, s2) &&
        canSlide(board, s1, s2)
    );

    for (const s2 of step2Candidates) {
      // Step 3: Step down to an empty adjacent ground hex
      const step3Candidates = getAllNeighbors(s2).filter(
        s3 =>
          !isSameHex(s3, s1) &&
          !isOccupied(board, s3) &&
          canSlide(board, s2, s3)
      );

      for (const s3 of step3Candidates) {
        results.add(hexKey(s3.q, s3.r));
      }
    }
  }

  return Array.from(results).map(key => {
    const [q, r] = key.split(',').map(Number);
    return { q, r };
  });
}

// 7. Pillbug standard movement (1 ground slide step)
function getPillbugMoves(board: BoardState, fromHex: AxialHex): AxialHex[] {
  return getQueenMoves(board, fromHex);
}

// --- PILLBUG SPECIAL ACTION ---

export interface PillbugTargetOption {
  targetHex: AxialHex; // Hex of target piece to pick up
  piece: Piece;
  destinationHexes: AxialHex[]; // Valid empty destination hexes adjacent to Pillbug
}

/**
 * Gets valid targets for Pillbug special action.
 * Pillbug can pick up an unstacked adjacent piece (not moved last turn, not breaking swarm) and place it in an empty space adjacent to Pillbug.
 */
export function getPillbugSpecialTargets(
  board: BoardState,
  pillbugHex: AxialHex,
  player: Player,
  lastMovedPieceId: string | null = null
): PillbugTargetOption[] {
  // Must be placed and Queen must be placed
  if (!isQueenPlaced(board, player)) return [];

  // Pillbug must be unstacked (or top piece)
  const stack = board.get(hexKey(pillbugHex.q, pillbugHex.r));
  if (!stack || stack.length === 0) return [];

  // Official rule: the Pillbug cannot move a piece if the Pillbug itself was
  // moved in the most recent turn.
  const pillbugTop = stack[stack.length - 1];
  if (pillbugTop.id === lastMovedPieceId) return [];

  // Empty spaces adjacent to Pillbug
  const adjacentHexes = getAllNeighbors(pillbugHex);
  const emptyAdjacentHexes = adjacentHexes.filter(h => !isOccupied(board, h));

  if (emptyAdjacentHexes.length === 0) return [];

  const options: PillbugTargetOption[] = [];

  for (const adjHex of adjacentHexes) {
    if (isOccupied(board, adjHex)) {
      const targetStack = board.get(hexKey(adjHex.q, adjHex.r))!;
      // Target piece MUST be unstacked (height == 1)
      if (targetStack.length === 1) {
        const targetPiece = targetStack[0];

        // Rule: Cannot move the piece that was moved in the immediately preceding turn
        if (targetPiece.id === lastMovedPieceId) continue;

        // Rule: Removing targetPiece must NOT break the One-Swarm rule!
        if (!canRemovePieceWithoutBreakingSwarm(board, adjHex)) continue;

        // Official "Beetle gate" rule: the piece is lifted over the Pillbug to
        // reach its destination; a gate hex (a common neighbor of the origin
        // and destination other than the Pillbug's own hex) with a stack height
        // of 2+ blocks the passage. The gate is only blocked if ALL non-Pillbug
        // gate hexes are stacked (height >= 2).
        const reachableDestinations = emptyAdjacentHexes.filter(destHex => {
          const gateHexes = getCommonNeighbors(adjHex, destHex).filter(
            g => !isSameHex(g, pillbugHex)
          );
          const gateBlocked = gateHexes.length > 0 && gateHexes.every(g => getStackHeight(board, g) >= 2);
          return !gateBlocked;
        });

        if (reachableDestinations.length > 0) {
          options.push({
            targetHex: adjHex,
            piece: targetPiece,
            destinationHexes: reachableDestinations,
          });
        }
      }
    }
  }

  return options;
}

// --- ALL LEGAL ACTIONS GENERATOR (FOR FORCED PASS & AI) ---

export function getPlayerAllLegalActions(
  board: BoardState,
  player: Player,
  reserve: Piece[],
  turnCountP: number,
  lastMovedPieceId: string | null = null,
  expansions: ExpansionsConfig = { mosquito: true, ladybug: true, pillbug: true }
): MoveAction[] {
  const actions: MoveAction[] = [];
  const queenPlaced = isQueenPlaced(board, player);

  // 1. PLACEMENT ACTIONS
  const validPlacements = getValidPlacements(board, player, turnCountP);

  // If turn 4 or later and Queen not placed, ONLY the Queen can be placed!
  if (turnCountP >= 4 && !queenPlaced) {
    const queenPiece = reserve.find(p => p.type === 'QUEEN');
    if (queenPiece) {
      for(const hex of validPlacements) {
        actions.push({
          type: 'PLACE',
          pieceId: queenPiece.id,
          bugType: 'QUEEN',
          player,
          toHex: hex,
        });
      }
    }
    return actions; // Only queen placements allowed on turn 4+ if queen not placed
  }

  // Otherwise, if player can place from reserve:
  if (validPlacements.length > 0 && reserve.length > 0) {
    // Unique bug types in reserve
    const availableBugTypes = new Set<BugType>();
    const typeToPiece = new Map<BugType, Piece>();

    for (const p of reserve) {
      if (!availableBugTypes.has(p.type)) {
        availableBugTypes.add(p.type);
        typeToPiece.set(p.type, p);
      }
    }

    for (const [bugType, piece] of typeToPiece.entries()) {
      for (const hex of validPlacements) {
        actions.push({
          type: 'PLACE',
          pieceId: piece.id,
          bugType,
          player,
          toHex: hex,
        });
      }
    }
  }

  // 2. MOVEMENT ACTIONS (only if Queen is placed)
  if (queenPlaced) {
    const occupied = getAllOccupiedHexes(board);

    for (const hex of occupied) {
      const topPiece = getTopPiece(board, hex);
      if (topPiece && topPiece.player === player) {
        const moves = getValidMovesForPiece(
          board,
          hex,
          player,
          turnCountP,
          lastMovedPieceId,
          expansions
        );

        for (const dest of moves) {
          actions.push({
            type: 'MOVE',
            pieceId: topPiece.id,
            bugType: topPiece.type,
            player,
            fromHex: hex,
            toHex: dest,
          });
        }

        // Pillbug / Mosquito copying Pillbug special action
        const effectiveTypes = getEffectiveBugTypes(board, hex, topPiece, expansions);
        if (effectiveTypes.includes('PILLBUG')) {
          const pbTargets = getPillbugSpecialTargets(board, hex, player, lastMovedPieceId);
          for (const opt of pbTargets) {
            for (const destHex of opt.destinationHexes) {
              actions.push({
                type: 'PILLBUG_SPECIAL',
                pieceId: topPiece.id,
                bugType: topPiece.type,
                player,
                fromHex: hex,
                pillbugTargetHex: opt.targetHex,
                toHex: destHex,
              });
            }
          }
        }
      }
    }
  }

  return actions;
}

// --- VICTORY & GAME OVER CHECK ---

export interface GameStatus {
  isGameOver: boolean;
  winner: Player | 'DRAW' | null;
  p1QueenSurroundedCount: number;
  p2QueenSurroundedCount: number;
}

export function checkGameStatus(board: BoardState): GameStatus {
  const p1QueenHex = getQueenHex(board, 1);
  const p2QueenHex = getQueenHex(board, 2);

  let p1Surrounded = 0;
  let p2Surrounded = 0;

  if (p1QueenHex) {
    const neighbors = getAllNeighbors(p1QueenHex);
    p1Surrounded = neighbors.filter(n => isOccupied(board, n)).length;
  }

  if (p2QueenHex) {
    const neighbors = getAllNeighbors(p2QueenHex);
    p2Surrounded = neighbors.filter(n => isOccupied(board, n)).length;
  }

  const p1IsSurrounded = p1Surrounded === 6;
  const p2IsSurrounded = p2Surrounded === 6;

  if (p1IsSurrounded && p2IsSurrounded) {
    return {
      isGameOver: true,
      winner: 'DRAW',
      p1QueenSurroundedCount: p1Surrounded,
      p2QueenSurroundedCount: p2Surrounded,
    };
  } else if (p1IsSurrounded) {
    return {
      isGameOver: true,
      winner: 2,
      p1QueenSurroundedCount: p1Surrounded,
      p2QueenSurroundedCount: p2Surrounded,
    };
  } else if (p2IsSurrounded) {
    return {
      isGameOver: true,
      winner: 1,
      p1QueenSurroundedCount: p1Surrounded,
      p2QueenSurroundedCount: p2Surrounded,
    };
  }

  return {
    isGameOver: false,
    winner: null,
    p1QueenSurroundedCount: p1Surrounded,
    p2QueenSurroundedCount: p2Surrounded,
  };
}

