import React, { useState, useRef, useEffect } from 'react';
import {
  AxialHex,
  BoardState,
  BUG_DEFINITIONS,
  BugType,
  hexKey,
  Piece,
  Player,
} from '../types/bugz';
import {
  getHexCornerPoints,
  getAllNeighbors,
  hexToPixel,
  isSameHex,
  pixelToHex,
} from '../logic/hexMath';
import { getStackHeight, getTopPiece } from '../logic/bugzRules';
import { ZoomIn, ZoomOut, Maximize2, Move } from 'lucide-react';
import { useI18n } from '../utils/i18n';

interface HexBoardProps {
  board: BoardState;
  selectedHex: AxialHex | null;
  validDestinations: AxialHex[];
  pillbugTargetHex: AxialHex | null;
  pillbugDestinations: AxialHex[];
  onSelectHex: (hex: AxialHex) => void;
  onSelectDestination: (hex: AxialHex) => void;
  onSelectPillbugTarget?: (hex: AxialHex) => void;
  currentPlayer: Player;
  isAITurn: boolean;
  lastMovedHex?: { from?: AxialHex; to: AxialHex } | null;
}

export const HexBoard: React.FC<HexBoardProps> = ({
  board,
  selectedHex,
  validDestinations,
  pillbugTargetHex,
  pillbugDestinations,
  onSelectHex,
  onSelectDestination,
  onSelectPillbugTarget,
  currentPlayer,
  isAITurn,
  lastMovedHex,
}) => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);

  // Pan & Zoom state
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const hexSize = 42; // Base radius of hex

  // Auto center board on first render or reset
  const handleRecenter = () => {
    setPan({ x: 0, y: 0 });
    setZoom(1);
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.1 : 0.9;
    setZoom(prev => Math.min(Math.max(prev * zoomFactor, 0.4), 2.5));
  };

  // Drag panning handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Only pan if left click on SVG background
    if (e.button === 0) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Collect all hexes to render:
  // 1. Occupied hexes on board
  // 2. Adjacent empty hexes surrounding the board (to show grid drop targets)
  // 3. Valid destinations
  const occupiedHexes = Array.from(board.keys()).map(key => {
    const [q, r] = (key as string).split(',').map(Number);
    return { q, r };
  });

  const renderHexesMap = new Map<string, AxialHex>();

  // Add occupied hexes
  for (const hex of occupiedHexes) {
    const key = hexKey(hex.q, hex.r);
    renderHexesMap.set(key, hex);

    // Add surrounding empty neighbor hexes
    for (const n of getAllNeighbors(hex)) {
      const nKey = hexKey(n.q, n.r);
      if (!renderHexesMap.has(nKey)) {
        renderHexesMap.set(nKey, n);
      }
    }
  }

  // If board is empty (Turn 1), render center hex (0,0) and neighbors
  if (renderHexesMap.size === 0) {
    const center = { q: 0, r: 0 };
    renderHexesMap.set(hexKey(0, 0), center);
    for (const n of getAllNeighbors(center)) {
      renderHexesMap.set(hexKey(n.q, n.r), n);
    }
  }

  // Also include all valid destination hexes
  for (const dest of validDestinations) {
    renderHexesMap.set(hexKey(dest.q, dest.r), dest);
  }
  for (const dest of pillbugDestinations) {
    renderHexesMap.set(hexKey(dest.q, dest.r), dest);
  }

  const hexList = Array.from(renderHexesMap.values());

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-slate-900 overflow-hidden select-none cursor-grab active:cursor-grabbing border border-slate-800 rounded-2xl shadow-inner"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Zoom and Pan Controls */}
      <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 bg-slate-800/80 backdrop-blur border border-slate-700/60 p-2 rounded-xl shadow-lg">
        <button
          onClick={() => setZoom(z => Math.min(z * 1.2, 2.5))}
          className="p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors"
          title={t('zoomIn')}
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={() => setZoom(z => Math.max(z / 1.2, 0.4))}
          className="p-2 hover:bg-slate-700 text-slate-200 hover:text-white rounded-lg transition-colors"
          title={t('zoomOut')}
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={handleRecenter}
          className="p-2 hover:bg-slate-700 text-amber-400 hover:text-amber-300 rounded-lg transition-colors"
          title={t('recenter')}
        >
          <Maximize2 className="w-5 h-5" />
        </button>
      </div>

      {/* Turn indicator watermark */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none bg-slate-950/60 backdrop-blur border border-slate-800 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-400 flex items-center gap-2">
        <Move className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>{t('panHint')}</span>
      </div>

      {/* Main SVG Grid Stage */}
      <svg
        className="w-full h-full pointer-events-auto"
        style={{ touchAction: 'none' }}
      >
        <g
          transform={`translate(${containerRef.current ? containerRef.current.clientWidth / 2 + pan.x : pan.x}, ${
            containerRef.current ? containerRef.current.clientHeight / 2 + pan.y : pan.y
          }) scale(${zoom})`}
        >
          {/* Subtle grid background pattern */}
          <defs>
            <radialGradient id="p1Gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#f1f5f9" />
            </radialGradient>
            <radialGradient id="p2Gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
            <radialGradient id="validGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
            </radialGradient>
            <filter id="glowGold" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Render Hex Tiles */}
          {hexList.map(hex => {
            const key = hexKey(hex.q, hex.r);
            const { x, y } = hexToPixel(hex.q, hex.r, hexSize);
            const stack = board.get(key) || [];
            const isOccupiedTile = stack.length > 0;
            const topPiece = isOccupiedTile ? stack[stack.length - 1] : null;
            const stackHeight = stack.length;

            const isSelected = selectedHex && isSameHex(selectedHex, hex);
            const isValidDest = validDestinations.some(d => isSameHex(d, hex));
            const isPillbugTarget = pillbugTargetHex && isSameHex(pillbugTargetHex, hex);
            const isPillbugDest = pillbugDestinations.some(d => isSameHex(d, hex));
            const isLastMoved = lastMovedHex?.to && isSameHex(lastMovedHex.to, hex);

            const cornerPoints = getHexCornerPoints(x, y, hexSize - 2);

            // Piece Styling
            let fillColor = 'none';
            let strokeColor = '#334155'; // default empty slate
            let strokeWidth = 1.5;

            if (isOccupiedTile && topPiece) {
              if (topPiece.player === 1) {
                fillColor = 'url(#p1Gradient)';
                strokeColor = '#e2e8f0';
              } else {
                fillColor = 'url(#p2Gradient)';
                strokeColor = '#475569';
              }
            } else if (isValidDest || isPillbugDest) {
              fillColor = 'rgba(16, 185, 129, 0.15)';
              strokeColor = '#10b981';
              strokeWidth = 2.5;
            }

            if (isSelected) {
              strokeColor = '#f59e0b'; // Amber glow
              strokeWidth = 4;
            } else if (isPillbugTarget) {
              strokeColor = '#ec4899'; // Pink/Magenta target highlight
              strokeWidth = 3.5;
            } else if (isLastMoved) {
              strokeColor = '#3b82f6'; // Blue pulse for last move
              strokeWidth = 3;
            }

            return (
              <g
                key={key}
                className="transition-all duration-200 cursor-pointer group"
                onClick={e => {
                  e.stopPropagation();
                  if (isAITurn) return;

                  if (isPillbugDest && onSelectDestination) {
                    onSelectDestination(hex);
                  } else if (isValidDest && onSelectDestination) {
                    onSelectDestination(hex);
                  } else if (isOccupiedTile) {
                    if (pillbugTargetHex && onSelectPillbugTarget && isSameHex(pillbugTargetHex, hex)) {
                      // Tapping the highlighted pillbug target cycles to the next one.
                      onSelectPillbugTarget(hex);
                    } else {
                      onSelectHex(hex);
                    }
                  }
                }}
              >
                {/* Hex Outline / Polygon */}
                <polygon
                  points={cornerPoints}
                  fill={fillColor}
                  stroke={strokeColor}
                  strokeWidth={strokeWidth}
                  className={`${
                    isValidDest || isPillbugDest ? 'animate-pulse hover:fill-emerald-500/30' : ''
                  } ${isSelected ? 'filter drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]' : ''}`}
                />

                {/* Outer Selection/Target Pulse Ring */}
                {(isValidDest || isPillbugDest) && (
                  <circle
                    cx={x}
                    cy={y}
                    r={14}
                    fill="#10b981"
                    className="animate-ping opacity-75"
                  />
                )}

                {/* Render Bug Emoji on Occupied Tile */}
                {isOccupiedTile && topPiece && (
                  <>
                    <text
                      x={x}
                      y={y + 8}
                      textAnchor="middle"
                      fontSize={26}
                      className="pointer-events-none select-none drop-shadow"
                    >
                      {BUG_DEFINITIONS[topPiece.type].emoji}
                    </text>

                    {/* Stack Height Badge (Beetle / Pillbug on top) */}
                    {stackHeight > 1 && (
                      <g transform={`translate(${x + 14}, ${y - 18})`}>
                        <circle r={10} fill="#f59e0b" stroke="#1e293b" strokeWidth={1.5} />
                        <text
                          x={0}
                          y={3.5}
                          textAnchor="middle"
                          fontSize={11}
                          fontWeight="bold"
                          fill="#0f172a"
                        >
                          {stackHeight}
                        </text>
                      </g>
                    )}

                    {/* Player Indicator Ring on Tile Corner */}
                    <circle
                      cx={x - 16}
                      cy={y - 16}
                      r={6}
                      fill={topPiece.player === 1 ? '#ffffff' : '#0f172a'}
                      stroke={topPiece.player === 1 ? '#cbd5e1' : '#64748b'}
                      strokeWidth={1.5}
                    />
                  </>
                )}

                {/* Valid Destination Dot for empty hexes */}
                {!isOccupiedTile && (isValidDest || isPillbugDest) && (
                  <circle cx={x} cy={y} r={7} fill="#10b981" />
                )}

                {/* Axial Coordinates Debug Label on hover */}
                <text
                  x={x}
                  y={y + (isOccupiedTile ? 28 : 4)}
                  textAnchor="middle"
                  fontSize={8}
                  fill="#64748b"
                  className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                  {hex.q},{hex.r}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
