import { test } from 'node:test';
import assert from 'node:assert/strict';

import { hexKey } from '../types/bugz';
import type { AxialHex, BoardState, BugType, ExpansionsConfig, Piece, Player } from '../types/bugz';
import * as bugzRules from './bugzRules';
import * as hiveRules from './hiveRules';

interface PillbugOption {
  targetHex: AxialHex;
  piece: Piece;
  destinationHexes: AxialHex[];
}

interface MovementSuite {
  getQueenMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getSpiderMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getBeetleMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getGrasshopperMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getSoldierAntMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getLadybugMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getPillbugMoves(board: BoardState, fromHex: AxialHex): AxialHex[];
  getMovesForBugType(board: BoardState, fromHex: AxialHex, bugType: BugType, player: Player): AxialHex[];
  getEffectiveBugTypes(board: BoardState, fromHex: AxialHex, piece: Piece, expansions: ExpansionsConfig): BugType[];
  getPillbugSpecialTargets(board: BoardState, fromHex: AxialHex, player: Player, lastMovedPieceId: string | null): PillbugOption[];
  getValidMovesForPiece(
    board: BoardState,
    fromHex: AxialHex,
    player: Player,
    turnCountP: number,
    lastMovedPieceId?: string | null,
    expansions?: ExpansionsConfig
  ): AxialHex[];
}

const suites: Array<[string, MovementSuite]> = [
  ['bugzRules', bugzRules as unknown as MovementSuite],
  ['hiveRules', hiveRules as unknown as MovementSuite],
];

const EXPANSIONS: ExpansionsConfig = { mosquito: true, ladybug: true, pillbug: true };

function hex(q: number, r: number): AxialHex {
  return { q, r };
}

function piece(id: string, type: BugType, player: Player): Piece {
  return { id, type, player };
}

function makeBoard(): BoardState {
  return new Map();
}

function setHex(board: BoardState, q: number, r: number, stack: Piece[]): void {
  board.set(hexKey(q, r), stack);
}

function has(moves: AxialHex[], q: number, r: number): boolean {
  return moves.some(m => m.q === q && m.r === r);
}

function keys(moves: AxialHex[]): string {
  return moves.map(m => `${m.q},${m.r}`).join(', ');
}

function neighborsOf(h: AxialHex): AxialHex[] {
  return [
    { q: h.q + 1, r: h.r }, { q: h.q + 1, r: h.r - 1 }, { q: h.q, r: h.r - 1 },
    { q: h.q - 1, r: h.r }, { q: h.q - 1, r: h.r + 1 }, { q: h.q, r: h.r + 1 },
  ];
}

function commonNeighbors(a: AxialHex, b: AxialHex): AxialHex[] {
  const aSet = new Set(neighborsOf(a).map(n => hexKey(n.q, n.r)));
  const bSet = new Set(neighborsOf(b).map(n => hexKey(n.q, n.r)));
  return Array.from(aSet)
    .filter(k => bSet.has(k))
    .map(k => {
      const [q, r] = k.split(',').map(Number);
      return { q, r };
    });
}

function isOcc(board: BoardState, h: AxialHex): boolean {
  return (board.get(hexKey(h.q, h.r))?.length ?? 0) > 0;
}

function hiveConnected(board: BoardState): boolean {
  const keys = Array.from(board.keys()).filter(k => (board.get(k)?.length ?? 0) > 0);
  if (keys.length <= 1) return true;
  const visited = new Set<string>([keys[0]]);
  const queue = [keys[0]];
  while (queue.length) {
    const cur = queue.shift()!;
    const [q, r] = cur.split(',').map(Number);
    for (const n of neighborsOf({ q, r })) {
      const k = hexKey(n.q, n.r);
      if ((board.get(k)?.length ?? 0) > 0 && !visited.has(k)) {
        visited.add(k);
        queue.push(k);
      }
    }
  }
  return visited.size === keys.length;
}

