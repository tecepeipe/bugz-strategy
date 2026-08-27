# Bugz Strategy — Rules Audit

## Overview

- **Game type**: original two-player hex strategy game (loosely inspired by *Hive* — one-swarm, freedom-to-move, surround-the-queen win — but with original insect set, names, and expansions; **not** a licensed adaptation of a commercial board game).
- **Player count**: 2.
- **Scope (modes)**:
  - **Pass & Play** (local hotseat) — both players human on one device.
  - **VS AI** — human vs engine on **Easy** (random), **Medium** (greedy evaluation), **Hard** (minimax + alpha-beta, depth 2). The human may play as White (P1) or Black (P2) — **Kotlin only**.
- **Rule sources**:
  - `readme.md` (documented rules) — the primary spec.
  - **Kotlin engine (authoritative)** — `android/app/src/main/java/com/tecepeipe/bugzstrategy/BugzApp.kt` (ships in the APK). Its in-app i18n rule text (`BugzApp.kt:132-156`) is also a rules source.
  - **Web preview** — `src/logic/bugzRules.ts`, `src/logic/bugzAI.ts`, `src/types/bugz.ts`, `src/App.tsx`. Treated as the secondary/parallel implementation.

### Bug set (per player)
| Bug | Count | Expansion | Kotlin enum |
|-----|-------|-----------|-------------|
| Queen Bee | 1 | no | `BugzApp.kt:659` |
| Spider | 2 | no | `BugzApp.kt:660` |
| Beetle | 2 | no | `BugzApp.kt:661` |
| Grasshopper | 3 | no | `BugzApp.kt:662` |
| Soldier Ant | 3 | no | `BugzApp.kt:663` |
| Mosquito | 1 | yes | `BugzApp.kt:664` |
| Ladybug | 1 | yes | `BugzApp.kt:665` |
| Pillbug | 1 | yes | `BugzApp.kt:666` |

Reserve creation: `BugzApp.kt:1353-1382`; web `src/App.tsx:101-121`. Expansions default **on** (`ExpansionsConfig()` = all true, `BugzApp.kt:686-690`), toggled in setup (`BugzApp.kt:2992-3012`).

---

## Rules checklist

### Setup

| Rule | Verdict | Evidence | Notes |
|------|---------|----------|-------|
| Hex board, axial coordinates, 6 neighbors | implemented | `BugzApp.kt:671-681`; `src/logic/hexMath.ts:17-19` | Both engines identical. |
| Reserve composition (counts above) | implemented | `BugzApp.kt:1364-1378`; `src/App.tsx:101-121` | Total 13/person with all expansions (test `BugzEngineTest.kt:155-170`). |
| Expansion gating (mosquito/ladybug/pillbug) | implemented | `BugzApp.kt:1367-1371`; `src/App.tsx:105-110` | Off = not in reserve at all. |
| First piece placed anywhere (origin) | implemented | `BugzApp.kt:857-859`; `bugzRules.ts:200-202`; test `:127-130` | First piece forced to `(0,0)`; "anywhere" = the empty board. |
| Second piece must touch first / may touch opponent | implemented | `BugzApp.kt:861-863`; `bugzRules.ts:205-207`; test `:132-139` | When board has 1 piece, placement = all 6 neighbors (the "second placement" exemption). |
| Later placements: adjacent to own piece, NOT touching opponent | implemented | `BugzApp.kt:865-897`; `bugzRules.ts:209-247`; test `:141-150` | `touchesFriendly && !touchesEnemy`. **Minor caveat**: friendly/enemy check uses the **top** piece of a neighbor stack only (`BugzApp.kt:884`; `bugzRules.ts:231`), so a placement adjacent to a stack whose top is friendly but base is enemy is allowed (see gaps P3). |
| Queen Bee must be introduced by 4th turn | implemented (Kotlin); partial (web UI edge) | `BugzApp.kt:1177-1193`, `2246-2248`, `2254-2257`; `src/App.tsx` rely on `ReservePanel.tsx:34,78-81` | See gaps P2 for the web `===4` vs Kotlin `>=4` divergence. |
| Swarm always connected (One-Swarm) | implemented | `BugzApp.kt:772-800`, `1094`; `bugzRules.ts:96-135,278`; tests `:78-111` | Removal-connectivity checked before every move. |

### Turn & phase structure

