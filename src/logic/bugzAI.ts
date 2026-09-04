import {
  AIDifficulty,
  BoardState,
  ExpansionsConfig,
  hexKey,
  MoveAction,
  Piece,
  Player,
} from '../types/bugz';
import {
  checkGameStatus,
  cloneBoard,
  getAllOccupiedHexes,
  getPlayerAllLegalActions,
  getQueenHex,
  getTopPiece,
  isOccupied,
  isQueenPlaced,
} from './bugzRules';
import { getAllNeighbors, getNeighborHex } from './hexMath';

export function computeAIMove(
  board: BoardState,
  aiPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[],
  turnCountAI: number,
  turnCountHuman: number,
  difficulty: AIDifficulty,
  lastMovedPieceId: string | null = null,
  expansions: ExpansionsConfig = { mosquito: true, ladybug: true, pillbug: true }
): MoveAction | null {
  const legalActions = getPlayerAllLegalActions(
    board,
    aiPlayer,
    aiReserve,
    turnCountAI,
    lastMovedPieceId,
    expansions
  );

  if (legalActions.length === 0) return null;

  if (difficulty === 'EASY') {
    return computeEasyMove(board, aiPlayer, legalActions, turnCountAI);
  } else if (difficulty === 'MEDIUM') {
    return computeMediumMove(
      board,
      aiPlayer,
      aiReserve,
      humanReserve,
      turnCountAI,
      turnCountHuman,
      legalActions,
      lastMovedPieceId,
      expansions
    );
  } else {
    return computeHardMinimaxMove(
      board,
      aiPlayer,
      aiReserve,
      humanReserve,
      turnCountAI,
      turnCountHuman,
      legalActions,
      lastMovedPieceId,
      expansions
    );
  }
}

// Easy AI: Mostly random but with basic common sense — prefer placing
// pieces from reserve over shuffling existing ones, and always place the
// Queen by turn 4.
function computeEasyMove(
  board: BoardState,
  aiPlayer: Player,
  legalActions: MoveAction[],
  turnCountAI: number
): MoveAction {
  // Play the queen when it is due (by the 4th turn) if the AI forgot to place it earlier.
  if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
    const queenActions = legalActions.filter(a => a.bugType === 'QUEEN');
    if (queenActions.length > 0) {
      return queenActions[Math.floor(Math.random() * queenActions.length)];
    }
  }

  // Prefer placing pieces from reserve (develop the board) with some randomness.
  const placeActions = legalActions.filter(a => a.type === 'PLACE');
  if (placeActions.length > 0 && Math.random() < 0.7) {
    return placeActions[Math.floor(Math.random() * placeActions.length)];
  }

  return legalActions[Math.floor(Math.random() * legalActions.length)];
}

// Medium AI: Greedy 1-ply evaluation with moderate weights and a
// development bonus so the AI places pieces from reserve instead of just
// shuffling the queen around.
function computeMediumMove(
  board: BoardState,
  aiPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[],
  turnCountAI: number,
  turnCountHuman: number,
  legalActions: MoveAction[],
  lastMovedPieceId: string | null,
  expansions: ExpansionsConfig
): MoveAction {
  let bestScore = -Infinity;
  let bestActions: MoveAction[] = [];

  for (const action of legalActions) {
    const { nextBoard, nextAIReserve, nextHumanReserve } = simulateAction(
      board,
      action,
      aiPlayer,
      aiReserve,
      humanReserve
    );

    let score = evaluateBoardMedium(
      nextBoard,
      aiPlayer,
      nextAIReserve,
      nextHumanReserve,
      turnCountAI,
      turnCountHuman,
      expansions
    );

    // Development bonus: placing pieces from reserve is strongly preferred
    // in the early/mid game. Without this the AI just shuffles its queen
    // because the defensive score from escaping adjacency outweighs the
    // modest positional gain of a new placement.
    if (action.type === 'PLACE' && aiReserve.length > 2) {
      score += 150;
    } else if (action.type === 'PLACE' && aiReserve.length > 0) {
      score += 60;
    }

    if (score > bestScore + 1e-9) {
      bestScore = score;
      bestActions = [action];
    } else if (Math.abs(score - bestScore) <= 1e-9) {
      bestActions.push(action);
    }
  }

  return bestActions[Math.floor(Math.random() * bestActions.length)];
}