function runSuite(name: string, rules: MovementSuite): void {
  // --- queen movement (one-hex slide + gate rule) ---

  test(`${name}: queen can slide through an open gate`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1)]);
    setHex(b, 1, -1, [piece('p2_a', 'SOLDIER_ANT', 2)]);
    setHex(b, 0, -1, [piece('p2_b', 'SOLDIER_ANT', 2)]);
    setHex(b, -1, 0, [piece('p2_c', 'SPIDER', 2)]);
    setHex(b, -1, 1, [piece('p2_d', 'GRASSHOPPER', 2)]);
    // Gate for (0,0)->(0,1) is (-1,1) and (1,0); (1,0) is empty so the
    // gate is open and the queen CAN slide to (0,1).
    const moves = rules.getQueenMoves(b, hex(0, 0));

    assert.ok(has(moves, 0, 1), `queen should slide through open gate to (0,1), got [${keys(moves)}]`);
  });

  test(`${name}: queen cannot escape through a gate blocked on both sides`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SOLDIER_ANT', 2)]);
    setHex(b, 1, -1, [piece('p2_b', 'SOLDIER_ANT', 2)]);
    setHex(b, 0, -1, [piece('p2_c', 'SPIDER', 2)]);
    setHex(b, -1, 0, [piece('p2_d', 'SPIDER', 2)]);
    setHex(b, -1, 1, [piece('p2_e', 'GRASSHOPPER', 2)]);
    // Gate hexes (1,0) and (-1,1) are both occupied -> gate blocked ->
    // queen CANNOT slide to (0,1).
    const moves = rules.getQueenMoves(b, hex(0, 0));

    assert.ok(!has(moves, 0, 1), `queen must NOT escape through a blocked gate, got [${keys(moves)}]`);
  });

  test(`${name}: queen never slides through a closed gate in any occupancy pattern`, () => {
    const origin = hex(0, 0);
    const nbrs = neighborsOf(origin);
    for (let mask = 0; mask < 64; mask++) {
      const b = makeBoard();
      setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1)]);
      nbrs.forEach((n, i) => {
        if (mask & (1 << i)) setHex(b, n.q, n.r, [piece(`p2_${i}`, 'SPIDER', 2)]);
      });

      const moves = rules.getQueenMoves(b, origin);
      for (const d of moves) {
        const common = commonNeighbors(origin, d);
        const gateClosed = common.length === 2 && isOcc(b, common[0]) && isOcc(b, common[1]);
        assert.ok(!gateClosed, `${name}: queen slid through a closed gate to ${d.q},${d.r} in pattern ${mask}`);
      }
    }
  });

  // --- ant movement (freedom to move / gate rule) ---

  test(`${name}: ant can slide through an open gate to an empty hex`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_ant', 'SOLDIER_ANT', 1)]);
    setHex(b, 1, -1, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 0, -1, [piece('p2_b', 'SPIDER', 2)]);
    setHex(b, -1, 0, [piece('p2_c', 'SPIDER', 2)]);
    setHex(b, -1, 1, [piece('p2_d', 'SPIDER', 2)]);

    const moves = rules.getSoldierAntMoves(b, hex(0, 0));

    assert.ok(has(moves, 0, 1), `ant should slide through open gate to (0,1), got [${keys(moves)}]`);
  });

  test(`${name}: ant trapped inside a ring of pieces has no moves`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_ant', 'SOLDIER_ANT', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 0, 1, [piece('p2_b', 'SPIDER', 2)]);
    setHex(b, -1, 1, [piece('p2_c', 'SPIDER', 2)]);
    setHex(b, -1, 0, [piece('p2_d', 'SPIDER', 2)]);
    setHex(b, 0, -1, [piece('p2_e', 'SPIDER', 2)]);

    const moves = rules.getSoldierAntMoves(b, hex(0, 0));

    assert.deepEqual(moves, [], `ant surrounded by a closed ring must have no moves, got [${keys(moves)}]`);
  });

  test(`${name}: ant can travel around the outside of the hive`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_ant', 'SOLDIER_ANT', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);

    const moves = rules.getSoldierAntMoves(b, hex(0, 0));

    assert.ok(has(moves, 0, 1), `ant should reach (0,1), got [${keys(moves)}]`);
    assert.ok(has(moves, 1, 1), `ant should reach (1,1) via the gate left behind, got [${keys(moves)}]`);
    assert.ok(has(moves, 2, 0), `ant should reach (2,0) around the piece, got [${keys(moves)}]`);
    assert.ok(!has(moves, -1, 0), `ant must not leave the hive to (-1,0), got [${keys(moves)}]`);
  });

  // --- spider movement (exactly 3 steps, freedom to move) ---

  test(`${name}: spider moves exactly three hexes`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_spider', 'SPIDER', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);

    const moves = rules.getSpiderMoves(b, hex(0, 0));

    assert.ok(has(moves, 2, 0), `spider should land on (2,0) after exactly three steps, got [${keys(moves)}]`);
    assert.ok(!has(moves, 0, 1), `spider must not land a single step away at (0,1), got [${keys(moves)}]`);
    assert.ok(!has(moves, 1, 1), `spider must not land two steps away at (1,1), got [${keys(moves)}]`);
  });

  test(`${name}: spider cannot walk through an occupied hex`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_spider', 'SPIDER', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 0, -1, [piece('p2_b', 'SPIDER', 2)]);

    const moves = rules.getSpiderMoves(b, hex(0, 0));

    assert.ok(!has(moves, 2, -1), `spider must NOT walk through (1,0) to reach (2,-1), got [${keys(moves)}]`);
    assert.ok(!has(moves, 1, -2), `spider must NOT walk through (0,-1) to reach (1,-2), got [${keys(moves)}]`);
  });

  // --- beetle movement (climbing + gate rule) ---

  test(`${name}: beetle climbs onto an adjacent piece`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1)]);
    setHex(b, 1, 0, [piece('p1_beetle', 'BEETLE', 1)]);

    const moves = rules.getBeetleMoves(b, hex(1, 0));

    assert.ok(has(moves, 0, 0), `beetle should climb onto the queen at (0,0), got [${keys(moves)}]`);
  });

  test(`${name}: beetle on top can step down onto an empty ground hex`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1), piece('p2_beetle', 'BEETLE', 2)]);

    const moves = rules.getBeetleMoves(b, hex(0, 0));

    assert.ok(has(moves, 1, 0), `beetle on top should step down to (1,0), got [${keys(moves)}]`);
  });

  test(`${name}: beetle cannot climb through a closed gate`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1)]);
    setHex(b, 1, 0, [piece('p1_beetle', 'BEETLE', 1)]);
    setHex(b, 0, 1, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 1, -1, [piece('p2_b', 'SPIDER', 2)]);

    const moves = rules.getBeetleMoves(b, hex(1, 0));

    assert.ok(!has(moves, 0, 0), `beetle must NOT climb onto (0,0) through a closed gate, got [${keys(moves)}]`);
  });

  // --- grasshopper movement ---

  test(`${name}: grasshopper jumps over a line of pieces to the first empty hex`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_gh', 'GRASSHOPPER', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 2, 0, [piece('p2_b', 'SPIDER', 2)]);

    const moves = rules.getGrasshopperMoves(b, hex(0, 0));

    assert.ok(has(moves, 3, 0), `grasshopper should jump to (3,0), got [${keys(moves)}]`);
    assert.ok(!has(moves, 1, 0), `grasshopper must not land on occupied (1,0)`);
    assert.ok(!has(moves, 2, 0), `grasshopper must not land on occupied (2,0)`);
  });

  test(`${name}: grasshopper cannot jump with no pieces in a row`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_gh', 'GRASSHOPPER', 1)]);

    const moves = rules.getGrasshopperMoves(b, hex(0, 0));

    assert.deepEqual(moves, []);
  });

  // --- mosquito movement (copies adjacent pieces) ---

  test(`${name}: mosquito copies an adjacent grasshopper and jumps`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_m', 'MOSQUITO', 1)]);
    setHex(b, 1, 0, [piece('p1_gh', 'GRASSHOPPER', 1)]);
    setHex(b, 2, 0, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 3, 0, [piece('p2_b', 'SPIDER', 2)]);
    const mosquito = piece('p1_m', 'MOSQUITO', 1);

    const effective = rules.getEffectiveBugTypes(b, hex(0, 0), mosquito, EXPANSIONS);
    assert.ok(effective.includes('GRASSHOPPER'), `mosquito should copy grasshopper, got [${effective}]`);

    const moves = effective.flatMap(t => rules.getMovesForBugType(b, hex(0, 0), t, 1));
    assert.ok(has(moves, 4, 0), `mosquito copying grasshopper should jump to (4,0), got [${keys(moves)}]`);
  });

  test(`${name}: mosquito with no adjacent pieces has no movement`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_m', 'MOSQUITO', 1)]);
    const mosquito = piece('p1_m', 'MOSQUITO', 1);

    assert.deepEqual(rules.getEffectiveBugTypes(b, hex(0, 0), mosquito, EXPANSIONS), []);
  });

  test(`${name}: mosquito adjacent only to another mosquito has no movement`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_m', 'MOSQUITO', 1)]);
    setHex(b, 1, 0, [piece('p2_m', 'MOSQUITO', 2)]);
    const mosquito = piece('p1_m', 'MOSQUITO', 1);

    assert.deepEqual(rules.getEffectiveBugTypes(b, hex(0, 0), mosquito, EXPANSIONS), []);
  });

  // --- ladybug movement (two steps on top, one step down) ---

  test(`${name}: ladybug moves two steps on top then one step down`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_ladybug', 'LADYBUG', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);
    setHex(b, 2, 0, [piece('p2_b', 'SPIDER', 2)]);

    const moves = rules.getLadybugMoves(b, hex(0, 0));

    assert.ok(has(moves, 3, 0), `ladybug should land at (3,0), got [${keys(moves)}]`);
    assert.ok(!has(moves, 1, 0), `ladybug must not land on occupied (1,0)`);
    assert.ok(!has(moves, 2, 0), `ladybug must not land on occupied (2,0)`);
  });

  // --- pillbug movement (queen-like move + special ability) ---

  test(`${name}: pillbug moves one hex like the queen`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_pillbug', 'PILLBUG', 1)]);
    setHex(b, 1, 0, [piece('p2_a', 'SPIDER', 2)]);

    const moves = rules.getPillbugMoves(b, hex(0, 0));

    assert.ok(has(moves, 0, 1), `pillbug should slide to (0,1), got [${keys(moves)}]`);
  });

  test(`${name}: pillbug special moves an adjacent friendly piece to an empty hex`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_pillbug', 'PILLBUG', 1)]);
    setHex(b, 1, 0, [piece('p1_friend', 'SPIDER', 1)]);
    setHex(b, -1, 1, [piece('p1_queen', 'QUEEN', 1)]);

    const options = rules.getPillbugSpecialTargets(b, hex(0, 0), 1, null);
    const friendOption = options.find(o => o.targetHex.q === 1 && o.targetHex.r === 0);

    assert.ok(friendOption, `pillbug should be able to target the friend at (1,0), got ${options.map(o => `${o.targetHex.q},${o.targetHex.r}`).join(', ')}`);
    assert.ok(
      friendOption!.destinationHexes.some(d => d.q === 0 && d.r === 1),
      `pillbug should be able to move the friend to (0,1), got [${keys(friendOption!.destinationHexes)}]`
    );
  });

  // --- One Hive / freedom-to-move validation ---

  test(`${name}: sliding piece bridging two branches cannot move`, () => {
    const b = makeBoard();
    setHex(b, 0, 0, [piece('p1_q', 'QUEEN', 1)]);
    setHex(b, 0, -1, [piece('p1_a', 'SPIDER', 1)]);
    setHex(b, 1, 0, [piece('p1_beetle', 'BEETLE', 1)]);
    setHex(b, 2, 0, [piece('p1_b', 'SPIDER', 1)]);
    setHex(b, 3, 0, [piece('p1_c', 'SPIDER', 1)]);

    const moves = rules.getValidMovesForPiece(b, hex(1, 0), 1, 99, null, { mosquito: false, ladybug: false, pillbug: false });

    assert.deepEqual(moves, [], `${name}: a piece bridging two branches must not move (One Hive Rule)`);
  });

  test(`${name}: no sliding piece ever moves illegally on random boards`, () => {
    let seed = 42;
    const rnd = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };
    const TYPES: BugType[] = ['QUEEN', 'SPIDER', 'BEETLE', 'SOLDIER_ANT', 'GRASSHOPPER'];
    const SLIDERS = new Set(['QUEEN', 'SPIDER', 'BEETLE', 'SOLDIER_ANT', 'PILLBUG']);
    let checked = 0;

    for (let it = 0; it < 3000; it++) {
      const board: BoardState = new Map();
      const occupied = [hex(0, 0)];
      setHex(board, 0, 0, [piece('p1_0', 'QUEEN', 1)]);
      let idx = 1;
      const grow = Math.floor(rnd() * 8) + 3;
      for (let i = 0; i < grow; i++) {
        const frontier = [...new Set(occupied.flatMap(o => neighborsOf(o)).map(n => hexKey(n.q, n.r)))]
          .filter(k => !board.has(k))
          .map(k => {
            const [q, r] = k.split(',').map(Number);
            return { q, r };
          });
        if (frontier.length === 0) break;
        const n = frontier[Math.floor(rnd() * frontier.length)];
        const owner: Player = rnd() < 0.5 ? 1 : 2;
        const stack = [{ id: `p${owner}_${idx}`, type: TYPES[idx % TYPES.length], player: owner }];
        if (rnd() < 0.3) stack.push({ id: `p2_x_${idx}`, type: 'BEETLE', player: 2 });
        setHex(board, n.q, n.r, stack);
        occupied.push(n);
        idx++;
      }

      for (const bh of occupied.slice(0, 3)) {
        const stack = board.get(hexKey(bh.q, bh.r)) || [];
        const top = stack[stack.length - 1];
        if (!top || !SLIDERS.has(top.type)) continue;
        const moves = rules.getValidMovesForPiece(board, bh, top.player, 99, null, { mosquito: false, ladybug: false, pillbug: false });
        for (const m of moves) {
          checked++;
          // Gate (freedom to move) must be open.
          const common = commonNeighbors(bh, m);
          const clearance = Math.max(
            (board.get(hexKey(bh.q, bh.r))?.length ?? 0) - 1,
            board.get(hexKey(m.q, m.r))?.length ?? 0
          );
          const gateClosed =
            common.length === 2 &&
            common.every(g => {
              const h = board.get(hexKey(g.q, g.r))?.length ?? 0;
              return h > 0 && h >= clearance;
            });
          assert.ok(!gateClosed, `${name}: ${top.type} slid through a closed gate ${bh.q},${bh.r}->${m.q},${m.r}`);

          // One Hive Rule: the hive must stay connected after the move.
          const moved: BoardState = new Map([...board.entries()].map(([k, v]) => [k, [...v]]));
          const fs = moved.get(hexKey(bh.q, bh.r)) || [];
          const movedPiece = fs.pop();
          if (fs.length === 0) moved.delete(hexKey(bh.q, bh.r));
          if (movedPiece) {
            const ts = moved.get(hexKey(m.q, m.r)) || [];
            ts.push(movedPiece);
            moved.set(hexKey(m.q, m.r), ts);
          }
          assert.ok(hiveConnected(moved), `${name}: ${top.type} broke the hive moving ${bh.q},${bh.r}->${m.q},${m.r}`);
        }
      }
    }

    assert.ok(checked > 500, `${name}: the random-board check should have validated many moves`);
  });
}

for (const [name, rules] of suites) {
  runSuite(name, rules);
}