import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  AxialHex,
  BoardState,
  BUG_DEFINITIONS,
  BugType,
  ExpansionsConfig,
  GameMode,
  GameSettings,
  GameSnapshot,
  hexKey,
  MoveAction,
  MoveLogEntry,
  Piece,
  Player,
  TutorialStep,
  TUTORIAL_STEP_ORDER,
  TUTORIAL_INSTRUCTION_KEYS,
} from './types/bugz';
import {
  checkGameStatus,
  cloneBoard,
  getEffectiveBugTypes,
  getPlayerAllLegalActions,
  getPillbugSpecialTargets,
  getTopPiece,
  getValidMovesForPiece,
  getValidPlacements,
  isQueenPlaced,
  PillbugTargetOption,
} from './logic/bugzRules';
import { computeAIMove } from './logic/bugzAI';

import { HexBoard } from './components/HexBoard';
import { ReservePanel } from './components/ReservePanel';
import { MoveLog } from './components/MoveLog';
import { NewGameModal } from './components/NewGameModal';
import { GameOverModal } from './components/GameOverModal';
import { KotlinCodeViewer } from './components/KotlinCodeViewer';

import { I18nProvider, LanguageSwitcher, useI18n } from './utils/i18n';

import {
  RotateCcw,
  RefreshCw,
  Flag,
  Settings,
  Code2,
  Bot,
  Users,
  Sparkles,
  AlertCircle,
  HelpCircle,
  GraduationCap,
  SkipForward,
  X,
} from 'lucide-react';

export default function BugzApp() {
  return (
    <I18nProvider>
      <App />
    </I18nProvider>
  );
}

