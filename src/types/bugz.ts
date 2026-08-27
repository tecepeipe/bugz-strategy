export type Player = 1 | 2;

export type BugType = 
  | 'QUEEN' 
  | 'SPIDER' 
  | 'BEETLE' 
  | 'GRASSHOPPER' 
  | 'SOLDIER_ANT' 
  | 'MOSQUITO' 
  | 'LADYBUG' 
  | 'PILLBUG';

export interface BugInfo {
  type: BugType;
  name: string;
  emoji: string;
  description: string;
  count: number; // default count per player
  isExpansion?: boolean;
}

export const BUG_DEFINITIONS: Record<BugType, BugInfo> = {
  QUEEN: {
    type: 'QUEEN',
    name: 'Queen Bee',
    emoji: '🐝',
    description: 'Moves 1 space per turn. Must be placed by turn 4. Game ends when a Queen is surrounded.',
    count: 1,
  },
  SPIDER: {
    type: 'SPIDER',
    name: 'Spider',
    emoji: '🕷️',
    description: 'Moves exactly 3 spaces around the swarm perimeter without backtracking.',
    count: 2,
  },
  BEETLE: {
    type: 'BEETLE',
    name: 'Beetle',
    emoji: '🪲',
    description: 'Moves 1 space on ground or climbs on top of adjacent pieces to pin them.',
    count: 2,
  },
  GRASSHOPPER: {
    type: 'GRASSHOPPER',
    name: 'Grasshopper',
    emoji: '🦗',
    description: 'Jumps in a straight line over connected pieces to the first empty space.',
    count: 3,
  },
  SOLDIER_ANT: {
    type: 'SOLDIER_ANT',
    name: 'Soldier Ant',
    emoji: '🐜',
    description: 'Moves any distance around the perimeter of the swarm.',
    count: 3,
  },
  MOSQUITO: {
    type: 'MOSQUITO',
    name: 'Mosquito',
    emoji: '🦟',
    description: 'Copies movement ability of any adjacent piece touching it (acts like Beetle on top of swarm).',
    count: 1,
    isExpansion: true,
  },
  LADYBUG: {
    type: 'LADYBUG',
    name: 'Ladybug',
    emoji: '🐞',
    description: 'Moves exactly 3 spaces: 2 spaces on top of the swarm and 1 space down.',
    count: 1,
    isExpansion: true,
  },
  PILLBUG: {
    type: 'PILLBUG',
    name: 'Pillbug',
    emoji: '🪳',
    description: 'Moves 1 space OR picks up an adjacent unstacked piece and moves it to another adjacent empty space.',
    count: 1,
    isExpansion: true,
  },
};

export interface Piece {
  id: string; // Unique ID (e.g., 'p1_QUEEN_0')
  type: BugType;
  player: Player;
}

export interface AxialHex {
  q: number;
  r: number;
}

export function hexKey(q: number, r: number): string {
  return `${q},${r}`;
}

export function parseHexKey(key: string): AxialHex {
  const [q, r] = key.split(',').map(Number);
  return { q, r };
}

// Board representation: map from "q,r" to array of pieces (bottom to top)
export type BoardState = Map<string, Piece[]>;

export type GameMode = 'PASS_AND_PLAY' | 'AI';
export type AIDifficulty = 'EASY' | 'MEDIUM' | 'HARD';

export interface ExpansionsConfig {
  mosquito: boolean;
  ladybug: boolean;
  pillbug: boolean;
}

export interface GameSettings {
  mode: GameMode;
  aiDifficulty: AIDifficulty;
  expansions: ExpansionsConfig;
}

export interface MoveLogEntry {
  turnNumber: number;
  player: Player;
  actionType: 'PLACE' | 'MOVE' | 'PILLBUG_SPECIAL' | 'PASS';
  bugType: BugType;
  from?: AxialHex;
  to?: AxialHex;
  pillbugTarget?: AxialHex;
  description: string;
}

export interface MoveAction {
  type: 'PLACE' | 'MOVE' | 'PILLBUG_SPECIAL';
  pieceId: string;
  bugType: BugType;
  player: Player;
  fromHex?: AxialHex;
  toHex: AxialHex;
  pillbugTargetHex?: AxialHex; // For Pillbug special action: hex of piece picked up
}

export interface GameSnapshot {
  board: [string, Piece[]][]; // serialized Map
  p1Reserve: Piece[];
  p2Reserve: Piece[];
  currentPlayer: Player;
  turnCountP1: number;
  turnCountP2: number;
  lastMovedPieceId: string | null;
  moveHistory: MoveLogEntry[];
}