| Rule | Verdict | Evidence | Notes |
|------|---------|----------|-------|
| 2 players alternate turns | implemented | `BugzApp.kt:1502-1508`; `src/App.tsx:440-446` | |
| One action per turn: place one bug OR move one bug | implemented | `getPlayerAllLegalActions` `BugzApp.kt:1164-1272`; `bugzRules.ts:616-723` | One PLACE/MOVE/PILLBUG_SPECIAL per turn; no multi-action turns. |
| Cannot move any piece until own queen placed | implemented | `BugzApp.kt:1081-1083`; `bugzRules.ts:263-265` | |
| Forced pass when no legal actions | implemented | `BugzApp.kt:2076-2091` (loop, max 100); `src/App.tsx:228-265` | See gaps P3 (theoretical non-termination). |
| "Stun": piece just moved/placed can't be moved on opponent's next turn | implemented (effectively only for pillbug special) | `BugzApp.kt:1092`, `1492`; `bugzRules.ts:275`; `src/App.tsx:410-417` | `lastMovedPieceId` is set on *every* move but only ever matches the *current* player's piece when a Pillbug special relocated it, so in practice it implements only the documented pillbug stun. Both engines identical. |
| Turn counter increments per player (queen-due timing) | implemented | `BugzApp.kt:1502-1507` | turnCountP starts 1, incremented after each own move → turn 4 forces queen. |

### Actions (movement / abilities)

| Rule | Verdict | Evidence | Notes |
|------|---------|----------|-------|
| Queen Bee: exactly 1 hex, ground slide | implemented | `BugzApp.kt:927-929`; `bugzRules.ts:368-371` | |
| Spider: exactly 3 hexes along perimeter, no backtracking | implemented | `BugzApp.kt:931-962`; `bugzRules.ts:374-412` | DFS length-3, no revisits. |
| Beetle: 1 hex; can climb on top (incl. queen); moves over stack | implemented | `BugzApp.kt:964-983`; `bugzRules.ts:415-440` | |
| Grasshopper: straight line over ≥1 piece to first empty | implemented | `BugzApp.kt:985-1002`; `bugzRules.ts:443-462` | Requires `countOver > 0`. |
| Soldier Ant: slide any distance along swarm perimeter | implemented | `BugzApp.kt:1004-1024`; `bugzRules.ts:465-491` | BFS via `isValidGroundSlide`. |
| Mosquito: copies adjacent piece movement (or pillbug ability); as Beetle when on top | implemented | `BugzApp.kt:902-925`, `1056-1070`, `1248-1266`; `bugzRules.ts:300-336,700-717` | Ground mosquito with no non-mosquito neighbor → no moves (both engines). Mosquito-on-mosquito gives no ability. |
| Ladybug: 2 on top, 1 down (may land on empty board hex) | implemented | `BugzApp.kt:1026-1050`; `bugzRules.ts:494-530` | |
| Pillbug: (a) moves 1 like queen AND (b) special: move an adjacent unstacked piece to an empty hex adjacent to the pillbug; moved piece stunned | **implemented (code/EN)** — **contradicted by readme + non-EN translations** | (a) `BugzApp.kt:1052-1054`; (b) `BugzApp.kt:1109-1162`; EN i18n `BugzApp.kt:154-156`; readme `readme.md:34`; ES `:232-234`, PT `:310-312`, FR `:389-392`, DE `:469-471`, JA `:542`, ZH `:611` | **See gap P1.** Code = Hive-official behavior; readme + ES/PT/FR/DE/JA/ZH describe "cannot move itself". |
| Pillbug special preconditions: pillbug not just moved; target unstacked, not just moved, removal doesn't break swarm; "beetle gate" (no common gate hex of height ≥2) | implemented | `BugzApp.kt:1109-1162`; `bugzRules.ts:549-612` | Both engines identical. |
| Freedom-to-move (no squeeze between stacked pieces) | implemented | `canSlide` `BugzApp.kt:808-826`; `bugzRules.ts:141-161` | |
| Queen must be placed before pillbug special / moves | implemented | `BugzApp.kt:1115`, `1081`; `bugzRules.ts:556,263` | |

### Win condition

| Rule | Verdict | Evidence | Notes |
|------|---------|----------|-------|
| Surround opponent queen on all 6 sides → win | implemented | `BugzApp.kt:1274-1297`; `bugzRules.ts:734-783`; test `:226-258` | Counts occupied neighbor hexes (any stack height). |
| Both queens surrounded simultaneously → draw | implemented | `BugzApp.kt:1291-1292`; `bugzRules.ts:754-760` | |
| P1 surrounded → P2 wins; P2 surrounded → P1 wins | implemented | `BugzApp.kt:1293-1294`; `bugzRules.ts:761-774` | |

### Endgame

