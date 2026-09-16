import { test } from 'node:test';
import assert from 'node:assert/strict';

import type { AxialHex, BoardState, ExpansionsConfig, MoveAction, Piece, Player } from '../types/bugz';
import { hexKey } from '../types/bugz';
import * as bugzAI from './bugzAI';
import * as hiveAI from './hiveAI';

function setHex(board: BoardState, q: number, r: number, stack: Piece[]): void {
  board.set(hexKey(q, r), stack);
}

const EXPANSIONS: ExpansionsConfig = { mosquito: true, ladybug: true, pillbug: true };

interface AISuite {
  computeAIMove(
    board: BoardState,
    aiPlayer: Player,
    aiReserve: Piece[],
    humanReserve: Piece[],
    turnCountAI: number,
    turnCountHuman: number,
    difficulty: 'EASY' | 'MEDIUM' | 'HARD',
    lastMovedPieceId?: string | null,
    expansions?: ExpansionsConfig
  ): MoveAction | null;
}

const suites: Array<[string, AISuite]> = [
  ['bugzAI', bugzAI as unknown as AISuite],
  ['hiveAI', hiveAI as unknown as AISuite],
];

const DIFFICULTIES: Array<'EASY' | 'MEDIUM' | 'HARD'> = ['EASY', 'MEDIUM', 'HARD'];

for (const [name, ai] of suites) {
  test(`${name}: AI is forced to place its queen on its 3rd turn for all difficulties`, () => {
    const board: BoardState = new Map();
    setHex(board, 0, 0, [{ id: 'p1_QUEEN_0', type: 'QUEEN', player: 1 }]);
    setHex(board, 1, 0, [{ id: 'p2_SPIDER_0', type: 'SPIDER', player: 2 }]);
    setHex(board, 0, -1, [{ id: 'p1_SPIDER_0', type: 'SPIDER', player: 1 }]);
    setHex(board, 2, -1, [{ id: 'p2_BEETLE_0', type: 'BEETLE', player: 2 }]);
    setHex(board, -1, 0, [{ id: 'p1_GRASSHOPPER_0', type: 'GRASSHOPPER', player: 1 }]);

    const aiReserve: Piece[] = [
      { id: 'p2_QUEEN_0', type: 'QUEEN', player: 2 },
      { id: 'p2_GRASSHOPPER_0', type: 'GRASSHOPPER', player: 2 },
    ];
    const humanReserve: Piece[] = [
      { id: 'p1_BEETLE_0', type: 'BEETLE', player: 1 },
      { id: 'p1_GRASSHOPPER_0', type: 'GRASSHOPPER', player: 1 },
    ];

    for (const diff of DIFFICULTIES) {
      const action = ai.computeAIMove(board, 2 as Player, aiReserve, humanReserve, 3, 3, diff, null, EXPANSIONS);
      assert.ok(action, `difficulty ${diff} should have a legal move`);
      assert.equal(action!.type, 'PLACE', `difficulty ${diff} should place the queen on turn 3`);
      assert.equal(action!.bugType, 'QUEEN', `difficulty ${diff} should place the queen on turn 3`);
    }
  });
}