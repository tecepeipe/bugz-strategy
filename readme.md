# 🐝 Bugz Strategy

**Bugz Strategy** is a two-player turn-based hex strategy game. Lead your insect swarm into battle: place and move your bugs around the Queen Bee and try to surround the opponent's queen before they surround yours.

## Features

- Hex-based two-player strategy with AI opponents and full rule enforcement.
- **Pass & Play** (local hotseat) and **VS AI** modes with three difficulties (Easy / Medium / Hard).
- Full rule enforcement with legal-move highlighting, queen-bee deadline warning, and automatic forced passes.
- Rule expansions: **Mosquito** 🦟, **Ladybug** 🐞, **Pillbug** 💊.
- Unlimited undo, a move log, and a zoomable/pannable hex board.
- In-app **Kotlin source viewer & exporter** (the game also ships as a native Jetpack Compose app).
- Available in **7 languages** with a dark/light theme.

## How to Play

**Goal:** surround the opponent's Queen Bee with your pieces on all six sides. First to do so wins; if both queens are surrounded at the same time, it is a draw.

On your turn you either **place one bug** from your reserve or **move one of your bugs**:

- Your Queen Bee must be introduced by your **4th turn**.
- Your first piece goes anywhere; later pieces must touch one of your own pieces (and, except for the second placement, may not touch an opponent's piece).
- The swarm must always stay connected — you may never split it or squeeze a piece into a gap between stacked pieces.

| Insect | Movement |
|--------|----------|
| 🐝 Queen Bee | Exactly 1 hex per turn |
| 🕷️ Spider | Exactly 3 hexes along the outside edge, never retracing |
| 🪲 Beetle | 1 hex; can climb on top of other pieces (even the Queen) to block them |
| 🦗 Grasshopper | Jumps in a straight line over at least one piece, landing on the first empty hex |
| 🐜 Soldier Ant | Slides any distance along the outside of the swarm |
| 🦟 Mosquito | Copies the movement (or pillbug ability) of any piece it touches |
| 🐞 Ladybug | 2 hexes on top of the swarm, then 1 hex back down |
| 🪳 Pillbug | Moves 1 hex like the Queen Bee, or picks up an adjacent piece and places it in any empty hex next to it; the moved piece is stunned for the opponent's next turn |

## Game Modes

- **Pass & Play** — two players share one device.
- **VS AI** — play against the engine on Easy (random), Medium (greedy), or Hard (deep minimax search).
- **🎓 Tutorial** — guided step-by-step introduction that teaches placement, movement, and the winning condition.

## Languages

English, Spanish, Brazilian Portuguese, French, German, Japanese, and Chinese — switchable in-game.

## Platforms

- **Web:** Vite + React 19 + TypeScript + Tailwind CSS.
- **Android:** native Jetpack Compose app (package `com.tecepeipe.bugzstrategy`), the same engine as the web version, with save/resume and full quality gates.

## Build

```bash
npm install        # from android-tools/ (shared deps)
npm run dev        # Vite dev server on port 3000
npm run lint       # TypeScript typecheck (tsc --noEmit)
npm run build      # static bundle to dist/

android-tools/build_apk.sh /home/fabricio/bugz-strategy   # native Android APK
```