// Hard AI: Minimax with Alpha-Beta Pruning (Depth 2-3 search)
function computeHardMinimaxMove(
  board: BoardState,
  aiPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[],
  turnCountAI: number,
  turnCountHuman: number,
  legalActions: MoveAction[],
  lastMovedPieceId: string | null,
  expansions: ExpansionsConfig
): MoveAction {
  const depth = 2; // Search depth 2 (1 ply AI, 1 ply Human response, + heuristic)
  const humanPlayer: Player = aiPlayer === 1 ? 2 : 1;

  let alpha = -Infinity;
  let beta = Infinity;
  let bestScore = -Infinity;
  let bestAction: MoveAction = legalActions[0];

  for (const action of legalActions) {
    const { nextBoard, nextAIReserve, nextHumanReserve } = simulateAction(
      board,
      action,
      aiPlayer,
      aiReserve,
      humanReserve
    );

    // Check immediate victory
    const status = checkGameStatus(nextBoard);
    if (status.isGameOver) {
      if (status.winner === aiPlayer) return action; // Instant win!
      continue; // Skip moves that let the opponent win immediately
    }

    const val = minimax(
      nextBoard,
      depth - 1,
      alpha,
      beta,
      false, // Human turn next
      aiPlayer,
      humanPlayer,
      nextAIReserve,
      nextHumanReserve,
      turnCountAI + 1,
      turnCountHuman,
      actuallyMovedPieceId(board, action),
      expansions
    );

    if (val > bestScore) {
      bestScore = val;
      bestAction = action;
    }
    alpha = Math.max(alpha, bestScore);
  }

  return bestAction;
}

function minimax(
  board: BoardState,
  depth: number,
  alpha: number,
  beta: number,
  isMaximizing: boolean,
  aiPlayer: Player,
  humanPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[],
  turnAI: number,
  turnHuman: number,
  lastMovedPieceId: string | null,
  expansions: ExpansionsConfig
): number {
  const status = checkGameStatus(board);
  if (status.isGameOver) {
    if (status.winner === aiPlayer) return 10000;
    if (status.winner === humanPlayer) return -10000;
    return 0; // Draw
  }

  if (depth === 0) {
    return evaluateBoard(board, aiPlayer, aiReserve, humanReserve, turnAI, turnHuman, expansions);
  }

  const currentPlayer = isMaximizing ? aiPlayer : humanPlayer;
  const currentReserve = isMaximizing ? aiReserve : humanReserve;
  const oppReserve = isMaximizing ? humanReserve : aiReserve;
  const turnCount = isMaximizing ? turnAI : turnHuman;

  const legalActions = getPlayerAllLegalActions(
    board,
    currentPlayer,
    currentReserve,
    turnCount,
    lastMovedPieceId,
    expansions
  );

  if (legalActions.length === 0) {
    // Forced pass
    return minimax(
      board,
      depth - 1,
      alpha,
      beta,
      !isMaximizing,
      aiPlayer,
      humanPlayer,
      aiReserve,
      humanReserve,
      isMaximizing ? turnAI + 1 : turnAI,
      isMaximizing ? turnHuman : turnHuman + 1,
      lastMovedPieceId,
      expansions
    );
  }

  if (isMaximizing) {
    let maxEval = -Infinity;
    for (const action of legalActions) {
      const { nextBoard, nextAIReserve, nextHumanReserve } = simulateAction(
        board,
        action,
        aiPlayer,
        aiReserve,
        humanReserve
      );

      const evalVal = minimax(
        nextBoard,
        depth - 1,
        alpha,
        beta,
        false,
        aiPlayer,
        humanPlayer,
        nextAIReserve,
        nextHumanReserve,
        turnAI + 1,
        turnHuman,
        actuallyMovedPieceId(board, action),
        expansions
      );

      maxEval = Math.max(maxEval, evalVal);
      alpha = Math.max(alpha, evalVal);
      if (beta <= alpha) break; // Beta cutoff
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const action of legalActions) {
      const { nextBoard, nextAIReserve, nextHumanReserve } = simulateAction(
        board,
        action,
        humanPlayer,
        aiReserve,
        humanReserve
      );

      const evalVal = minimax(
        nextBoard,
        depth - 1,
        alpha,
        beta,
        true,
        aiPlayer,
        humanPlayer,
        nextAIReserve,
        nextHumanReserve,
        turnAI,
        turnHuman + 1,
        actuallyMovedPieceId(board, action),
        expansions
      );

      minEval = Math.min(minEval, evalVal);
      beta = Math.min(beta, evalVal);
      if (beta <= alpha) break; // Alpha cutoff
    }
    return minEval;
  }
}

// --- BOARD EVALUATION HEURISTIC ---