| Rule | Verdict | Evidence | Notes |
|------|---------|----------|-------|
| Game-over dialog (win/draw), rematch, new setup | implemented | `BugzApp.kt:2554-2565`, `3101-3133`; web `src/components/GameOverModal.tsx` | Kotlin dialog win/draw body text has a P1/P2 label quirk (`BugzApp.kt:3122` always says "Player {n}" with n swapped to 2/1) — cosmetic only. |
| Save / resume | implemented (Kotlin) | `BugzApp.kt:1520-1640`, `2237-2244`, `2186-2201` | Web preview has no persistence (no `persistence.ts`); resume is Android-only. |
| Unlimited undo | implemented | Kotlin `BugzApp.kt:2203-2225`; web `src/App.tsx:181-216` | Web undoes 2 steps in AI mode; Kotlin pops until human turn. Both reasonable, differ. |

---

## Discrepancies & gaps

### P1 — Pillbug rule text contradicts the implemented behavior (readme + 6 translations)
- **Implemented behavior** (identical in both engines): the Pillbug can move **1 hex like the Queen Bee** (`BugzApp.kt:1052-1054`, `getPillbugMoves → getQueenMoves`; web `bugzRules.ts:533-535`) **and** perform the special move (`BugzApp.kt:1109-1162`). This matches the official Hive Pillbug.
- **Documented rule** (readme + 6 non-English translations) says the opposite — "cannot move itself; moves an adjacent piece 2 hexes":
  - `readme.md:34` — "Cannot move itself; moves an adjacent piece 2 hexes and stuns it…"
  - Kotlin i18n ES `BugzApp.kt:232-234`, PT `:310-312`, FR `:389-392`, DE `:469-471`, JA `:542`, ZH `:611` — all say "no puede moverse / não pode se mover / ne peut pas se déplacer / kann sich selbst nicht bewegen / 自分は動けません / 自身不能移动".
  - The **English** i18n string (`BugzApp.kt:154-156`) correctly says "moves 1 space like the Queen Bee, or may pick up…".
- **Impact**: In-game rules modal and localized readmes tell players the Pillbug cannot move itself, but the engine lets it move like a queen. The rules documentation is wrong in 6 of 7 languages and in the readme; only EN i18n + the engines agree.
- **Fix**: align `readme.md:34` and the ES/PT/FR/DE/JA/ZH `insectPillbug` strings to the implemented (and EN) wording. (Note: the web `BUG_DEFINITIONS.PILLBUG.description`, `src/types/bugz.ts:78`, is correct.)

