# 🐝 Bugz Strategy

**Bugz Strategy** es un juego de estrategia hexagonal por turnos para dos jugadores. Lidera a tu enjambre de insectos: coloca y mueve tus bichos alrededor de la abeja reina e intenta rodear la reina rival antes de que rodeen la tuya.

## Características

- Estrategia hexagonal para dos jugadores con oponentes IA y aplicación total de las reglas.
- Modos **Pasa y juega** (en el mismo dispositivo) y **VS IA** con tres dificultades (Fácil / Media / Difícil).
- Aplicación total de las reglas con resaltado de movimientos legales, aviso del turno límite de la reina y pases forzados automáticos.
- Expansiones de reglas: **Mosquito** 🦟, **Mariquita** 🐞, **Cochinilla** 💊.
- Deshacer ilimitado, registro de movimientos y tablero hexagonal con zoom y desplazamiento.
- **Visor y exportador de código Kotlin** integrado (el juego también es una app nativa de Jetpack Compose).
- Disponible en **7 idiomas** con tema claro y oscuro.

## Cómo se juega

**Objetivo:** rodea la abeja reina del rival con tus piezas por los seis lados. El primero en lograrlo gana; si ambas reinas quedan rodeadas a la vez, es empate.

En tu turno puedes **colocar un bicho** de tu reserva o **mover uno de tus bichos**:

- Debes introducir tu abeja reina en tu **4º turno**.
- Tu primera pieza se coloca en cualquier lugar; las siguientes deben tocar una de tus piezas (y, salvo la segunda colocación, no pueden tocar piezas del rival).
- El enjambre debe permanecer siempre conectado: nunca puedes dividirlo ni meter una pieza en un hueco entre piezas apiladas.

| Insecto | Movimiento |
|---------|------------|
| 🐝 Abeja reina | Exactamente 1 hexágono por turno |
| 🕷️ Araña | Exactamente 3 hexágonos por el borde exterior, sin retroceder |
| 🪲 Escarabajo | 1 hexágono; puede subir sobre otras piezas (incluso la reina) para bloquearlas |
| 🦗 Saltamontes | Salta en línea recta sobre al menos una pieza y aterriza en el primer hexágono vacío |
| 🐜 Hormiga soldado | Se desliza cualquier distancia por el exterior del enjambre |
| 🦟 Mosquito | Copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque |
| 🐞 Mariquita | 2 hexágonos sobre el enjambre y luego 1 de vuelta al tablero |
| 🪳 Cochinilla | Se mueve 1 hexágono como la abeja reina, o levanta una pieza adyacente y la coloca en cualquier hexágono vacío junto a ella; la pieza movida queda aturdida para el siguiente turno del rival |

## Modos de juego

- **Pasa y juega** — dos jugadores comparten un dispositivo.
- **VS IA** — juega contra el motor en Fácil (aleatorio), Media (codiciosa) o Difícil (búsqueda minimax profunda).

## Idiomas

Inglés, español, portugués de Brasil, francés, alemán, japonés y chino — seleccionables en el juego.

## Plataformas

- **Web:** Vite + React 19 + TypeScript + Tailwind CSS.
- **Android:** app nativa de Jetpack Compose (paquete `com.tecepeipe.bugzstrategy`), el mismo motor que la versión web, con guardado/reanudación y comprobaciones de calidad.

## Compilación

```bash
npm install        # desde android-tools/ (dependencias compartidas)
npm run dev        # servidor de desarrollo Vite en el puerto 3000
npm run lint       # comprobación de tipos (tsc --noEmit)
npm run build      # bundle estático en dist/

android-tools/build_apk.sh /home/fabricio/bugz-strategy   # APK nativo de Android
```