function evaluateBoard(
  board: BoardState,
  aiPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[],
  turnAI: number,
  turnHuman: number,
  expansions: ExpansionsConfig
): number {
  const humanPlayer: Player = aiPlayer === 1 ? 2 : 1;

  // Terminal positions dominate every heuristic.
  const status = checkGameStatus(board);
  if (status.isGameOver) {
    if (status.winner === aiPlayer) return 10000;
    if (status.winner === humanPlayer) return -10000;
    return 0; // Draw
  }

  const aiQueenHex = getQueenHex(board, aiPlayer);
  const humanQueenHex = getQueenHex(board, humanPlayer);

  let score = 0;

  // 1. Attack: surround the enemy queen. Attack weights are higher than
  //    defense because in Hive the best defense is a good offence — the
  //    player who surrounds the opponent's queen first wins regardless of
  //    their own queen's safety.  Progressive bonuses reward getting closer.
  if (humanQueenHex) {
    const neighbors = getAllNeighbors(humanQueenHex);
    const aiAdjacent = neighbors.filter(n => getTopPiece(board, n)?.player === aiPlayer).length;
    const anyOccupied = neighbors.filter(n => isOccupied(board, n)).length;
    score += aiAdjacent * 220;
    score += (anyOccupied - aiAdjacent) * 50;
    if (anyOccupied >= 3) score += 100;
    if (anyOccupied >= 4) score += 200;
    if (anyOccupied === 5) score += 500;
  } else {
    score += turnHuman >= 3 ? 30 : 10;
  }

  // 2. Defense: protect the AI queen. Weights are deliberately lower than
  //    attack so the AI doesn't become purely reactive.
  if (aiQueenHex) {
    const neighbors = getAllNeighbors(aiQueenHex);
    const enemyAdjacent = neighbors.filter(n => getTopPiece(board, n)?.player === humanPlayer).length;
    const anyOccupied = neighbors.filter(n => isOccupied(board, n)).length;
    const ownAdjacent = anyOccupied - enemyAdjacent;
    score -= enemyAdjacent * 180;
    if (anyOccupied >= 4) score -= 250;
    if (anyOccupied === 5) score -= 400;
    score += ownAdjacent * 15;
  } else {
    score -= turnAI >= 3 ? 60 : 15;
  }

  // Reserve / mobility: more pieces in reserve = more placement options.
  score += aiReserve.length * 20;
  score -= humanReserve.length * 20;

  // 3. Mobility & Pinning (beetles pinning enemy pieces or Queen)
  const occupiedHexes = getAllOccupiedHexes(board);
  for (const hex of occupiedHexes) {
    const stack = board.get(hexKey(hex.q, hex.r))!;
    if (stack.length > 1) {
      const topPiece = stack[stack.length - 1];
      const pinnedPiece = stack[stack.length - 2];

      if (topPiece.player === aiPlayer && pinnedPiece.player === humanPlayer) {
        score += 80; // AI beetle pinning human piece!
        if (pinnedPiece.type === 'QUEEN') score += 200; // Pinning human Queen!
      } else if (topPiece.player === humanPlayer && pinnedPiece.player === aiPlayer) {
        score -= 90; // Human beetle pinning AI piece!
        if (pinnedPiece.type === 'QUEEN') score -= 250;
      }
    }
  }

  return score;
}