### P2 — Web vs Kotlin divergences
1. **Queen-due enforcement threshold**: Kotlin uses `>= 4` (`BugzApp.kt:2247`) and also guards inside `handleReserveSelect`/`handleHexClick` (`BugzApp.kt:2254-2257`, `2291-2294`). The web **does not** guard in `handleSelectReserveBug`/`handleSelectDestination` (`src/App.tsx:452-468, 533-580`); it relies solely on the ReservePanel disabling non-queen buttons, which uses `turnCount === 4` (**exactly** 4, `ReservePanel.tsx:34,78-81`). In practice the queen is always placed at turn 4 (it's forced), so the gap is only reachable via an edited save/state, but the web code path would then allow a non-queen placement at turn ≥5 while Kotlin would not.
2. **"Play as Black (P2)" feature**: Kotlin exposes `humanColor` (`BugzApp.kt:696`, setup chips `:2977-2988`) so the human can play as P2 vs AI. The web preview has no such option (`src/App.tsx:64-68` settings have no humanColor; AI is hardcoded to player 2, `src/App.tsx:275`). Feature gap, not a rules gap — worth noting because it changes who the AI is.
3. **Undo semantics** differ (Kotlin pops to human turn `:2207-2214`; web undoes a fixed 2 steps `src/App.tsx:186-188`). Behaviorally similar, not identical.
4. **Resume/persistence**: Android-only (Kotlin save/resume `BugzApp.kt:2186-2244`); the web preview has no save/resume. `readme.md:48` advertises resume as an Android feature — consistent, but web can't resume.

### P3 — Minor / robustness
1. **Enemy-touch placement uses top piece only**: `getValidPlacements` checks `getTopPiece` for the friendly/enemy test (`BugzApp.kt:884`; `bugzRules.ts:231`). A placement adjacent to a stack whose *top* is friendly but whose *base* is the opponent's piece is treated as "not touching enemy". Both engines share this. Arguably matches the simplified readme ("may not touch an opponent's piece"); strictly, it ignores an opponent piece buried under a friendly beetle.
2. **Theoretical soft-lock in forced-pass**: Kotlin `applyForcedPasses` (`BugzApp.kt:2076-2091`) guards against an *empty board + empty reserves* only. A state with a **non-empty board, empty reserves, no queen surrounded, and zero legal moves for both players** would bounce passes until the `guard=100` cap and then leave the turn stuck with no legal action (no win). Extremely unlikely, but nothing proves the game always terminates. **No smoke/simulation test exists** (`scripts/` absent) to assert a full game reaches `GAME_OVER`.
3. **Queen covered by a beetle still counted as "surrounded"**: `checkGameStatus` counts the queen's 6 neighbors regardless of whether the queen hex itself is stacked (`BugzApp.kt:1282-1286`). Both engines identical; a deliberate simplification of the original game (no test covers it).
4. **Dead parameters / compiler warnings** (not bugs): `turnCountP` unused in `getValidPlacements` (`BugzApp.kt:853`) and `getValidMovesForPiece` (`:1077`), `expansions` unused in `getValidMovesForPiece` (`:1079`) and `evaluateBoard` (`:1909`), `lastMovedPieceId` unused in `computeMediumMove`/`computeHardMinimaxMove` signatures (`:1706`, `:1750`). Web `getMovesForBugType` also takes an unused `player` (`bugzRules.ts:341,346`).

**Confirmed non-issues** (checked against recurring bug patterns):
- No state mutation on a pre-clone input: `simulateAction` clones first (`BugzApp.kt:1990`; web `bugzAI.ts:417`) and `executeMove` mutates only the engine's live state.
- No "AI can't act" freeze: `getPlayerAllLegalActions` has no AI-only guard; the AI uses the same legal-action generator as the human (`BugzApp.kt:1657-1664`). AI forced-pass handled (`BugzApp.kt:2130-2138`).
- No illegal non-queen placement on turn 4 in the authoritative Kotlin engine.
- Win/draw precedence correct (simultaneous surround → draw).
- Queen-must-be-placed rule is enforced in the engine's legal-action generator, not just the UI (`BugzApp.kt:1177-1193`).

---

## Verification

### Gradle unit tests
Command (from `/home/fabricio/bugz-strategy/android`):
```
JAVA_HOME=/home/fabricio/android-tools/linux-jdk17 ANDROID_HOME=/home/fabricio/android-tools/linux-sdk \
/home/fabricio/android-tools/linux-gradle/bin/gradle :app:testDebugUnitTest
```
**Result: BUILD SUCCESSFUL** (40s). All 16 `BugzEngineTest` tests pass, including: hex helpers, board/stack helpers, swarm connectivity, `canSlide` gating, first/second placement, placements-not-touching-enemy, reserve init (± expansions), state machine, snapshot/restore, and queen-surrounded win (`BugzEngineTest.kt:226-258`).

Coverage gaps in the existing tests (none test the following):
- Individual movement generators (Spider exact-3, Beetle climb, Grasshopper jump, Ant slide, Ladybug 2+1, Mosquito copying).
- Pillbug special move (target pick-up, stun, beetle-gate, cannot-act-after-being-moved).
- Queen-due forced-placement on turn 4.
- Forced-pass flow and termination (no soft-lock proof).
- Draw condition (both queens surrounded).

### `npm run lint`
Command: `npm run lint` (= `tsc --noEmit`) in `/home/fabricio/bugz-strategy`.
**Result: passes clean** (no type errors). Confirms the web preview typechecks.

### Recommended test cases to add
Engine (Kotlin `BugzEngineTest.kt`) — one per rule:
1. **Queen 4th-turn enforcement**: on turn 4 with queen unplaced, `getPlayerAllLegalActions` returns only QUEEN placements; executing a non-queen PLACE is rejected.
2. **Pillbug moves like queen**: `getPillbugMoves` equals `getQueenMoves` on a constructed board (locks the P1 discrepancy).
3. **Pillbug special**: pick up an adjacent unstacked piece → destination updates, `lastMovedPieceId` = moved target, and that target has no moves on the opponent's next turn.
4. **Pillbug stun / no-self-reuse**: pillbug that just moved cannot use its special (`getPillbugSpecialTargets` empty).
5. **Beetle gate**: pillbug special destination blocked when a common gate hex has height ≥2.
6. **Mosquito**: on ground copies a neighbor's type; on top of a stack acts as Beetle; touching only another mosquito → no moves.
7. **Ladybug**: requires 2 steps over the swarm then lands on an empty board hex.
8. **Draw**: both queens surrounded → `isDraw` true, winner null.
9. **Termination/smoke (soft-lock)**: scripted full games (all-AI and mixed) across pass-and-play and each AI difficulty assert the game reaches `isGameOver` within a step guard; route AI players through `computeAIMove`. Add as a `tsx` script under `scripts/` (none exists today).

Web (`src/logic/bugzRules.ts`): mirror cases 1–8 against the web engine and add an equality test asserting `getPillbugMoves` and the placement rules match the Kotlin engine, so the two implementations can't silently drift.

---

*Audit conducted on the authoritative Kotlin engine (`BugzApp.kt`, ships in the APK) and cross-checked against the web preview (`src/logic/bugzRules.ts`, `bugzAI.ts`, `src/App.tsx`). No game source files were modified; this document is the only deliverable.*