function App() {
  const { t } = useI18n();
  // --- GAME CONFIGURATION ---
  const [settings, setSettings] = useState<GameSettings>({
    mode: 'AI',
    aiDifficulty: 'MEDIUM',
    expansions: { mosquito: true, ladybug: true, pillbug: true },
  });

  // --- CORE GAME STATE ---
  const [board, setBoard] = useState<BoardState>(new Map());
  const [p1Reserve, setP1Reserve] = useState<Piece[]>([]);
  const [p2Reserve, setP2Reserve] = useState<Piece[]>([]);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(1);
  const [turnCountP1, setTurnCountP1] = useState<number>(1);
  const [turnCountP2, setTurnCountP2] = useState<number>(1);
  const [lastMovedPieceId, setLastMovedPieceId] = useState<string | null>(null);
  const [lastMovedHex, setLastMovedHex] = useState<{ from?: AxialHex; to: AxialHex } | null>(null);
  const [moveHistory, setMoveHistory] = useState<MoveLogEntry[]>([]);
  const [snapshots, setSnapshots] = useState<GameSnapshot[]>([]);

  // --- SELECTION & INTERACTION STATE ---
  const [selectedHex, setSelectedHex] = useState<AxialHex | null>(null);
  const [selectedReserveBug, setSelectedReserveBug] = useState<BugType | null>(null);
  const [validDestinations, setValidDestinations] = useState<AxialHex[]>([]);
  const [pillbugTargetHex, setPillbugTargetHex] = useState<AxialHex | null>(null);
  const [pillbugDestinations, setPillbugDestinations] = useState<AxialHex[]>([]);
  const [pillbugTargets, setPillbugTargets] = useState<PillbugTargetOption[]>([]);
  const [pillbugTargetIdx, setPillbugTargetIdx] = useState<number>(0);
  const [isAITurn, setIsAITurn] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  // Identifies the current match; a new game invalidates any pending AI move.
  const gameIdRef = useRef(0);

  // --- MODALS ---
  const [isNewGameModalOpen, setIsNewGameModalOpen] = useState<boolean>(true);
  const [isGameOverModalOpen, setIsGameOverModalOpen] = useState<boolean>(false);
  const [isKotlinModalOpen, setIsKotlinModalOpen] = useState<boolean>(false);

  // --- TUTORIAL STATE ---
  const [tutorialStep, setTutorialStep] = useState<TutorialStep>('COMPLETE');
  const isTutorial = !!(settings.tutorialMode && tutorialStep !== 'COMPLETE');

  // Helper function to create initial reserves for a player
  const createInitialReserve = (player: Player, expansions: ExpansionsConfig): Piece[] => {
    const pieces: Piece[] = [];
    (Object.keys(BUG_DEFINITIONS) as BugType[]).forEach(bugType => {
      const info = BUG_DEFINITIONS[bugType];
      if (
        !info.isExpansion ||
        (bugType === 'MOSQUITO' && expansions.mosquito) ||
        (bugType === 'LADYBUG' && expansions.ladybug) ||
        (bugType === 'PILLBUG' && expansions.pillbug)
      ) {
        for (let i = 0; i < info.count; i++) {
          pieces.push({
            id: `p${player}_${bugType}_${i}`,
            type: bugType,
            player,
          });
        }
      }
    });
    return pieces;
  };

  // Initialize a new game
  const handleStartNewGame = useCallback((newSettings: GameSettings) => {
    setSettings(newSettings);
    setBoard(new Map());
    setP1Reserve(createInitialReserve(1, newSettings.expansions));
    setP2Reserve(createInitialReserve(2, newSettings.expansions));
    setCurrentPlayer(1);
    setTurnCountP1(1);
    setTurnCountP2(1);
    setLastMovedPieceId(null);
    setLastMovedHex(null);
    setMoveHistory([]);
    setSnapshots([]);
    setSelectedHex(null);
    setSelectedReserveBug(null);
    setValidDestinations([]);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);
    setPillbugTargets([]);
    setPillbugTargetIdx(0);
    setIsAITurn(false);
    setIsNewGameModalOpen(false);
    setIsGameOverModalOpen(false);
    setToastMessage(null);
    setTutorialStep(newSettings.tutorialMode ? 'WELCOME' : 'COMPLETE');
    gameIdRef.current += 1;
  }, []);

  // Save game snapshot for Unlimited Undo
  const saveSnapshot = useCallback(
    (
      curBoard: BoardState,
      p1Res: Piece[],
      p2Res: Piece[],
      curPlayer: Player,
      tP1: number,
      tP2: number,
      lastId: string | null,
      history: MoveLogEntry[]
    ) => {
      const serializedBoard: [string, Piece[]][] = Array.from(curBoard.entries()).map(
        ([k, v]) => [k, [...v]]
      );
      const snapshot: GameSnapshot = {
        board: serializedBoard,
        p1Reserve: [...p1Res],
        p2Reserve: [...p2Res],
        currentPlayer: curPlayer,
        turnCountP1: tP1,
        turnCountP2: tP2,
        lastMovedPieceId: lastId,
        moveHistory: [...history],
      };
      setSnapshots(prev => [...prev, snapshot]);
    },
    []
  );

  // Unlimited Undo step
  const handleUndo = useCallback(() => {
    if (snapshots.length === 0 || isAITurn) return;

    // In AI mode, undo 2 steps if previous turn was AI
    let stepsToUndo = 1;
    if (settings.mode === 'AI' && snapshots.length >= 2) {
      stepsToUndo = 2;
    }

    const targetIndex = Math.max(0, snapshots.length - stepsToUndo);
    const targetSnapshot = snapshots[targetIndex];

    const restoredBoard = new Map<string, Piece[]>();
    targetSnapshot.board.forEach(([k, v]) => restoredBoard.set(k, [...v]));

    setBoard(restoredBoard);
    setP1Reserve([...targetSnapshot.p1Reserve]);
    setP2Reserve([...targetSnapshot.p2Reserve]);
    setCurrentPlayer(targetSnapshot.currentPlayer);
    setTurnCountP1(targetSnapshot.turnCountP1);
    setTurnCountP2(targetSnapshot.turnCountP2);
    setLastMovedPieceId(targetSnapshot.lastMovedPieceId);
    setMoveHistory([...targetSnapshot.moveHistory]);

    // Trim snapshot stack
    setSnapshots(prev => prev.slice(0, targetIndex));

    // Clear selections
    setSelectedHex(null);
    setSelectedReserveBug(null);
    setValidDestinations([]);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);
    setPillbugTargets([]);
    setPillbugTargetIdx(0);
  }, [snapshots, isAITurn, settings.mode]);

  // Check Game Status after move
  const gameStatus = checkGameStatus(board);

  useEffect(() => {
    if (gameStatus.isGameOver && !isGameOverModalOpen) {
      setIsGameOverModalOpen(true);
    }
  }, [gameStatus, isGameOverModalOpen]);

  // Handle Forced Pass check when turn changes
  useEffect(() => {
    if (gameStatus.isGameOver) return;

    const curReserve = currentPlayer === 1 ? p1Reserve : p2Reserve;
    const curTurnCount = currentPlayer === 1 ? turnCountP1 : turnCountP2;

    const legalActions = getPlayerAllLegalActions(
      board,
      currentPlayer,
      curReserve,
      curTurnCount,
      lastMovedPieceId,
      settings.expansions
    );

    if (legalActions.length === 0 && (board.size > 0 || p1Reserve.length > 0)) {
      // Player has NO legal moves or placements -> Forced Pass!
      setToastMessage(t('toastForcedPass', { n: currentPlayer }));
      setTimeout(() => setToastMessage(null), 3000);

      // Record pass in history
      const passLog: MoveLogEntry = {
        turnNumber: curTurnCount,
        player: currentPlayer,
        actionType: 'PASS',
        bugType: 'QUEEN',
        description: t('passLogDesc', { n: currentPlayer }),
      };
      setMoveHistory(prev => [...prev, passLog]);

      // Switch turn
      if (currentPlayer === 1) {
        setCurrentPlayer(2);
      } else {
        setCurrentPlayer(1);
      }
    }
  }, [currentPlayer, board, p1Reserve, p2Reserve, turnCountP1, turnCountP2, lastMovedPieceId, settings.expansions, gameStatus.isGameOver]);

  // --- AI MOVE TRIGGER ---
  // NOTE: `isAITurn` is intentionally NOT in the dependency array. Setting it
  // to true here would re-run the effect and its cleanup would cancel the AI
  // timer before it ever fires, leaving the AI stuck on "thinking" forever
  // (the flag is only read from the render closure as a re-entry guard).
  useEffect(() => {
    // Skip AI during tutorial — tutorial handles its own opponent moves
    if (settings.tutorialMode && tutorialStep !== 'COMPLETE') return;

    if (
      settings.mode === 'AI' &&
      currentPlayer === 2 &&
      !gameStatus.isGameOver &&
      !isAITurn
    ) {
      // If the AI has no legal actions, the forced-pass effect handles the
      // turn switch — do not set isAITurn, otherwise its timer cleanup would
      // run when that effect flips the player and the lock would never release.
      const aiLegal = getPlayerAllLegalActions(
        board,
        2,
        p2Reserve,
        turnCountP2,
        lastMovedPieceId,
        settings.expansions
      );
      if (aiLegal.length === 0) return;

      setIsAITurn(true);
      const gid = gameIdRef.current;

      const aiTimer = setTimeout(() => {
        // Guard: the match may have been restarted while the AI was thinking.
        if (gameIdRef.current !== gid) {
          setIsAITurn(false);
          return;
        }
        try {
          const aiAction = computeAIMove(
            board,
            2,
            p2Reserve,
            p1Reserve,
            turnCountP2,
            turnCountP1,
            settings.aiDifficulty,
            lastMovedPieceId,
            settings.expansions
          );

          if (aiAction) {
            executeMove(aiAction);
          } else {
            // AI forced pass
            setToastMessage(t('toastAiPass'));
            setTimeout(() => setToastMessage(null), 3000);
            setCurrentPlayer(1);
          }
        } finally {
          // Always release the thinking lock, even if a move throws.
          setIsAITurn(false);
        }
      }, 600);

      return () => clearTimeout(aiTimer);
    }
  }, [currentPlayer, settings, board, p1Reserve, p2Reserve, turnCountP1, turnCountP2, lastMovedPieceId, gameStatus.isGameOver, tutorialStep]);

  // Execute a validated MoveAction
  const executeMove = (action: MoveAction) => {
    saveSnapshot(
      board,
      p1Reserve,
      p2Reserve,
      currentPlayer,
      turnCountP1,
      turnCountP2,
      lastMovedPieceId,
      moveHistory
    );

    const nextBoard = cloneBoard(board);
    let nextP1Res = [...p1Reserve];
    let nextP2Res = [...p2Reserve];
    let logDesc = '';

    if (action.type === 'PLACE') {
      if (action.player === 1) {
        const idx = nextP1Res.findIndex(p => p.id === action.pieceId);
        if (idx !== -1) nextP1Res.splice(idx, 1);
      } else {
        const idx = nextP2Res.findIndex(p => p.id === action.pieceId);
        if (idx !== -1) nextP2Res.splice(idx, 1);
      }

      const newPiece: Piece = {
        id: action.pieceId,
        type: action.bugType,
        player: action.player,
      };

      const key = hexKey(action.toHex.q, action.toHex.r);
      const stack = nextBoard.get(key) || [];
      nextBoard.set(key, [...stack, newPiece]);

      logDesc = t('placedDesc', { bug: BUG_DEFINITIONS[action.bugType].name, q: action.toHex.q, r: action.toHex.r });
      setLastMovedHex({ to: action.toHex });
    } else if (action.type === 'MOVE' && action.fromHex) {
      const fromKey = hexKey(action.fromHex.q, action.fromHex.r);
      const fromStack = nextBoard.get(fromKey) || [];
      const movedPiece = fromStack.pop();

      if (fromStack.length === 0) nextBoard.delete(fromKey);

      if (movedPiece) {
        const toKey = hexKey(action.toHex.q, action.toHex.r);
        const toStack = nextBoard.get(toKey) || [];
        nextBoard.set(toKey, [...toStack, movedPiece]);
      }

      logDesc = t('movedDesc', { bug: BUG_DEFINITIONS[action.bugType].name, q1: action.fromHex.q, r1: action.fromHex.r, q2: action.toHex.q, r2: action.toHex.r });
      setLastMovedHex({ from: action.fromHex, to: action.toHex });
    } else if (action.type === 'PILLBUG_SPECIAL' && action.pillbugTargetHex) {
      const targetKey = hexKey(action.pillbugTargetHex.q, action.pillbugTargetHex.r);
      const targetStack = nextBoard.get(targetKey) || [];
      const movedPiece = targetStack.pop();

      if (targetStack.length === 0) nextBoard.delete(targetKey);

      if (movedPiece) {
        const toKey = hexKey(action.toHex.q, action.toHex.r);
        const toStack = nextBoard.get(toKey) || [];
        nextBoard.set(toKey, [...toStack, movedPiece]);
      }

      logDesc = t('pillbugMovedDesc', { bug: movedPiece ? BUG_DEFINITIONS[movedPiece.type].name : 'piece', q1: action.pillbugTargetHex.q, r1: action.pillbugTargetHex.r, q2: action.toHex.q, r2: action.toHex.r });
      setLastMovedHex({ from: action.pillbugTargetHex, to: action.toHex });
    }

    setBoard(nextBoard);
    setP1Reserve(nextP1Res);
    setP2Reserve(nextP2Res);

    // Record the piece that actually moved/placed so it is "stunned" (cannot
    // move) on the opponent's next turn. For a pillbug special the moved piece
    // is the target it picked up, not the pillbug itself.
    let actuallyMovedId: string | null = null;
    if (action.type === 'PILLBUG_SPECIAL' && action.pillbugTargetHex) {
      const moved = nextBoard.get(hexKey(action.toHex.q, action.toHex.r));
      actuallyMovedId = moved && moved.length > 0 ? moved[moved.length - 1].id : action.pieceId;
    } else {
      actuallyMovedId = action.pieceId;
    }
    setLastMovedPieceId(actuallyMovedId);

    const logEntry: MoveLogEntry = {
      turnNumber: currentPlayer === 1 ? turnCountP1 : turnCountP2,
      player: currentPlayer,
      actionType: action.type,
      bugType: action.bugType,
      from: action.fromHex,
      to: action.toHex,
      description: logDesc,
    };
    setMoveHistory(prev => [...prev, logEntry]);

    // Reset interaction state
    setSelectedHex(null);
    setSelectedReserveBug(null);
    setValidDestinations([]);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);
    setPillbugTargets([]);
    setPillbugTargetIdx(0);

    // Update Turn Counts & Switch Player
    if (currentPlayer === 1) {
      setTurnCountP1(prev => prev + 1);
      setCurrentPlayer(2);
    } else {
      setTurnCountP2(prev => prev + 1);
      setCurrentPlayer(1);
    }

    // Advance tutorial step after any move in tutorial mode
    if (settings.tutorialMode && tutorialStep !== 'COMPLETE') {
      advanceTutorial();
    }
  };

  // --- TUTORIAL LOGIC ---
  const PLAYER_TUTORIAL_STEPS: TutorialStep[] = [
    'PLACE_QUEEN', 'PLACE_SPIDER', 'PLACE_BEETLE', 'PLACE_GRASSHOPPER', 'MOVE_EXAMPLE',
  ];
  const PLAYER_TUTORIAL_STEP_NUM: Record<TutorialStep, number> = {
    WELCOME: 0, PLACE_QUEEN: 1, OPP_QUEEN: 0, PLACE_SPIDER: 2, OPP_SPIDER: 0,
    PLACE_BEETLE: 3, OPP_BEETLE: 0, PLACE_GRASSHOPPER: 4, MOVE_EXAMPLE: 5, COMPLETE: 0,
  };
  const TUTORIAL_NEXT: Record<TutorialStep, TutorialStep> = {
    WELCOME: 'PLACE_QUEEN',
    PLACE_QUEEN: 'OPP_QUEEN',
    OPP_QUEEN: 'PLACE_SPIDER',
    PLACE_SPIDER: 'OPP_SPIDER',
    OPP_SPIDER: 'PLACE_BEETLE',
    PLACE_BEETLE: 'OPP_BEETLE',
    OPP_BEETLE: 'PLACE_GRASSHOPPER',
    PLACE_GRASSHOPPER: 'MOVE_EXAMPLE',
    MOVE_EXAMPLE: 'COMPLETE',
    COMPLETE: 'COMPLETE',
  };

  const advanceTutorial = () => {
    setTutorialStep(TUTORIAL_NEXT[tutorialStep]);
  };

  // Auto-execute opponent placement when tutorial is on an OPP_* step.
  // Uses useEffect to always read fresh state (avoids stale-closure bugs).
  useEffect(() => {
    if (!isTutorial || !tutorialStep.startsWith('OPP_') || gameStatus.isGameOver) return;

    const oppBugType: BugType =
      tutorialStep === 'OPP_QUEEN' ? 'QUEEN' :
      tutorialStep === 'OPP_SPIDER' ? 'SPIDER' :
      tutorialStep === 'OPP_BEETLE' ? 'BEETLE' : 'GRASSHOPPER';

    setIsAITurn(true);
    const timer = setTimeout(() => {
      const piece = p2Reserve.find(p => p.type === oppBugType);
      if (piece) {
        const placements = getValidPlacements(board, 2, turnCountP2);
        if (placements.length > 0) {
          executeMove({
            type: 'PLACE',
            pieceId: piece.id,
            bugType: oppBugType,
            player: 2,
            toHex: placements[0],
          });
        }
      }
      setIsAITurn(false);
    }, 800);

    return () => { clearTimeout(timer); setIsAITurn(false); };
  }, [tutorialStep, isTutorial, board, p2Reserve, turnCountP2, gameStatus.isGameOver]);

  const skipTutorial = () => {
    setTutorialStep('COMPLETE');
    setSettings(s => ({ ...s, tutorialMode: false }));
    setIsNewGameModalOpen(true);
  };

  // --- USER INTERACTION HANDLERS ---

  // Reserve bug selected
  const handleSelectReserveBug = (bugType: BugType) => {
    if (isAITurn) return;

    setSelectedHex(null);
    setPillbugTargetHex(null);
    setPillbugDestinations([]);

    if (selectedReserveBug === bugType) {
      setSelectedReserveBug(null);
      setValidDestinations([]);
    } else {
      setSelectedReserveBug(bugType);
      const curTurnCount = currentPlayer === 1 ? turnCountP1 : turnCountP2;
      const placements = getValidPlacements(board, currentPlayer, curTurnCount);
      setValidDestinations(placements);
    }
  };

  // Board hex clicked
  const handleSelectHex = (hex: AxialHex) => {
    if (isAITurn) return;

    const stack = board.get(hexKey(hex.q, hex.r));
    const topPiece = stack && stack.length > 0 ? stack[stack.length - 1] : null;

    // Reset reserve selection
    setSelectedReserveBug(null);

    // If clicking same hex twice, toggle off selection
    if (selectedHex && selectedHex.q === hex.q && selectedHex.r === hex.r) {
      setSelectedHex(null);
      setValidDestinations([]);
      setPillbugTargetHex(null);
      setPillbugDestinations([]);
      return;
    }

    if (topPiece && topPiece.player === currentPlayer) {
      setSelectedHex(hex);
      const curTurnCount = currentPlayer === 1 ? turnCountP1 : turnCountP2;
      const moves = getValidMovesForPiece(
        board,
        hex,
        currentPlayer,
        curTurnCount,
        lastMovedPieceId,
        settings.expansions
      );
      setValidDestinations(moves);

      // Check Pillbug / Mosquito special action targets
      const effectiveTypes = getEffectiveBugTypes(board, hex, topPiece, settings.expansions);
      if (effectiveTypes.includes('PILLBUG')) {
        const pbTargets = getPillbugSpecialTargets(board, hex, currentPlayer, lastMovedPieceId);
        setPillbugTargets(pbTargets);
        setPillbugTargetIdx(0);
        if (pbTargets.length > 0) {
          // Highlight the first eligible target (the player can cycle to the
          // others by tapping the highlighted target again).
          setPillbugTargetHex(pbTargets[0].targetHex);
          setPillbugDestinations(pbTargets[0].destinationHexes);
        }
      } else {
        setPillbugTargets([]);
        setPillbugTargetIdx(0);
        setPillbugTargetHex(null);
        setPillbugDestinations([]);
      }
    }
  };

  // Cycle to the next eligible Pillbug target when the highlighted one is tapped.
  const handleCyclePillbugTarget = () => {
    if (pillbugTargets.length === 0) return;
    const nextIdx = (pillbugTargetIdx + 1) % pillbugTargets.length;
    setPillbugTargetIdx(nextIdx);
    setPillbugTargetHex(pillbugTargets[nextIdx].targetHex);
    setPillbugDestinations(pillbugTargets[nextIdx].destinationHexes);
  };

  // Destination selected to execute move or placement
  const handleSelectDestination = (destHex: AxialHex) => {
    if (isAITurn) return;

    const curReserve = currentPlayer === 1 ? p1Reserve : p2Reserve;

    if (selectedReserveBug) {
      // Placement Action
      const pieceToPlace = curReserve.find(p => p.type === selectedReserveBug);
      if (pieceToPlace) {
        executeMove({
          type: 'PLACE',
          pieceId: pieceToPlace.id,
          bugType: selectedReserveBug,
          player: currentPlayer,
          toHex: destHex,
        });
      }
    } else if (selectedHex) {
      const topPiece = getTopPiece(board, selectedHex);
      if (topPiece) {
        if (
          pillbugTargetHex &&
          pillbugDestinations.some(d => d.q === destHex.q && d.r === destHex.r)
        ) {
          // Execute Pillbug Special Action
          executeMove({
            type: 'PILLBUG_SPECIAL',
            pieceId: topPiece.id,
            bugType: topPiece.type,
            player: currentPlayer,
            fromHex: selectedHex,
            pillbugTargetHex,
            toHex: destHex,
          });
        } else {
          // Standard Move Action
          executeMove({
            type: 'MOVE',
            pieceId: topPiece.id,
            bugType: topPiece.type,
            player: currentPlayer,
            fromHex: selectedHex,
            toHex: destHex,
          });
        }
      }
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden">
      {/* Top Header Controls Bar */}
      <header className="bg-slate-900/90 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-md z-30">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <h1 className="text-lg font-black tracking-tight text-amber-400">
              {t('appTitle')} <span className="text-slate-400 text-xs font-normal">{t('appSubtitle')}</span>
            </h1>
          </div>

          <span className="hidden sm:inline-block text-sm font-semibold px-3 pt-1.5 pb-2.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700 translate-y-2.5">
            {settings.mode === 'AI'
              ? t('vsAi', { diff: t(settings.aiDifficulty === 'EASY' ? 'easyBtn' : settings.aiDifficulty === 'MEDIUM' ? 'mediumBtn' : 'hardBtn') })
              : t('passAndPlay')}
          </span>
        </div>

        {/* Turn Status Badge */}
        <div className="flex items-center gap-3">
          <div
            className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-2 shadow-sm ${
              currentPlayer === 1
                ? 'bg-slate-800 border-amber-400 text-amber-300'
                : 'bg-slate-900 border-blue-400 text-blue-300'
            }`}
          >
            <div
              className={`w-2.5 h-2.5 rounded-full ${
                currentPlayer === 1 ? 'bg-white' : 'bg-slate-950 border border-slate-500'
              } ${isAITurn ? 'animate-ping' : ''}`}
            />
            <span>
              {isAITurn
                ? t('aiThinking')
                : t('playersTurn', { n: currentPlayer, color: currentPlayer === 1 ? t('white') : t('black') })}
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1">
            <LanguageSwitcher className="!px-1.5 !py-1" />
            <button
              onClick={handleUndo}
              disabled={snapshots.length === 0 || isAITurn}
              className={`p-2 rounded-xl border transition-colors ${
                snapshots.length > 0 && !isAITurn
                  ? 'bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white'
                  : 'bg-slate-950/50 border-slate-800/50 text-slate-600 cursor-not-allowed'
              }`}
              title={t('undoTitle')}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsNewGameModalOpen(true)}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
              title={t('newGameTitle')}
            >
              <Settings className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsKotlinModalOpen(true)}
              className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-400 hover:bg-amber-500/20 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title={t('kotlinTitle')}
            >
              <Code2 className="w-4 h-4" />
              <span className="hidden md:inline">{t('kotlinSource')}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2 rounded-2xl shadow-xl border border-amber-300 text-xs flex items-center gap-2 animate-bounce">
          <AlertCircle className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Tutorial Welcome Dialog */}
      {tutorialStep === 'WELCOME' && !isNewGameModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-slate-900 border border-amber-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap className="w-6 h-6 text-amber-400" />
              <h3 className="text-lg font-black text-amber-300">{t('tutorialMode')}</h3>
            </div>
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">{t('tutorialWelcome')}</p>
            <div className="flex gap-3">
              <button
                onClick={skipTutorial}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-700 text-slate-400 text-xs font-bold hover:bg-slate-800 transition-colors"
              >
                {t('tutorialSkip')}
              </button>
              <button
                onClick={() => setTutorialStep('PLACE_QUEEN')}
                className="flex-1 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black transition-transform active:scale-95"
              >
                {t('tutorialNext')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tutorial Complete Dialog */}
      {settings.tutorialMode && tutorialStep === 'COMPLETE' && board.size > 0 && !isNewGameModalOpen && !isGameOverModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-slate-900 border border-emerald-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl">
            <p className="text-sm text-slate-300 mb-5 leading-relaxed">{t('tutorialComplete')}</p>
            <button
              onClick={skipTutorial}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-transform active:scale-95"
            >
              {t('tutorialGotIt')}
            </button>
          </div>
        </div>
      )}

      {/* Tutorial Instruction Overlay (below top bar) */}
      {isTutorial && !isNewGameModalOpen && tutorialStep !== 'WELCOME' && (
        <div className="bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 flex items-center justify-between z-20">
          <div className="flex items-center gap-2 text-xs">
            <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-amber-200 font-medium">
              {tutorialStep.startsWith('OPP_')
                ? t(TUTORIAL_INSTRUCTION_KEYS[tutorialStep] as keyof typeof import('./utils/strings').STRINGS)
                : t('tutorialStepLabel', { n: PLAYER_TUTORIAL_STEP_NUM[tutorialStep] }) + ' ' + t(TUTORIAL_INSTRUCTION_KEYS[tutorialStep] as keyof typeof import('./utils/strings').STRINGS)
              }
            </span>
          </div>
          <button
            onClick={skipTutorial}
            className="shrink-0 ml-3 flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            <SkipForward className="w-3.5 h-3.5" />
            <span>{t('tutorialSkip')}</span>
          </button>
        </div>
      )}

      {/* Main Board Stage & Panels Layout */}
      <div className="flex-1 flex flex-col md:flex-row relative overflow-hidden">
        {/* Left Sidebar: Player 1 Reserve (White) on top, Player 2 Reserve (Black) underneath */}
        <div className="hidden md:flex flex-col w-72 p-4 bg-slate-950/80 border-r border-slate-800/80 overflow-y-auto z-10 shrink-0 gap-4">
          {/* Player 1 Reserve (White - Always 1st) */}
          <ReservePanel
            player={1}
            reserve={p1Reserve}
            isActive={currentPlayer === 1 && !isAITurn}
            selectedBugType={currentPlayer === 1 ? selectedReserveBug : null}
            onSelectBugType={handleSelectReserveBug}
            turnCount={turnCountP1}
            queenPlaced={isQueenPlaced(board, 1)}
          />

          {/* Player 2 Reserve (Black - Underneath Player 1) */}
          <ReservePanel
            player={2}
            reserve={p2Reserve}
            isActive={currentPlayer === 2 && !isAITurn}
            selectedBugType={currentPlayer === 2 ? selectedReserveBug : null}
            onSelectBugType={handleSelectReserveBug}
            turnCount={turnCountP2}
            queenPlaced={isQueenPlaced(board, 2)}
          />
        </div>

        {/* Center Hex Grid Board Stage */}
        <div className="flex-1 relative h-full">
          <HexBoard
            board={board}
            selectedHex={selectedHex}
            validDestinations={validDestinations}
            pillbugTargetHex={pillbugTargetHex}
            pillbugDestinations={pillbugDestinations}
            onSelectHex={handleSelectHex}
            onSelectDestination={handleSelectDestination}
            onSelectPillbugTarget={handleCyclePillbugTarget}
            currentPlayer={currentPlayer}
            isAITurn={isAITurn}
            lastMovedHex={lastMovedHex}
          />

          {/* Move History Drawer Overlay */}
          <div className="absolute bottom-4 right-4 z-20 max-w-xs w-full">
            <MoveLog logs={moveHistory} />
          </div>
        </div>

        {/* Mobile Reserves Bottom Switcher Bar */}
        <div className="block md:hidden p-3 bg-slate-900 border-t border-slate-800 z-20">
          <ReservePanel
            player={currentPlayer}
            reserve={currentPlayer === 1 ? p1Reserve : p2Reserve}
            isActive={!isAITurn}
            selectedBugType={selectedReserveBug}
            onSelectBugType={handleSelectReserveBug}
            turnCount={currentPlayer === 1 ? turnCountP1 : turnCountP2}
            queenPlaced={isQueenPlaced(board, currentPlayer)}
          />
        </div>
      </div>

      {/* Modals */}
      <NewGameModal
        isOpen={isNewGameModalOpen}
        onStartGame={handleStartNewGame}
        onClose={() => setIsNewGameModalOpen(false)}
        canCancel={board.size > 0}
      />

      <GameOverModal
        isOpen={isGameOverModalOpen}
        winner={gameStatus.winner}
        onRestart={() => handleStartNewGame(settings)}
        onNewGameSetup={() => {
          setIsGameOverModalOpen(false);
          setIsNewGameModalOpen(true);
        }}
      />

      <KotlinCodeViewer
        isOpen={isKotlinModalOpen}
        onClose={() => setIsKotlinModalOpen(false)}
      />
    </div>
  );
}
