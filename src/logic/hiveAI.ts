import {
  AIDifficulty,
  BoardState,
  ExpansionsConfig,
  hexKey,
  MoveAction,
  Piece,
  Player,
} from '../types/hive';
import {
  checkGameStatus,
  cloneBoard,
  getAllOccupiedHexes,
  getPlayerAllLegalActions,
  getQueenHex,
  getTopPiece,
  isOccupied,
  isQueenPlaced,
} from './hiveRules';
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

  // Hive queen rule: the queen must be placed by the 3rd move. Force the AI
  // to place its queen on its 3rd turn if it has not done so already.
  if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
    const queenActions = legalActions.filter(a => a.bugType === 'QUEEN');
    if (queenActions.length > 0) {
      return queenActions[Math.floor(Math.random() * queenActions.length)];
    }
  }

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

// Easy AI: Selects random legal move, prioritizing Queen placement by turn 3
function computeEasyMove(
  board: BoardState,
  aiPlayer: Player,
  legalActions: MoveAction[],
  turnCountAI: number
): MoveAction {
  // The queen is forced on the 3rd turn by computeAIMove; this fallback keeps
  // the behaviour consistent even when the difficulty functions are called
  // directly.
  if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
    const queenActions = legalActions.filter(a => a.bugType === 'QUEEN');
    if (queenActions.length > 0) {
      return queenActions[Math.floor(Math.random() * queenActions.length)];
    }
  }

  return legalActions[Math.floor(Math.random() * legalActions.length)];
}

// Medium AI: Greedy evaluation of board state
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

    const score = evaluateBoard(
      nextBoard,
      aiPlayer,
      nextAIReserve,
      nextHumanReserve,
      expansions
    );

    if (score > bestScore) {
      bestScore = score;
      bestActions = [action];
    } else if (score === bestScore) {
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
    if (status.isGameOver && status.winner === aiPlayer) {
      return action; // Instant win!
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
      action.pieceId,
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
    return evaluateBoard(board, aiPlayer, aiReserve, humanReserve, expansions);
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
        action.pieceId,
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
        action.pieceId,
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
  expansions: ExpansionsConfig
): number {
  const humanPlayer: Player = aiPlayer === 1 ? 2 : 1;

  const aiQueenHex = getQueenHex(board, aiPlayer);
  const humanQueenHex = getQueenHex(board, humanPlayer);

  let score = 0;

  // 1. Enemy Queen surrounded count (+150 per surrounding piece!)
  if (humanQueenHex) {
    const surroundedCount = getAllNeighbors(humanQueenHex).filter(n => isOccupied(board, n)).length;
    score += surroundedCount * 150;
    if (surroundedCount === 5) score += 300; // Close to win!
  } else {
    // Enemy hasn't placed Queen yet
    score += 50;
  }

  // 2. Friendly Queen surrounded count (-180 per surrounding piece!)
  if (aiQueenHex) {
    const surroundedCount = getAllNeighbors(aiQueenHex).filter(n => isOccupied(board, n)).length;
    score -= surroundedCount * 180;
    if (surroundedCount === 5) score -= 400; // Danger!
  } else {
    // AI hasn't placed Queen yet
    score -= 80;
  }

  // 3. Mobility & Pinning (Beetles pinning enemy pieces or Queen)
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

  // 4. Reserve penalty for Queen not placed
  if (!isQueenPlaced(board, aiPlayer)) {
    score -= 100;
  }

  return score;
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
  let nextAIReserve = [...aiReserve];
  let nextHumanReserve = [...humanReserve];

  if (action.type === 'PLACE') {
    nextAIReserve = nextAIReserve.filter(p => p.id !== action.pieceId);
    nextHumanReserve = nextHumanReserve.filter(p => p.id !== action.pieceId);

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