// Medium-difficulty board evaluation: same structure as hard but with
// moderate weights.  Attack still outweighs defence, but the margin is
// smaller and there are no progressive "getting close" bonuses, making
// the AI less single-minded about rushing the enemy queen.
function evaluateBoardMedium(
  board: BoardState,
  aiPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[],
  turnAI: number,
  turnHuman: number,
  expansions: ExpansionsConfig
): number {
  const humanPlayer: Player = aiPlayer === 1 ? 2 : 1;

  const status = checkGameStatus(board);
  if (status.isGameOver) {
    if (status.winner === aiPlayer) return 10000;
    if (status.winner === humanPlayer) return -10000;
    return 0;
  }

  const aiQueenHex = getQueenHex(board, aiPlayer);
  const humanQueenHex = getQueenHex(board, humanPlayer);

  let score = 0;

  // Attack — moderate weights, less aggressive than hard
  if (humanQueenHex) {
    const neighbors = getAllNeighbors(humanQueenHex);
    const aiAdjacent = neighbors.filter(n => getTopPiece(board, n)?.player === aiPlayer).length;
    const anyOccupied = neighbors.filter(n => isOccupied(board, n)).length;
    score += aiAdjacent * 180;
    score += (anyOccupied - aiAdjacent) * 35;
    if (anyOccupied === 5) score += 350;
  } else {
    score += turnHuman >= 3 ? 25 : 8;
  }

  // Defence — slightly below attack so AI doesn't turtle
  if (aiQueenHex) {
    const neighbors = getAllNeighbors(aiQueenHex);
    const enemyAdjacent = neighbors.filter(n => getTopPiece(board, n)?.player === humanPlayer).length;
    const anyOccupied = neighbors.filter(n => isOccupied(board, n)).length;
    const ownAdjacent = anyOccupied - enemyAdjacent;
    score -= enemyAdjacent * 150;
    if (anyOccupied === 5) score -= 350;
    score += ownAdjacent * 12;
  } else {
    score -= turnAI >= 3 ? 50 : 12;
  }

  // Reserve / mobility
  score += aiReserve.length * 18;
  score -= humanReserve.length * 18;

  // Pinning
  const occupiedHexes = getAllOccupiedHexes(board);
  for (const hex of occupiedHexes) {
    const stack = board.get(hexKey(hex.q, hex.r))!;
    if (stack.length > 1) {
      const topPiece = stack[stack.length - 1];
      const pinnedPiece = stack[stack.length - 2];
      if (topPiece.player === aiPlayer && pinnedPiece.player === humanPlayer) {
        score += 60;
        if (pinnedPiece.type === 'QUEEN') score += 150;
      } else if (topPiece.player === humanPlayer && pinnedPiece.player === aiPlayer) {
        score -= 70;
        if (pinnedPiece.type === 'QUEEN') score -= 200;
      }
    }
  }

  return score;
}

// The piece that physically moved: a PILLBUG_SPECIAL actually relocates the
// pillbug's TARGET, not the pillbug itself. Search must track that id so the
// "one-tile move limit" rule applies to the right piece.
function actuallyMovedPieceId(board: BoardState, action: MoveAction): string {
  if (action.type === 'PILLBUG_SPECIAL' && action.pillbugTargetHex) {
    return getTopPiece(board, action.pillbugTargetHex)?.id ?? action.pieceId;
  }
  return action.pieceId;
}

// --- HELPER SIMULATE ACTION ---

function simulateAction(
  board: BoardState,
  action: MoveAction,
  actingPlayer: Player,
  aiReserve: Piece[],
  humanReserve: Piece[]
): { nextBoard: BoardState; nextAIReserve: Piece[]; nextHumanReserve: Piece[] } {
  const nextBoard = cloneBoard(board);
  let nextAIReserve = aiReserve;
  let nextHumanReserve = humanReserve;

  if (action.type === 'PLACE') {
    // Only deduct from the reserve that actually contains the placed piece.
    if (aiReserve.some(p => p.id === action.pieceId)) {
      nextAIReserve = aiReserve.filter(p => p.id !== action.pieceId);
    } else {
      nextHumanReserve = humanReserve.filter(p => p.id !== action.pieceId);
    }

    const newPiece: Piece = {
      id: action.pieceId,
      type: action.bugType,
      player: actingPlayer,
    };

    const key = hexKey(action.toHex.q, action.toHex.r);
    const existingStack = nextBoard.get(key) || [];
    nextBoard.set(key, [...existingStack, newPiece]);
  } else if (action.type === 'MOVE') {
    if (action.fromHex) {
      const fromKey = hexKey(action.fromHex.q, action.fromHex.r);
      const fromStack = nextBoard.get(fromKey) || [];
      const movedPiece = fromStack.pop();

      if (fromStack.length === 0) {
        nextBoard.delete(fromKey);
      }

      if (movedPiece) {
        const toKey = hexKey(action.toHex.q, action.toHex.r);
        const toStack = nextBoard.get(toKey) || [];
        nextBoard.set(toKey, [...toStack, movedPiece]);
      }
    }
  } else if (action.type === 'PILLBUG_SPECIAL' && action.pillbugTargetHex) {
    const targetKey = hexKey(action.pillbugTargetHex.q, action.pillbugTargetHex.r);
    const targetStack = nextBoard.get(targetKey) || [];
    const movedPiece = targetStack.pop();

    if (targetStack.length === 0) {
      nextBoard.delete(targetKey);
    }

    if (movedPiece) {
      const toKey = hexKey(action.toHex.q, action.toHex.r);
      const toStack = nextBoard.get(toKey) || [];
      nextBoard.set(toKey, [...toStack, movedPiece]);
    }
  }

  return { nextBoard, nextAIReserve, nextHumanReserve };
}
