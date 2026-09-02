package com.tecepeipe.bugzstrategy

import android.content.Context
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.animation.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Canvas
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.gestures.detectTapGestures
import androidx.compose.foundation.gestures.detectTransformGestures
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.runtime.collectAsState
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.input.pointer.pointerInput
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.text.*
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.launch
import org.json.JSONArray
import org.json.JSONObject
import kotlin.math.*

// ============================================================================
// 0. COLOR SCHEMES
// ============================================================================

private val DarkColors = darkColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFF0F172A),
    onBackground = Color(0xFFE2E8F0),
    surface = Color(0xFF1E293B),
    onSurface = Color(0xFFE2E8F0),
    surfaceVariant = Color(0xFF334155),
    onSurfaceVariant = Color(0xFF94A3B8),
    outline = Color(0xFF64748B),
)

private val LightColors = lightColorScheme(
    primary = Color(0xFFF59E0B),
    onPrimary = Color(0xFF451A03),
    background = Color(0xFFF8FAFC),
    onBackground = Color(0xFF0F172A),
    surface = Color(0xFFFFFFFF),
    onSurface = Color(0xFF0F172A),
    surfaceVariant = Color(0xFFE2E8F0),
    onSurfaceVariant = Color(0xFF475569),
    outline = Color(0xFF94A3B8),
)

// ============================================================================
// 0.5 I18N (languages: English, Spanish, Brazilian Portuguese, French, German,
// Japanese, Chinese). The UI reads strings via tr("key"); the dictionary below
// is keyed per language. Bug/insect names stay English (data).
// ============================================================================

enum class Lang(val nativeName: String) {
    EN("English"),
    ES("Español"),
    PT("Português"),
    FR("Français"),
    DE("Deutsch"),
    JA("日本語"),
    ZH("中文"),
}

@Suppress("LargeClass")
object I18n {
    private val strings: Map<Lang, Map<String, String>> = mapOf(
        Lang.EN to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "Game Over",
            "topAiThinking" to "AI Thinking...",
            "topVsAi" to "VS AI ({diff})",
            "topPassPlay" to "Pass & Play",
            "winnerLabel" to "Winner: {color}",
            "turnLabel" to "Turn: P{player}",
            "white" to "White",
            "black" to "Black",
            "draw" to "Draw",
            "settings" to "Settings",
            "passLog" to "Player {n} forced to pass (no legal moves).",
            "aiPassLog" to "AI (Player {n}) forced to pass.",
            "aiNoMovesToast" to "AI has no valid moves. Turn passed.",
            "undoToast" to "Move undone.",
            "queenDueToast" to "Queen Bee must be placed this turn (4th move rule).",
            "moveLog" to "Move Log",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 New Bugz Game",
            "selectMode" to "Select Game Mode:",
            "modePassPlay" to "Pass & Play",
            "modeVsAi" to "VS AI Engine",
            "aiDifficulty" to "AI Difficulty:",
            "diffEasy" to "Easy",
            "diffMedium" to "Medium",
            "diffHard" to "Hard",
            "youPlayAs" to "You play as:",
            "whiteP1" to "White (P1)",
            "blackP2" to "Black (P2)",
            "expansions" to "Expansions:",
            "expMosquito" to "🦟 Mosquito",
            "expLadybug" to "🐞 Ladybug",
            "expPillbug" to "💊 Pillbug",
            "startMatch" to "Start Match",
            "learnToPlay" to "📖 Learn to Play",
            "rulesTitle" to "How to Play Bugz",
            "rulesGoal" to "🎯 Goal: Surround the opponent's Queen Bee with pieces on all six sides. " +
                "First to do so wins; both surrounded at once is a draw.",
            "rulesCoreTitle" to "📜 Core Rules",
            "rulesCoreBody" to "• Play one piece per turn (placement) or move one of your pieces.\n" +
                "• Your Queen Bee must be introduced by your 4th turn.\n" +
                "• Your first piece is placed anywhere; later pieces must be placed adjacent to one " +
                "of your pieces. Except for your second placement, pieces may not be placed touching " +
                "an opponent's piece.\n" +
                "• The swarm must always stay connected. You may never move a piece that would split " +
                "the swarm, and you may not move a piece into a gap unless it still fits the " +
                "freedom-to-move rule (no squeezing between stacked pieces).",
            "rulesInsectsTitle" to "🦗 Insect Movements",
            "insectQueen" to "🐝 Queen Bee — moves exactly 1 hex per turn.",
            "insectSpider" to "🕷️ Spider — crawls exactly 3 hexes along the outside edge, never retracing.",
            "insectBeetle" to "🪲 Beetle — moves 1 hex and can climb on top of other pieces (including a " +
                "Queen) to block them; a beetle on top moves like a beetle over the stack.",
            "insectGrasshopper" to "🦗 Grasshopper — jumps in a straight line over at least one piece, " +
                "landing on the first empty hex in that line.",
            "insectAnt" to "🐜 Soldier Ant — may slide any number of hexes along the outside of the swarm.",
            "insectMosquito" to "🦟 Mosquito — copies the movement (or pillbug ability) of any piece it touches.",
            "insectLadybug" to "🐞 Ladybug — moves exactly 2 hexes on top of the swarm, then 1 hex back " +
                "down to the board (may land on empty board hexes).",
            "insectPillbug" to "🪳 Pillbug — moves 1 space like the Queen Bee, or may pick up an adjacent " +
                "unstacked piece (friend or foe) and place it in any empty space adjacent to it. The moved " +
                "piece is stunned and cannot move on the opponent's next turn.",
            "overDrawTitle" to "Draw!",
            "overWinTitle" to "Player {n} Wins!",
            "overDrawBody" to "Both Queens are surrounded. It's a draw!",
            "overWinBody" to "The Queen of Player {n} is surrounded. Well played!",
            "rematch" to "Rematch",
            "newSetup" to "New Game Setup",
            "resumeTitle" to "Continue your last match?",
            "resumeBody" to "You have a saved game in progress.",
            "resumeBtn" to "Resume",
            "newGameBtn" to "New Game",
            "placedLog" to "Placed {bug} at ({q}, {r})",
            "movedLog" to "Moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",
            "pillbugLog" to "Pillbug moved {bug} from ({q1}, {r1}) to ({q2}, {r2})",
            "tutorialMode" to "🎓 Tutorial",
            "tutorialWelcome" to "Welcome! This tutorial will teach you how to play Bugz. You'll learn placement, movement, and the win condition. Tap Next to begin!",
            "tutorialNext" to "Next",
            "tutorialSkip" to "Skip Tutorial",
            "tutorialStepLabel" to "Step {n}:",
            "tutorialPlaceQueen" to "Tap the 🐝 Queen Bee in your reserve below, then tap any hex on the board to place her.",
            "tutorialOppQueen" to "⏳ Opponent is placing their Queen Bee…",
            "tutorialPlaceSpider" to "Tap the 🕷️ Spider in your reserve, then tap a highlighted hex to place it. Spiders move exactly 3 spaces around the edge.",
            "tutorialOppSpider" to "⏳ Opponent is placing a Spider…",
            "tutorialPlaceBeetle" to "Tap the 🪲 Beetle in your reserve, then tap a highlighted hex to place it. Beetles move 1 space and can climb on top of other pieces!",
            "tutorialOppBeetle" to "⏳ Opponent is placing a Beetle…",
            "tutorialPlaceGrasshopper" to "Tap the 🦗 Grasshopper in your reserve, then tap a highlighted hex to place it. Grasshoppers jump in a straight line over pieces!",
            "tutorialOppGrasshopper" to "⏳ Opponent is placing a Grasshopper…",
            "tutorialMoveExample" to "Now try moving! Tap one of your pieces on the board, then tap a highlighted hex to move it.",
            "tutorialComplete" to "🎉 Tutorial complete! You've learned the basics — placement, movement, and the goal. Keep playing to discover more strategies. Have fun!",
            "tutorialGotIt" to "Got It — New Game",
            "bugQueen" to "Queen Bee",
            "bugSpider" to "Spider",
            "bugBeetle" to "Beetle",
            "bugGrasshopper" to "Grasshopper",
            "bugAnt" to "Soldier Ant",
            "bugMosquito" to "Mosquito",
            "bugLadybug" to "Ladybug",
            "bugPillbug" to "Pillbug",
            "gotIt" to "Got it",

        ),
        Lang.ES to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "Fin del juego",
            "topAiThinking" to "IA pensando…",
            "topVsAi" to "VS IA ({diff})",
            "topPassPlay" to "Pasa y juega",
            "winnerLabel" to "Ganador: {color}",
            "turnLabel" to "Turno: P{player}",
            "white" to "Blanco",
            "black" to "Negro",
            "draw" to "Empate",
            "settings" to "Ajustes",
            "passLog" to "El Jugador {n} se vio obligado a pasar (sin movimientos legales).",
            "aiPassLog" to "La IA (Jugador {n}) se vio obligada a pasar.",
            "aiNoMovesToast" to "La IA no tiene movimientos válidos. Turno pasado.",
            "undoToast" to "Movimiento deshecho.",
            "queenDueToast" to "Debes colocar la abeja reina este turno (regla del 4º turno).",
            "moveLog" to "Registro de movimientos",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 Nueva partida de Bugz",
            "selectMode" to "Elige el modo de juego:",
            "modePassPlay" to "Pasa y juega",
            "modeVsAi" to "VS Motor IA",
            "aiDifficulty" to "Dificultad de la IA:",
            "diffEasy" to "Fácil",
            "diffMedium" to "Medio",
            "diffHard" to "Difícil",
            "youPlayAs" to "Juegas como:",
            "whiteP1" to "Blanco (P1)",
            "blackP2" to "Negro (P2)",
            "expansions" to "Expansiones:",
            "expMosquito" to "🦟 Mosquito",
            "expLadybug" to "🐞 Mariquita",
            "expPillbug" to "💊 Cochinilla",
            "startMatch" to "Comenzar partida",
            "learnToPlay" to "📖 Aprende a jugar",
            "rulesTitle" to "Cómo jugar a Bugz",
            "rulesGoal" to "🎯 Objetivo: rodea la abeja reina del rival con piezas por los seis lados. " +
                "El primero en lograrlo gana; si ambas quedan rodeadas a la vez, es empate.",
            "rulesCoreTitle" to "📜 Reglas básicas",
            "rulesCoreBody" to "• Coloca una pieza por turno o mueve una de tus piezas.\n" +
                "• Debes introducir tu abeja reina en tu 4º turno.\n" +
                "• Tu primera pieza se coloca en cualquier lugar; las siguientes deben ir adyacentes a " +
                "una de tus piezas. Salvo la segunda colocación, no puedes colocar piezas tocando " +
                "piezas del rival.\n" +
                "• El enjambre debe permanecer siempre conectado. Nunca muevas una pieza que dividiría " +
                "el enjambre, ni la metas en un hueco si no respeta la regla de libertad de " +
                "movimiento (sin apretujones entre piezas apiladas).",
            "rulesInsectsTitle" to "🦗 Movimientos de los insectos",
            "insectQueen" to "🐝 Abeja reina — se mueve exactamente 1 hexágono por turno.",
            "insectSpider" to "🕷️ Araña — se arrastra exactamente 3 hexágonos por el borde exterior, sin retroceder.",
            "insectBeetle" to "🪲 Escarabajo — se mueve 1 hexágono y puede subir sobre otras piezas " +
                "(incluida la reina) para bloquearlas; uno arriba se mueve como un escarabajo sobre la pila.",
            "insectGrasshopper" to "🦗 Saltamontes — salta en línea recta sobre al menos una pieza y " +
                "aterriza en el primer hexágono vacío de esa línea.",
            "insectAnt" to "🐜 Hormiga soldado — puede deslizarse cualquier cantidad de hexágonos por el exterior del enjambre.",
            "insectMosquito" to "🦟 Mosquito — copia el movimiento (o la habilidad de la cochinilla) de cualquier pieza que toque.",
            "insectLadybug" to "🐞 Mariquita — se mueve exactamente 2 hexágonos sobre el enjambre y luego " +
                "1 hacia abajo al tablero (puede aterrizar en hexágonos vacíos).",
            "insectPillbug" to "🪳 Cochinilla — se mueve 1 espacio como la abeja reina, o puede levantar una " +
                "pieza adyacente sin apilar (aliada o enemiga) y colocarla en cualquier espacio vacío " +
                "adyacente. La pieza movida queda aturdida y no puede moverse en el siguiente turno del rival.",
            "overDrawTitle" to "¡Empate!",
            "overWinTitle" to "¡Gana el Jugador {n}!",
            "overDrawBody" to "Ambas reinas están rodeadas. ¡Empate!",
            "overWinBody" to "La reina del Jugador {n} está rodeada. ¡Bien jugado!",
            "rematch" to "Revancha",
            "newSetup" to "Nueva configuración",
            "resumeTitle" to "¿Continuar tu última partida?",
            "resumeBody" to "Tienes una partida guardada en curso.",
            "resumeBtn" to "Continuar",
            "newGameBtn" to "Nueva partida",
            "placedLog" to "Colocó {bug} en ({q}, {r})",
            "movedLog" to "Movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",
            "pillbugLog" to "La cochinilla movió {bug} de ({q1}, {r1}) a ({q2}, {r2})",
            "tutorialMode" to "🎓 Tutorial",
            "tutorialWelcome" to "¡Bienvenido! Este tutorial te enseñará a jugar a Bugz. Aprenderás a colocar, mover y ganar. ¡Toca Siguiente para empezar!",
            "tutorialNext" to "Siguiente",
            "tutorialSkip" to "Saltar tutorial",
            "tutorialStepLabel" to "Paso {n}:",
            "tutorialPlaceQueen" to "Toca la 🐝 abeja reina en tu reserva abajo, luego toca cualquier hexágono para colocarla.",
            "tutorialOppQueen" to "⏳ El oponente está colocando su abeja reina…",
            "tutorialPlaceSpider" to "Toca la 🕷️ araña en tu reserva, luego toca un hexágono resaltado para colocarla. Las arañas se mueven exactamente 3 espacios por el borde.",
            "tutorialOppSpider" to "⏳ El oponente está colocando una araña…",
            "tutorialPlaceBeetle" to "Toca el 🪲 escarabajo en tu reserva, luego toca un hexágono resaltado para colocarlo. ¡Los escarabajos se mueven 1 espacio y pueden subir encima de otras piezas!",
            "tutorialOppBeetle" to "⏳ El oponente está colocando un escarabajo…",
            "tutorialPlaceGrasshopper" to "Toca el 🦗 saltamontes en tu reserva, luego toca un hexágono resaltado para colocarlo. ¡Los saltamontes saltan en línea recta sobre las piezas!",
            "tutorialOppGrasshopper" to "⏳ El oponente está colocando un saltamontes…",
            "tutorialMoveExample" to "¡Ahora intenta mover! Toca una de tus piezas en el tablero, luego toca un hexágono resaltado para moverla.",
            "tutorialComplete" to "🎉 ¡Tutorial completo! Has aprendido lo básico — colocación, movimiento y el objetivo. Sigue jugando para descubrir más estrategias. ¡Diviértete!",
            "tutorialGotIt" to "Entendido — Nueva partida",
            "bugQueen" to "Abeja reina",
            "bugSpider" to "Araña",
            "bugBeetle" to "Escarabajo",
            "bugGrasshopper" to "Saltamontes",
            "bugAnt" to "Hormiga soldado",
            "bugMosquito" to "Mosquito",
            "bugLadybug" to "Mariquita",
            "bugPillbug" to "Cochinilla",
            "gotIt" to "Entendido",

        ),
        Lang.PT to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "Fim de jogo",
            "topAiThinking" to "IA pensando…",
            "topVsAi" to "VS IA ({diff})",
            "topPassPlay" to "Passa e joga",
            "winnerLabel" to "Vencedor: {color}",
            "turnLabel" to "Vez: P{player}",
            "white" to "Branco",
            "black" to "Preto",
            "draw" to "Empate",
            "settings" to "Ajustes",
            "passLog" to "O Jogador {n} foi obrigado a passar (sem movimentos legais).",
            "aiPassLog" to "A IA (Jogador {n}) foi obrigada a passar.",
            "aiNoMovesToast" to "A IA não tem movimentos válidos. Turno passado.",
            "undoToast" to "Movimento desfeito.",
            "queenDueToast" to "Você deve colocar a abelha rainha neste turno (regra do 4º turno).",
            "moveLog" to "Registro de movimentos",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 Nova partida de Bugz",
            "selectMode" to "Escolha o modo de jogo:",
            "modePassPlay" to "Passa e joga",
            "modeVsAi" to "VS Motor IA",
            "aiDifficulty" to "Dificuldade da IA:",
            "diffEasy" to "Fácil",
            "diffMedium" to "Médio",
            "diffHard" to "Difícil",
            "youPlayAs" to "Você joga como:",
            "whiteP1" to "Branco (P1)",
            "blackP2" to "Preto (P2)",
            "expansions" to "Expansões:",
            "expMosquito" to "🦟 Pernilongo",
            "expLadybug" to "🐞 Joaninha",
            "expPillbug" to "💊 Bicho-bola",
            "startMatch" to "Começar partida",
            "learnToPlay" to "📖 Aprenda a jogar",
            "rulesTitle" to "Como jogar Bugz",
            "rulesGoal" to "🎯 Objetivo: cerque a abelha rainha do oponente com peças em todos os seis " +
                "lados. Quem conseguir primeiro vence; se ambas forem cercadas ao mesmo tempo, empata.",
            "rulesCoreTitle" to "📜 Regras básicas",
            "rulesCoreBody" to "• Jogue uma peça por turno ou mova uma de suas peças.\n" +
                "• Sua abelha rainha deve ser introduzida até o seu 4º turno.\n" +
                "• Sua primeira peça pode ser colocada em qualquer lugar; as seguintes devem ficar " +
                "adjacentes a uma de suas peças. Exceto a segunda colocação, as peças não podem tocar " +
                "peças do oponente.\n" +
                "• O enxame deve permanecer sempre conectado. Nunca mova uma peça que dividiria o " +
                "enxame, nem mova para um vão sem respeitar a regra de liberdade de movimento (sem " +
                "apertar entre peças empilhadas).",
            "rulesInsectsTitle" to "🦗 Movimentos dos insetos",
            "insectQueen" to "🐝 Abelha rainha — move exatamente 1 hexágono por turno.",
            "insectSpider" to "🕷️ Aranha — rasteja exatamente 3 hexágonos pela borda externa, sem retroceder.",
            "insectBeetle" to "🪲 Besouro — move 1 hexágono e pode subir sobre outras peças (inclusive " +
                "a rainha) para bloqueá-las; um besouro no topo move-se como besouro sobre a pilha.",
            "insectGrasshopper" to "🦗 Gafanhoto — salta em linha reta sobre pelo menos uma peça, pousando " +
                "no primeiro hexágono vazio da linha.",
            "insectAnt" to "🐜 Formiga soldado — pode deslizar qualquer número de hexágonos pela parte externa do enxame.",
            "insectMosquito" to "🦟 Pernilongo — copia o movimento (ou a habilidade do bicho-bola) de qualquer peça que toque.",
            "insectLadybug" to "🐞 Joaninha — move exatamente 2 hexágonos sobre o enxame e depois 1 de " +
                "volta ao tabuleiro (pode pousar em hexágonos vazios).",
            "insectPillbug" to "🪳 Bicho-bola — move-se 1 espaço como a abelha rainha ou pode levantar uma " +
                "peça adjacente sem empilhar (aliada ou inimiga) e colocá-la em qualquer espaço vazio " +
                "adjacente. A peça movida fica atordoada e não pode se mover no próximo turno do oponente.",
            "overDrawTitle" to "Empate!",
            "overWinTitle" to "Jogador {n} venceu!",
            "overDrawBody" to "As duas rainhas estão cercadas. Empate!",
            "overWinBody" to "A rainha do Jogador {n} está cercada. Bem jogado!",
            "rematch" to "Revanche",
            "newSetup" to "Nova configuração",
            "resumeTitle" to "Continuar sua última partida?",
            "resumeBody" to "Você tem uma partida salva em andamento.",
            "resumeBtn" to "Continuar",
            "newGameBtn" to "Nova partida",
            "placedLog" to "Colocou {bug} em ({q}, {r})",
            "movedLog" to "Moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",
            "pillbugLog" to "A bicho-bola moveu {bug} de ({q1}, {r1}) para ({q2}, {r2})",
            "tutorialMode" to "🎓 Tutorial",
            "tutorialWelcome" to "Bem-vindo! Este tutorial vai te ensinar a jogar Bugz. Você vai aprender colocação, movimento e como vencer. Toque em Próximo para começar!",
            "tutorialNext" to "Próximo",
            "tutorialSkip" to "Pular tutorial",
            "tutorialStepLabel" to "Passo {n}:",
            "tutorialPlaceQueen" to "Toque na 🐝 abelha rainha na sua reserva abaixo, depois toque em qualquer hexágono para colocá-la.",
            "tutorialOppQueen" to "⏳ O oponente está colocando a abelha rainha…",
            "tutorialPlaceSpider" to "Toque na 🕷️ aranha na sua reserva, depois toque em um hexágono destacado para colocá-la. Aranhas se movem exatamente 3 espaços pela borda.",
            "tutorialOppSpider" to "⏳ O oponente está colocando uma aranha…",
            "tutorialPlaceBeetle" to "Toque no 🪲 besouro na sua reserva, depois toque em um hexágono destacado para colocá-lo. Os besouros se movem 1 espaço e podem subir em cima de outras peças!",
            "tutorialOppBeetle" to "⏳ O oponente está colocando um besouro…",
            "tutorialPlaceGrasshopper" to "Toque no 🦗 gafanhoto na sua reserva, depois toque em um hexágono destacado para colocá-lo. Gafanhotos pulam em linha reta sobre as peças!",
            "tutorialOppGrasshopper" to "⏳ O oponente está colocando um gafanhoto…",
            "tutorialMoveExample" to "Agora tente mover! Toque em uma de suas peças no tabuleiro, depois toque em um hexágono destacado para movê-la.",
            "tutorialComplete" to "🎉 Tutorial completo! Você aprendeu o básico — colocação, movimento e o objetivo. Continue jogando para descobrir mais estratégias. Divirta-se!",
            "tutorialGotIt" to "Entendi — Nova partida",
            "bugQueen" to "Abelha rainha",
            "bugSpider" to "Aranha",
            "bugBeetle" to "Besouro",
            "bugGrasshopper" to "Gafanhoto",
            "bugAnt" to "Formiga soldado",
            "bugMosquito" to "Pernilongo",
            "bugLadybug" to "Joaninha",
            "bugPillbug" to "Bicho-bola",
            "gotIt" to "Entendi",

        ),
        Lang.FR to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "Fin de partie",
            "topAiThinking" to "L’IA réfléchit…",
            "topVsAi" to "VS IA ({diff})",
            "topPassPlay" to "Passe et joue",
            "winnerLabel" to "Gagnant : {color}",
            "turnLabel" to "Tour : P{player}",
            "white" to "Blanc",
            "black" to "Noir",
            "draw" to "Égalité",
            "settings" to "Réglages",
            "passLog" to "Le Joueur {n} a été forcé de passer (aucun coup légal).",
            "aiPassLog" to "L’IA (Joueur {n}) a été forcée de passer.",
            "aiNoMovesToast" to "L’IA n’a aucun coup valide. Tour passé.",
            "undoToast" to "Coup annulé.",
            "queenDueToast" to "Vous DEVEZ placer votre reine ce tour-ci (règle du 4e tour).",
            "moveLog" to "Historique des coups",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 Nouvelle partie de Bugz",
            "selectMode" to "Choisissez le mode de jeu :",
            "modePassPlay" to "Passe et joue",
            "modeVsAi" to "VS Moteur IA",
            "aiDifficulty" to "Difficulté de l’IA :",
            "diffEasy" to "Facile",
            "diffMedium" to "Moyen",
            "diffHard" to "Difficile",
            "youPlayAs" to "Vous jouez :",
            "whiteP1" to "Blanc (P1)",
            "blackP2" to "Noir (P2)",
            "expansions" to "Extensions :",
            "expMosquito" to "🦟 Moustique",
            "expLadybug" to "🐞 Coccinelle",
            "expPillbug" to "💊 Cloporte",
            "startMatch" to "Commencer la partie",
            "learnToPlay" to "📖 Apprendre à jouer",
            "rulesTitle" to "Comment jouer à Bugz",
            "rulesGoal" to "🎯 Objectif : encerclez la reine adverse avec des pièces sur les six " +
                "côtés. Le premier à y parvenir gagne ; si les deux sont encerclées à la fois, c’est " +
                "une égalité.",
            "rulesCoreTitle" to "📜 Règles de base",
            "rulesCoreBody" to "• Jouez une pièce par tour (placement) ou déplacez une de vos pièces.\n" +
                "• Votre reine doit être introduite avant votre 4e tour.\n" +
                "• Votre première pièce est placée n’importe où ; les suivantes doivent être " +
                "adjacentes à une de vos pièces. Sauf pour la deuxième pose, vous ne pouvez pas poser " +
                "une pièce touchant une pièce adverse.\n" +
                "• L’essaim doit toujours rester connecté. Vous ne pouvez jamais déplacer une pièce " +
                "qui diviserait l’essaim, ni la glisser dans un espace étroit (pas de glissement entre " +
                "pièces empilées).",
            "rulesInsectsTitle" to "🦗 Déplacements des insectes",
            "insectQueen" to "🐝 Reine — se déplace d’exactement 1 hexagone par tour.",
            "insectSpider" to "🕷️ Araignée — se déplace d’exactement 3 hexagones le long du bord, sans jamais revenir en arrière.",
            "insectBeetle" to "🪲 Scarabée — se déplace d’1 hexagone et peut grimper sur d’autres pièces " +
                "(y compris la reine) pour les bloquer ; un scarabée en haut se déplace par-dessus la pile.",
            "insectGrasshopper" to "🦗 Sauterelle — saute en ligne droite par-dessus au moins une pièce " +
                "et atterrit sur le premier hexagone vide de la ligne.",
            "insectAnt" to "🐜 Fourmi soldat — peut glisser d’un nombre quelconque d’hexagones le long de l’extérieur de l’essaim.",
            "insectMosquito" to "🦟 Moustique — copie le déplacement (ou l’aptitude du cloporte) de toute pièce qu’il touche.",
            "insectLadybug" to "🐞 Coccinelle — se déplace d’exactement 2 hexagones par-dessus l’essaim, " +
                "puis redescend d’1 hexagone sur le plateau (peut atterrir sur des cases vides).",
            "insectPillbug" to "🪳 Cloporte — se déplace d’1 case comme la reine des abeilles, ou peut " +
                "ramasser une pièce adjacente non empilée (alliée ou ennemie) et la placer dans n’importe " +
                "quelle case vide adjacente. La pièce déplacée est étourdie et ne peut pas bouger au tour " +
                "suivant de l’adversaire.",
            "overDrawTitle" to "Égalité !",
            "overWinTitle" to "Le Joueur {n} gagne !",
            "overDrawBody" to "Les deux reines sont encerclées. Égalité !",
            "overWinBody" to "La reine du Joueur {n} est encerclée. Bien joué !",
            "rematch" to "Revanche",
            "newSetup" to "Nouvelle configuration",
            "resumeTitle" to "Reprendre votre dernière partie ?",
            "resumeBody" to "Vous avez une partie sauvegardée en cours.",
            "resumeBtn" to "Reprendre",
            "newGameBtn" to "Nouvelle partie",
            "placedLog" to "A placé {bug} en ({q}, {r})",
            "movedLog" to "A déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",
            "pillbugLog" to "Le cloporte a déplacé {bug} de ({q1}, {r1}) vers ({q2}, {r2})",
            "tutorialMode" to "🎓 Tutoriel",
            "tutorialWelcome" to "Bienvenue ! Ce tutoriel va vous apprendre à jouer à Bugz. Placement, déplacement et condition de victoire. Appuyez sur Suivant !",
            "tutorialNext" to "Suivant",
            "tutorialSkip" to "Passer le tutoriel",
            "tutorialStepLabel" to "Étape {n} :",
            "tutorialPlaceQueen" to "Appuyez sur la 🐝 reine dans votre réserve ci-dessous, puis sur un hexagone pour la placer.",
            "tutorialOppQueen" to "⏳ L'adversaire place sa reine…",
            "tutorialPlaceSpider" to "Appuyez sur l'🕷️ araignée dans votre réserve, puis sur un hexagone en surbrillance. Les araignées se déplacent d'exactement 3 cases sur le bord.",
            "tutorialOppSpider" to "⏳ L'adversaire place une araignée…",
            "tutorialPlaceBeetle" to "Appuyez sur le 🪲 scarabée dans votre réserve, puis sur un hexagone en surbrillance. Les scarabées se déplacent d'1 case et peuvent grimper sur d'autres pièces !",
            "tutorialOppBeetle" to "⏳ L'adversaire place un scarabée…",
            "tutorialPlaceGrasshopper" to "Appuyez sur la 🦗 sauterelle dans votre réserve, puis sur un hexagone en surbrillance. Les sauterelles sautent en ligne droite par-dessus les pièces !",
            "tutorialOppGrasshopper" to "⏳ L'adversaire place une sauterelle…",
            "tutorialMoveExample" to "Essayez de déplacer ! Appuyez sur une de vos pièces sur le plateau, puis sur un hexagone en surbrillance pour la déplacer.",
            "tutorialComplete" to "🎉 Tutoriel terminé ! Vous avez appris les bases — placement, déplacement et objectif. Continuez à jouer pour découvrir plus de stratégies. Amusez-vous !",
            "tutorialGotIt" to "Compris — Nouvelle partie",
            "bugQueen" to "Reine",
            "bugSpider" to "Araignée",
            "bugBeetle" to "Scarabée",
            "bugGrasshopper" to "Sauterelle",
            "bugAnt" to "Fourmi soldat",
            "bugMosquito" to "Moustique",
            "bugLadybug" to "Coccinelle",
            "bugPillbug" to "Cloporte",
            "gotIt" to "Compris",

        ),
        Lang.DE to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "Spiel vorbei",
            "topAiThinking" to "KI denkt…",
            "topVsAi" to "Gegen KI ({diff})",
            "topPassPlay" to "Weitersagen & Spielen",
            "winnerLabel" to "Gewinner: {color}",
            "turnLabel" to "Zug: P{player}",
            "white" to "Weiß",
            "black" to "Schwarz",
            "draw" to "Unentschieden",
            "settings" to "Einstellungen",
            "passLog" to "Spieler {n} musste aussetzen (keine legalen Züge).",
            "aiPassLog" to "Die KI (Spieler {n}) musste aussetzen.",
            "aiNoMovesToast" to "Die KI hat keine gültigen Züge. Zug übersprungen.",
            "undoToast" to "Zug rückgängig gemacht.",
            "queenDueToast" to "Du MUSST diesen Zug deine Bienenkönigin platzieren (4.-Zug-Regel).",
            "moveLog" to "Zugverlauf",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 Neues Bugz-Spiel",
            "selectMode" to "Spielmodus wählen:",
            "modePassPlay" to "Weitersagen & Spielen",
            "modeVsAi" to "Gegen KI-Engine",
            "aiDifficulty" to "KI-Schwierigkeit:",
            "diffEasy" to "Leicht",
            "diffMedium" to "Mittel",
            "diffHard" to "Schwer",
            "youPlayAs" to "Du spielst als:",
            "whiteP1" to "Weiß (P1)",
            "blackP2" to "Schwarz (P2)",
            "expansions" to "Erweiterungen:",
            "expMosquito" to "🦟 Mücke",
            "expLadybug" to "🐞 Marienkäfer",
            "expPillbug" to "💊 Assel",
            "startMatch" to "Start",
            "learnToPlay" to "📖 Lernen zu spielen",
            "rulesTitle" to "So spielst du Bugz",
            "rulesGoal" to "🎯 Ziel: Umfasse die Bienenkönigin des Gegners auf allen sechs Seiten. " +
                "Wer das zuerst schafft, gewinnt; sind beide gleichzeitig eingekreist, ist es ein " +
                "Unentschieden.",
            "rulesCoreTitle" to "📜 Grundregeln",
            "rulesCoreBody" to "• Setze pro Zug eine Kachel (Platzierung) oder bewege eine deiner Kacheln.\n" +
                "• Deine Bienenkönigin muss bis zu deinem 4. Zug eingeführt werden.\n" +
                "• Deine erste Kachel platzierst du überall; spätere müssen an eine deiner Kacheln " +
                "angrenzen. Außer bei deiner zweiten Platzierung dürfen Kacheln nicht gegnerische " +
                "Kacheln berühren.\n" +
                "• Der Schwarm muss immer verbunden bleiben. Du darfst nie eine Kachel ziehen, die den " +
                "Schwarm spaltet, und nicht in eine Lücke ziehen, es sei denn, es gilt die " +
                "Bewegungsfreiheitsregel (kein Durchquetschen zwischen gestapelten Kacheln).",
            "rulesInsectsTitle" to "🦗 Bewegungen der Insekten",
            "insectQueen" to "🐝 Bienenkönigin — zieht genau 1 Feld pro Zug.",
            "insectSpider" to "🕷️ Spinne — kriecht genau 3 Felder entlang der Außenkante, nie rückwärts.",
            "insectBeetle" to "🪲 Käfer — zieht 1 Feld und kann auf andere Kacheln (auch die Königin) " +
                "klettern, um sie zu blockieren; ein Käfer oben zieht über den Stapel.",
            "insectGrasshopper" to "🦗 Heuschrecke — springt in einer geraden Linie über mindestens eine " +
                "Kachel und landet auf dem ersten leeren Feld dieser Linie.",
            "insectAnt" to "🐜 Soldatenameise — kann beliebig viele Felder entlang der Außenseite des Schwarms gleiten.",
            "insectMosquito" to "🦟 Mücke — kopiert die Bewegung (oder Assel-Fähigkeit) jeder Kachel, die sie berührt.",
            "insectLadybug" to "🐞 Marienkäfer — zieht genau 2 Felder über dem Schwarm und dann 1 Feld " +
                "zurück auf das Brett (darf auf leere Felder landen).",
            "insectPillbug" to "🪳 Assel — zieht 1 Feld wie die Bienenkönigin oder kann eine benachbarte, " +
                "nicht gestapelte Kachel (feindlich oder freundlich) aufheben und auf ein beliebiges leeres " +
                "Feld daneben setzen. Die bewegte Kachel ist benommen und kann im nächsten Zug des Gegners nicht ziehen.",
            "overDrawTitle" to "Unentschieden!",
            "overWinTitle" to "Spieler {n} gewinnt!",
            "overDrawBody" to "Beide Königinnen sind eingekreist. Unentschieden!",
            "overWinBody" to "Die Königin von Spieler {n} ist eingekreist. Gut gespielt!",
            "rematch" to "Revanche",
            "newSetup" to "Neue Konfiguration",
            "resumeTitle" to "Letzte Partie fortsetzen?",
            "resumeBody" to "Du hast ein gespeichertes Spiel in Arbeit.",
            "resumeBtn" to "Fortsetzen",
            "newGameBtn" to "Neues Spiel",
            "placedLog" to "{bug} bei ({q}, {r}) platziert",
            "movedLog" to "{bug} von ({q1}, {r1}) nach ({q2}, {r2}) bewegt",
            "pillbugLog" to "Assel bewegt {bug} von ({q1}, {r1}) nach ({q2}, {r2})",
            "tutorialMode" to "🎓 Tutorial",
            "tutorialWelcome" to "Willkommen! Dieses Tutorial bringt dir Bugz bei. Platzieren, Bewegen und Siegbedingung. Tippe auf Weiter!",
            "tutorialNext" to "Weiter",
            "tutorialSkip" to "Tutorial überspringen",
            "tutorialStepLabel" to "Schritt {n}:",
            "tutorialPlaceQueen" to "Tippe auf die 🐝 Bienenkönigin in deiner Reserve unten, dann auf ein beliebiges Feld zum Platzieren.",
            "tutorialOppQueen" to "⏳ Gegner platziert seine Bienenkönigin…",
            "tutorialPlaceSpider" to "Tippe auf die 🕷️ Spinne in deiner Reserve, dann auf ein hervorgehobenes Feld. Spinnen bewegen sich genau 3 Felder am Rand.",
            "tutorialOppSpider" to "⏳ Gegner platziert eine Spinne…",
            "tutorialPlaceBeetle" to "Tippe auf den 🪲 Käfer in deiner Reserve, dann auf ein hervorgehobenes Feld. Käfer bewegen sich 1 Feld und können auf andere Kacheln klettern!",
            "tutorialOppBeetle" to "⏳ Gegner platziert einen Käfer…",
            "tutorialPlaceGrasshopper" to "Tippe auf den 🦗 Grashüpfer in deiner Reserve, dann auf ein hervorgehobenes Feld. Grashüpfer springen in gerader Linie über Kacheln!",
            "tutorialOppGrasshopper" to "⏳ Gegner platziert einen Grashüpfer…",
            "tutorialMoveExample" to "Versuche jetzt zu ziehen! Tippe auf eine deiner Kacheln auf dem Brett, dann auf ein hervorgehobenes Feld zum Bewegen.",
            "tutorialComplete" to "🎉 Tutorial abgeschlossen! Du hast die Grundlagen gelernt — Platzierung, Bewegung und Ziel. Spiele weiter, um mehr Strategien zu entdecken. Viel Spaß!",
            "tutorialGotIt" to "Verstanden — Neues Spiel",
            "bugQueen" to "Bienenkönigin",
            "bugSpider" to "Spinne",
            "bugBeetle" to "Käfer",
            "bugGrasshopper" to "Heuschrecke",
            "bugAnt" to "Ameisensoldat",
            "bugMosquito" to "Mücke",
            "bugLadybug" to "Marienkäfer",
            "bugPillbug" to "Assel",
            "gotIt" to "Verstanden",

        ),
        Lang.JA to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "ゲーム終了",
            "topAiThinking" to "AI思考中…",
            "topVsAi" to "AIと対戦 ({diff})",
            "topPassPlay" to "パス&プレイ",
            "winnerLabel" to "勝者: {color}",
            "turnLabel" to "手番: P{player}",
            "white" to "白",
            "black" to "黒",
            "draw" to "引き分け",
            "settings" to "設定",
            "passLog" to "プレイヤー{n}は合法手がなくパスしました。",
            "aiPassLog" to "AI（プレイヤー{n}）はパスを余儀なくされました。",
            "aiNoMovesToast" to "AIに有効な手がありません。パスしました。",
            "undoToast" to "手を戻しました。",
            "queenDueToast" to "このターンは女王バチを配置しなければなりません（4手目ルール）。",
            "moveLog" to "手番履歴",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 新しいBugzゲーム",
            "selectMode" to "ゲームモードを選択:",
            "modePassPlay" to "パス&プレイ",
            "modeVsAi" to "AIエンジンと対戦",
            "aiDifficulty" to "AIの難易度:",
            "diffEasy" to "かんたん",
            "diffMedium" to "ふつう",
            "diffHard" to "むずかしい",
            "youPlayAs" to "あなたは:",
            "whiteP1" to "白（P1）",
            "blackP2" to "黒（P2）",
            "expansions" to "拡張:",
            "expMosquito" to "🦟 蚊",
            "expLadybug" to "🐞 テントウムシ",
            "expPillbug" to "💊 ダンゴムシ",
            "startMatch" to "開始",
            "learnToPlay" to "📖 遊び方を学ぶ",
            "rulesTitle" to "Bugzの遊び方",
            "rulesGoal" to "🎯 目的: 相手の女王バチの6方向すべてを自分の駒で囲みましょう。先に囲んだ方が " +
                "勝ち。同時なら引き分けです。",
            "rulesCoreTitle" to "📜 基本ルール",
            "rulesCoreBody" to "• 毎ターン1枚配置するか、自分の駒を1つ動かします。\n" +
                "• 女王バチは4手目までに配置しなければなりません。\n" +
                "• 最初の1枚はどこにでも置けます。以降は自分の駒に隣接して置きます。2枚目の配置 " +
                "以外は、相手の駒に接する配置はできません。\n" +
                "• ハイブは常に繋がっていなければなりません。盤面を分断する動きはできず、積み上げた " +
                "駒の隙間に入り込む動きも禁止です。",
            "rulesInsectsTitle" to "🦗 昆虫の動き",
            "insectQueen" to "🐝 女王バチ — 毎ターンちょうど1マス移動します。",
            "insectSpider" to "🕷️ クモ — 外周に沿ってちょうど3マス移動し、後戻りはできません。",
            "insectBeetle" to "🪲 カブトムシ — 1マス移動し、他の駒（女王バチを含む）の上に登って封鎖できます。上に乗ったカブトムシはスタックの上を移動します。",
            "insectGrasshopper" to "🦗 バッタ — 一直線に少なくとも1つの駒を飛び越え、その線上で最初の空きマスに着地します。",
            "insectAnt" to "🐜 兵隊アリ — ハイブの外周に沿って好きなだけ滑るように移動できます。",
            "insectMosquito" to "🦟 蚊 — 接触している駒の移動（またはダンゴムシの能力）をコピーします。",
            "insectLadybug" to "🐞 テントウムシ — ハイブの上をちょうど2マス移動し、その後1マス盤面に降ります（空きマスに着地可）。",
            "insectPillbug" to "🪳 ダンゴムシ — 女王バチと同じく1マス動けるか、隣接する積み重なっていない駒（敵味方どちらでも）を持ち上げ、その隣接する任意の空きマスへ置けます。動かされた駒はスタンし、相手の次のターンは動けません。",
            "overDrawTitle" to "引き分け！",
            "overWinTitle" to "プレイヤー{n}の勝利！",
            "overDrawBody" to "両方の女王が囲まれました。引き分け！",
            "overWinBody" to "プレイヤー{n}の女王が囲まれました。お見事！",
            "rematch" to "再戦",
            "newSetup" to "新しい設定",
            "resumeTitle" to "前回の対戦を続けますか？",
            "resumeBody" to "進行中の保存データがあります。",
            "resumeBtn" to "続ける",
            "newGameBtn" to "新しいゲーム",
            "placedLog" to "{bug} を ({q}, {r}) に配置",
            "movedLog" to "{bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",
            "pillbugLog" to "ダンゴムシが {bug} を ({q1}, {r1}) から ({q2}, {r2}) へ移動",
            "tutorialMode" to "🎓 チュートリアル",
            "tutorialWelcome" to "ようこそ！このチュートリアルでBugzの遊び方を学びましょう。配置、移動、勝利条件を説明します。次へをタップ！",
            "tutorialNext" to "次へ",
            "tutorialSkip" to "チュートリアルをスキップ",
            "tutorialStepLabel" to "ステップ{n}:",
            "tutorialPlaceQueen" to "下のリザーブから🐝女王バチをタップし、盤面のマスをタップして配置しましょう。",
            "tutorialOppQueen" to "⏳ 相手が女王バチを配置中…",
            "tutorialPlaceSpider" to "リザーブから🕷️クモをタップし、ハイライトされたマスに配置しましょう。クモは外周に沿って3マス移動します。",
            "tutorialOppSpider" to "⏳ 相手がクモを配置中…",
            "tutorialPlaceBeetle" to "リザーブから🪲カブトムシをタップし、ハイライトされたマスに配置しましょう。カブトムシは1マス移動し、他の駒の上に登れます！",
            "tutorialOppBeetle" to "⏳ 相手がカブトムシを配置中…",
            "tutorialPlaceGrasshopper" to "リザーブから🦗バッタをタップし、ハイライトされたマスに配置しましょう。バッタは一直線に駒を飛び越えます！",
            "tutorialOppGrasshopper" to "⏳ 相手がバッタを配置中…",
            "tutorialMoveExample" to "移動してみましょう！盤面の自分の駒をタップし、ハイライトされたマスをタップして移動します。",
            "tutorialComplete" to "🎉 チュートリアル完了！基本を学びました — 配置、移動、目的。もっと戦略を見つけるために遊び続けましょう。楽しんで！",
            "tutorialGotIt" to "わかりました — 新規ゲーム",
            "bugQueen" to "女王バチ",
            "bugSpider" to "クモ",
            "bugBeetle" to "カブトムシ",
            "bugGrasshopper" to "バッタ",
            "bugAnt" to "兵隊アリ",
            "bugMosquito" to "蚊",
            "bugLadybug" to "テントウムシ",
            "bugPillbug" to "ダンゴムシ",
            "gotIt" to "OK",

        ),
        Lang.ZH to mapOf(
            "appTitle" to "🐝 Bugz Strategy",
            "topGameOver" to "游戏结束",
            "topAiThinking" to "AI思考中…",
            "topVsAi" to "对战AI（{diff}）",
            "topPassPlay" to "轮流游玩",
            "winnerLabel" to "获胜者：{color}",
            "turnLabel" to "回合：P{player}",
            "white" to "白",
            "black" to "黑",
            "draw" to "平局",
            "settings" to "设置",
            "passLog" to "玩家{n}没有合法走法，被迫跳过回合。",
            "aiPassLog" to "AI（玩家{n}）被迫跳过回合。",
            "aiNoMovesToast" to "AI没有有效走法。跳过回合。",
            "undoToast" to "已撤销一步。",
            "queenDueToast" to "本回合必须放置蜂后（第4回合规则）。",
            "moveLog" to "走法记录",
            "pLabel" to "P{player}",
            "setupTitle" to "🐝 新的Bugz对局",
            "selectMode" to "选择游戏模式：",
            "modePassPlay" to "轮流游玩",
            "modeVsAi" to "对战AI引擎",
            "aiDifficulty" to "AI难度：",
            "diffEasy" to "简单",
            "diffMedium" to "中等",
            "diffHard" to "困难",
            "youPlayAs" to "你执：",
            "whiteP1" to "白（P1）",
            "blackP2" to "黑（P2）",
            "expansions" to "扩展：",
            "expMosquito" to "🦟 蚊子",
            "expLadybug" to "🐞 瓢虫",
            "expPillbug" to "💊 潮虫",
            "startMatch" to "开始对局",
            "learnToPlay" to "📖 学习玩法",
            "rulesTitle" to "如何玩Bugz",
            "rulesGoal" to "🎯 目标：用棋子将对手的蜂后六面围住。先完成者获胜；同时围住则为平局。",
            "rulesCoreTitle" to "📜 基本规则",
            "rulesCoreBody" to "• 每回合放置一枚棋子，或移动自己的一枚棋子。\n" +
                "• 蜂后必须在你的第4回合之前上场。\n" +
                "• 第一枚棋子可放在任意位置；之后的棋子必须与自己的棋子相邻。除第二次放置外，棋子 " +
                "不能与对手棋子接触。\n" +
                "• 蜂群必须始终保持连通。不得移动会分裂蜂群的棋子，也不得将棋子挤入过窄的缝隙。",
            "rulesInsectsTitle" to "🦗 昆虫的走法",
            "insectQueen" to "🐝 蜂后 — 每回合恰好移动1格。",
            "insectSpider" to "🕷️ 蜘蛛 — 沿外围恰好爬行3格，不得折返。",
            "insectBeetle" to "🪲 甲虫 — 移动1格，可爬上其他棋子（包括蜂后）将其封锁；上方的甲虫可沿堆叠移动。",
            "insectGrasshopper" to "🦗 蚂蚱 — 沿直线跳过至少一枚棋子，落在该线路上第一个空格。",
            "insectAnt" to "🐜 兵蚁 — 可沿蜂群外部滑动任意数量的格子。",
            "insectMosquito" to "🦟 蚊子 — 复制与之接触的任何棋子的走法（或潮虫能力）。",
            "insectLadybug" to "🐞 瓢虫 — 在蜂群上方恰好移动2格，然后向下1格落回棋盘（可落在空棋盘格上）。",
            "insectPillbug" to "🪳 潮虫 — 可像蜂后一样移动1格，或拿起一枚相邻且未堆叠的棋子（敌我均可），放到其相邻的任意空格。被移动的棋子陷入眩晕，对手下一回合不能移动。",
            "overDrawTitle" to "平局！",
            "overWinTitle" to "玩家{n}获胜！",
            "overDrawBody" to "双方蜂后都被围住。平局！",
            "overWinBody" to "玩家{n}的蜂后被围住了。打得漂亮！",
            "rematch" to "再战",
            "newSetup" to "新设置",
            "resumeTitle" to "继续上一局？",
            "resumeBody" to "你有一场已保存的进行中对局。",
            "resumeBtn" to "继续",
            "newGameBtn" to "新游戏",
            "placedLog" to "将{bug}放置在({q}, {r})",
            "movedLog" to "将{bug}从({q1}, {r1})移动到({q2}, {r2})",
            "pillbugLog" to "潮虫将{bug}从({q1}, {r1})移动到({q2}, {r2})",
            "tutorialMode" to "🎓 教程",
            "tutorialWelcome" to "欢迎！本教程将教你如何玩Bugz。你将学习放置、移动和获胜条件。点击「下一步」开始！",
            "tutorialNext" to "下一步",
            "tutorialSkip" to "跳过教程",
            "tutorialStepLabel" to "第{n}步：",
            "tutorialPlaceQueen" to "点击下方后备中的🐝蜂后，然后点击棋盘上的任意格子放置她。",
            "tutorialOppQueen" to "⏳ 对手正在放置蜂后…",
            "tutorialPlaceSpider" to "点击后备中的🕷️蜘蛛，然后点击高亮格子放置。蜘蛛沿外周恰好移动3格。",
            "tutorialOppSpider" to "⏳ 对手正在放置蜘蛛…",
            "tutorialPlaceBeetle" to "点击后备中的🪲甲虫，然后点击高亮格子放置。甲虫移动1格，还能爬到其他棋子上面！",
            "tutorialOppBeetle" to "⏳ 对手正在放置甲虫…",
            "tutorialPlaceGrasshopper" to "点击后备中的🦗蚱蜢，然后点击高亮格子放置。蚱蜢沿直线跳过棋子！",
            "tutorialOppGrasshopper" to "⏳ 对手正在放置蚱蜢…",
            "tutorialMoveExample" to "现在试试移动！点击棋盘上你的棋子，然后点击高亮格子来移动它。",
            "tutorialComplete" to "🎉 教程完成！你已经学会了基本操作——放置、移动和目标。继续游玩以探索更多策略。祝你玩得开心！",
            "tutorialGotIt" to "知道了 — 新游戏",
            "bugQueen" to "蜂后",
            "bugSpider" to "蜘蛛",
            "bugBeetle" to "甲虫",
            "bugGrasshopper" to "蚱蜢",
            "bugAnt" to "兵蚁",
            "bugMosquito" to "蚊子",
            "bugLadybug" to "瓢虫",
            "bugPillbug" to "潮虫",
            "gotIt" to "知道了",

        ),
    )

    private const val PREFS_NAME = "bugz_strategy_prefs"
    private const val LANG_KEY = "lang_v1"

    private val _langState = MutableStateFlow(Lang.EN)
    val langState: StateFlow<Lang> = _langState

    var lang: Lang
        get() = _langState.value
        set(value) {
            _langState.value = value
        }

    fun tr(key: String): String {
        val table = strings[lang] ?: strings.getValue(Lang.EN)
        return table[key] ?: strings.getValue(Lang.EN)[key] ?: key
    }

    fun tr(key: String, vararg args: Pair<String, Any>): String {
        var text = tr(key)
        for ((k, v) in args) {
            text = text.replace("{$k}", v.toString())
        }
        return text
    }

    /** Load saved language from SharedPreferences, or detect device locale. */
    fun initLang(context: Context) {
        val prefs = context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
        val saved = prefs.getString(LANG_KEY, null)
        lang = if (saved != null) {
            try {
                Lang.valueOf(saved)
            } catch (_: Exception) {
                detectDeviceLang(context)
            }
        } else {
            detectDeviceLang(context)
        }
    }

    /** Persist current language choice. */
    fun saveLang(context: Context) {
        context.getSharedPreferences(PREFS_NAME, Context.MODE_PRIVATE)
            .edit().putString(LANG_KEY, lang.name).apply()
    }

    /** Map Android device locale to the nearest supported Lang, defaulting to EN. */
    @Suppress("NewApi")
    private fun detectDeviceLang(context: Context): Lang {
        val locale = context.resources.configuration.locales[0]
        val code = locale.language.lowercase()
        return when (code) {
            "es" -> Lang.ES
            "pt" -> Lang.PT
            "fr" -> Lang.FR
            "de" -> Lang.DE
            "ja" -> Lang.JA
            "zh" -> Lang.ZH
            else -> Lang.EN
        }
    }
}

// ============================================================================
// 1. DATA MODELS & DEFINITIONS
// ============================================================================

enum class Player { ONE, TWO }

enum class BugType(
    val title: String,
    val emoji: String,
    val defaultCount: Int,
    val isExpansion: Boolean = false,
) {
    QUEEN("Queen Bee", "🐝", 1),
    SPIDER("Spider", "🕷️", 2),
    BEETLE("Beetle", "🪲", 2),
    GRASSHOPPER("Grasshopper", "🦗", 3),
    SOLDIER_ANT("Soldier Ant", "🐜", 3),
    MOSQUITO("Mosquito", "🦟", 1, true),
    LADYBUG("Ladybug", "🐞", 1, true),
    PILLBUG("Pillbug", "🪳", 1, true),
    ;

    /** I18n key for this bug's translatable name. */
    val nameKey: String
        get() = when (this) {
            QUEEN -> "bugQueen"
            SPIDER -> "bugSpider"
            BEETLE -> "bugBeetle"
            GRASSHOPPER -> "bugGrasshopper"
            SOLDIER_ANT -> "bugAnt"
            MOSQUITO -> "bugMosquito"
            LADYBUG -> "bugLadybug"
            PILLBUG -> "bugPillbug"
        }
}

data class Piece(val id: String, val type: BugType, val player: Player)

data class AxialHex(val q: Int, val r: Int) {
    fun key() = "$q,$r"
    fun getNeighbors(): List<AxialHex> = listOf(
        AxialHex(q + 1, r),
        AxialHex(q + 1, r - 1),
        AxialHex(q, r - 1),
        AxialHex(q - 1, r),
        AxialHex(q - 1, r + 1),
        AxialHex(q, r + 1),
    )
}

enum class GameMode { PASS_AND_PLAY, AI }
enum class AIDifficulty { EASY, MEDIUM, HARD }

enum class TutorialStep(val instructionKey: String) {
    WELCOME("tutorialWelcome"),
    PLACE_QUEEN("tutorialPlaceQueen"),
    OPP_QUEEN("tutorialOppQueen"),
    PLACE_SPIDER("tutorialPlaceSpider"),
    OPP_SPIDER("tutorialOppSpider"),
    PLACE_BEETLE("tutorialPlaceBeetle"),
    OPP_BEETLE("tutorialOppBeetle"),
    PLACE_GRASSHOPPER("tutorialPlaceGrasshopper"),
    OPP_GRASSHOPPER("tutorialOppGrasshopper"),
    MOVE_EXAMPLE("tutorialMoveExample"),
    COMPLETE("tutorialComplete"),
}

data class ExpansionsConfig(
    val mosquito: Boolean = true,
    val ladybug: Boolean = true,
    val pillbug: Boolean = true,
)

data class GameSettings(
    val mode: GameMode = GameMode.AI,
    val aiDifficulty: AIDifficulty = AIDifficulty.MEDIUM,
    val expansions: ExpansionsConfig = ExpansionsConfig(),
    val humanColor: Player = Player.ONE,
    val tutorialMode: Boolean = false,
)

data class MoveLogEntry(val turn: Int, val player: Player, val text: String)

data class MoveAction(
    val type: ActionType,
    val pieceId: String,
    val bugType: BugType,
    val player: Player,
    val fromHex: AxialHex? = null,
    val toHex: AxialHex,
    val pillbugTargetHex: AxialHex? = null,
) {
    enum class ActionType { PLACE, MOVE, PILLBUG_SPECIAL }
}

data class PillbugTargetOption(
    val targetHex: AxialHex,
    val piece: Piece,
    val destinationHexes: List<AxialHex>,
)

data class GameStatus(
    val isGameOver: Boolean,
    val winner: Player?,
    val isDraw: Boolean,
    val p1QueenSurroundedCount: Int,
    val p2QueenSurroundedCount: Int,
)

// ============================================================================
// 2. CORE GAME ENGINE & HIVE RULES
// ============================================================================

fun parseKey(key: String): AxialHex {
    val parts = key.split(",").map { it.toInt() }
    return AxialHex(parts[0], parts[1])
}

fun cloneBoard(board: Map<String, List<Piece>>): MutableMap<String, MutableList<Piece>> {
    return board.mapValues { it.value.toMutableList() }.toMutableMap()
}

fun getTopPiece(board: Map<String, List<Piece>>, hex: AxialHex): Piece? {
    val stack = board[hex.key()]
    return if (stack.isNullOrEmpty()) null else stack.last()
}

fun getStackHeight(board: Map<String, List<Piece>>, hex: AxialHex): Int {
    return board[hex.key()]?.size ?: 0
}

fun isOccupied(board: Map<String, List<Piece>>, hex: AxialHex): Boolean {
    return getStackHeight(board, hex) > 0
}

fun getAllOccupiedHexes(board: Map<String, List<Piece>>): List<AxialHex> {
    return board.entries.filter { it.value.isNotEmpty() }.map { parseKey(it.key) }
}

fun isQueenPlaced(board: Map<String, List<Piece>>, player: Player): Boolean {
    return board.values.flatten().any { it.player == player && it.type == BugType.QUEEN }
}

fun getQueenHex(board: Map<String, List<Piece>>, player: Player): AxialHex? {
    for ((key, stack) in board) {
        for (p in stack) {
            if (p.player == player && p.type == BugType.QUEEN) {
                return parseKey(key)
            }
        }
    }
    return null
}

fun isSwarmConnected(board: Map<String, List<Piece>>): Boolean {
    val occupied = getAllOccupiedHexes(board)
    if (occupied.size <= 1) return true

    val visited = mutableSetOf<String>()
    val queue = mutableListOf(occupied.first())
    visited.add(occupied.first().key())

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (neighbor in current.getNeighbors()) {
            val nKey = neighbor.key()
            if (isOccupied(board, neighbor) && !visited.contains(nKey)) {
                visited.add(nKey)
                queue.add(neighbor)
            }
        }
    }
    return visited.size == occupied.size
}

fun canRemovePieceWithoutBreakingSwarm(board: Map<String, List<Piece>>, fromHex: AxialHex): Boolean {
    val stack = board[fromHex.key()] ?: return false
    if (stack.size > 1) return true

    val copyBoard = cloneBoard(board)
    copyBoard.remove(fromHex.key())
    return isSwarmConnected(copyBoard)
}

fun getCommonNeighbors(a: AxialHex, b: AxialHex): List<AxialHex> {
    val aSet = a.getNeighbors().toSet()
    val bSet = b.getNeighbors().toSet()
    return aSet.intersect(bSet).toList()
}

fun canSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex,
    atHeight: Int = 0,
): Boolean {
    val common = getCommonNeighbors(fromHex, toHex)
    if (common.size != 2) return false

    val h1 = getStackHeight(board, common[0])
    val h2 = getStackHeight(board, common[1])

    val maxAllowedHeight = maxOf(atHeight, getStackHeight(board, fromHex) - 1, getStackHeight(board, toHex))

    if (h1 > maxAllowedHeight && h2 > maxAllowedHeight) {
        return false
    }
    return true
}

fun isValidGroundSlide(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    toHex: AxialHex,
): Boolean {
    if (isOccupied(board, toHex)) return false
    if (!canSlide(board, fromHex, toHex, 0)) return false

    val testBoard = cloneBoard(board)
    val stack = testBoard[fromHex.key()]
    if (stack != null) {
        if (stack.size == 1) {
            testBoard.remove(fromHex.key())
        } else {
            stack.removeAt(stack.size - 1)
        }
    }

    val touchesSwarm = toHex.getNeighbors().any { isOccupied(testBoard, it) }
    return touchesSwarm
}

fun getValidPlacements(
    board: Map<String, List<Piece>>,
    player: Player,
    turnCountP: Int,
): List<AxialHex> {
    val occupied = getAllOccupiedHexes(board)

    if (occupied.isEmpty()) {
        return listOf(AxialHex(0, 0))
    }

    if (occupied.size == 1) {
        return occupied[0].getNeighbors()
    }

    val candidateKeys = mutableSetOf<String>()
    val validPlacements = mutableListOf<AxialHex>()

    for (hex in occupied) {
        for (n in hex.getNeighbors()) {
            if (!isOccupied(board, n)) {
                candidateKeys.add(n.key())
            }
        }
    }

    for (key in candidateKeys) {
        val candidate = parseKey(key)
        val neighbors = candidate.getNeighbors()

        var touchesFriendly = false
        var touchesEnemy = false

        for (n in neighbors) {
            val topPiece = getTopPiece(board, n)
            if (topPiece != null) {
                if (topPiece.player == player) {
                    touchesFriendly = true
                } else {
                    touchesEnemy = true
                }
            }
        }

        if (touchesFriendly && !touchesEnemy) {
            validPlacements.add(candidate)
        }
    }

    return validPlacements
}

fun getEffectiveBugTypes(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    piece: Piece,
): List<BugType> {
    if (piece.type != BugType.MOSQUITO) {
        return listOf(piece.type)
    }

    val stackHeight = getStackHeight(board, fromHex)
    if (stackHeight > 1) {
        return listOf(BugType.BEETLE)
    }

    val copiedTypes = mutableSetOf<BugType>()
    for (n in fromHex.getNeighbors()) {
        val adjTop = getTopPiece(board, n)
        if (adjTop != null && adjTop.type != BugType.MOSQUITO) {
            copiedTypes.add(adjTop.type)
        }
    }

    return copiedTypes.toList()
}

fun getQueenMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return fromHex.getNeighbors().filter { isValidGroundSlide(board, fromHex, it) }
}

fun getSpiderMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableListOf<AxialHex>()

    fun spiderDFS(current: AxialHex, stepCount: Int, visitedKeys: Set<String>) {
        if (stepCount == 3) {
            results.add(current)
            return
        }
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visitedKeys.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    val nextVisited = visitedKeys.toMutableSet()
                    nextVisited.add(nextKey)
                    spiderDFS(next, stepCount + 1, nextVisited)
                }
            }
        }
    }

    val startVisited = setOf(fromHex.key())
    spiderDFS(fromHex, 0, startVisited)

    val uniqueKeys = mutableSetOf<String>()
    val uniqueResults = mutableListOf<AxialHex>()
    for (hex in results) {
        if (uniqueKeys.add(hex.key())) {
            uniqueResults.add(hex)
        }
    }
    return uniqueResults
}

fun getBeetleMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()
    val currentHeight = getStackHeight(board, fromHex)

    for (to in fromHex.getNeighbors()) {
        val targetHeight = getStackHeight(board, to)

        if (targetHeight >= 1 || currentHeight > 1) {
            val clearanceHeight = maxOf(currentHeight - 1, targetHeight)
            if (canSlide(board, fromHex, to, clearanceHeight)) {
                moves.add(to)
            }
        } else {
            if (isValidGroundSlide(board, fromHex, to)) {
                moves.add(to)
            }
        }
    }
    return moves
}

fun getGrasshopperMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val moves = mutableListOf<AxialHex>()

    for (dirIndex in 0 until 6) {
        var current = fromHex.getNeighbors()[dirIndex]
        var countOver = 0

        while (isOccupied(board, current)) {
            countOver++
            current = current.getNeighbors()[dirIndex]
        }

        if (countOver > 0) {
            moves.add(current)
        }
    }
    return moves
}

fun getSoldierAntMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val visited = mutableSetOf(fromHex.key())
    val queue = mutableListOf(fromHex)

    while (queue.isNotEmpty()) {
        val current = queue.removeAt(0)
        for (next in current.getNeighbors()) {
            val nextKey = next.key()
            if (!visited.contains(nextKey)) {
                if (isValidGroundSlide(board, current, next)) {
                    visited.add(nextKey)
                    queue.add(next)
                }
            }
        }
    }

    visited.remove(fromHex.key())

    return visited.map { parseKey(it) }
}

fun getLadybugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    val results = mutableSetOf<String>()

    val step1Candidates = fromHex.getNeighbors().filter { n ->
        isOccupied(board, n) && canSlide(board, fromHex, n, 0)
    }

    for (s1 in step1Candidates) {
        val step2Candidates = s1.getNeighbors().filter { s2 ->
            s2.key() != fromHex.key() && isOccupied(board, s2) && canSlide(board, s1, s2, 1)
        }

        for (s2 in step2Candidates) {
            val step3Candidates = s2.getNeighbors().filter { s3 ->
                s3.key() != s1.key() && !isOccupied(board, s3) && canSlide(board, s2, s3, 0)
            }

            for (s3 in step3Candidates) {
                results.add(s3.key())
            }
        }
    }

    return results.map { parseKey(it) }
}

fun getPillbugMoves(board: Map<String, List<Piece>>, fromHex: AxialHex): List<AxialHex> {
    return getQueenMoves(board, fromHex)
}

fun getMovesForBugType(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    bugType: BugType,
): List<AxialHex> {
    return when (bugType) {
        BugType.QUEEN -> getQueenMoves(board, fromHex)
        BugType.SPIDER -> getSpiderMoves(board, fromHex)
        BugType.BEETLE -> getBeetleMoves(board, fromHex)
        BugType.GRASSHOPPER -> getGrasshopperMoves(board, fromHex)
        BugType.SOLDIER_ANT -> getSoldierAntMoves(board, fromHex)
        BugType.LADYBUG -> getLadybugMoves(board, fromHex)
        BugType.PILLBUG -> getPillbugMoves(board, fromHex)
        BugType.MOSQUITO -> emptyList()
    }
}

fun getValidMovesForPiece(
    board: Map<String, List<Piece>>,
    fromHex: AxialHex,
    player: Player,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig,
): List<AxialHex> {
    if (!isQueenPlaced(board, player)) {
        return emptyList()
    }

    val stack = board[fromHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()
    val topPiece = stack.last()
    if (topPiece.player != player) return emptyList()

    // A piece moved by a Pillbug special action is stunned and may not move
    // on the opponent's immediately following turn.
    if (topPiece.id == lastMovedPieceId) return emptyList()

    if (!canRemovePieceWithoutBreakingSwarm(board, fromHex)) {
        return emptyList()
    }

    val effectiveBugTypes = getEffectiveBugTypes(board, fromHex, topPiece)
    val validDestinations = mutableSetOf<String>()

    for (bugType in effectiveBugTypes) {
        val dests = getMovesForBugType(board, fromHex, bugType)
        dests.forEach { validDestinations.add(it.key()) }
    }

    return validDestinations.map { parseKey(it) }
}

fun getPillbugSpecialTargets(
    board: Map<String, List<Piece>>,
    pillbugHex: AxialHex,
    player: Player,
    lastMovedPieceId: String?,
): List<PillbugTargetOption> {
    if (!isQueenPlaced(board, player)) return emptyList()

    val stack = board[pillbugHex.key()]
    if (stack.isNullOrEmpty()) return emptyList()

    // Official rule: the Pillbug cannot move a piece if the Pillbug itself was
    // moved in the most recent turn.
    val pillbugTop = stack.last()
    if (pillbugTop.id == lastMovedPieceId) return emptyList()

    val emptyAdjacentHexes = pillbugHex.getNeighbors().filter { !isOccupied(board, it) }
    if (emptyAdjacentHexes.isEmpty()) return emptyList()

    val options = mutableListOf<PillbugTargetOption>()

    for (adjHex in pillbugHex.getNeighbors()) {
        if (isOccupied(board, adjHex)) {
            val targetStack = board[adjHex.key()]!!
            if (targetStack.size == 1) {
                val targetPiece = targetStack[0]

                if (targetPiece.id == lastMovedPieceId) continue
                if (!canRemovePieceWithoutBreakingSwarm(board, adjHex)) continue

                // Official "Beetle gate" rule: the piece is lifted over the
                // Pillbug to reach its destination; a gate hex (a common
                // neighbor of the origin and destination other than the
                // Pillbug's own hex) with a stack height of 2+ blocks passage.
                val reachableDestinations = emptyAdjacentHexes.filter { destHex ->
                    val gateHexes = getCommonNeighbors(adjHex, destHex).filter { it != pillbugHex }
                    !gateHexes.any { getStackHeight(board, it) >= 2 }
                }

                if (reachableDestinations.isNotEmpty()) {
                    options.add(
                        PillbugTargetOption(
                            targetHex = adjHex,
                            piece = targetPiece,
                            destinationHexes = reachableDestinations,
                        ),
                    )
                }
            }
        }
    }

    return options
}

fun getPlayerAllLegalActions(
    board: Map<String, List<Piece>>,
    player: Player,
    reserve: List<Piece>,
    turnCountP: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig,
): List<MoveAction> {
    val actions = mutableListOf<MoveAction>()
    val queenPlaced = isQueenPlaced(board, player)

    val validPlacements = getValidPlacements(board, player, turnCountP)

    if (turnCountP >= 4 && !queenPlaced) {
        val queenPiece = reserve.firstOrNull { it.type == BugType.QUEEN }
        if (queenPiece != null) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = queenPiece.id,
                        bugType = BugType.QUEEN,
                        player = player,
                        toHex = hex,
                    ),
                )
            }
        }
        return actions
    }

    if (validPlacements.isNotEmpty() && reserve.isNotEmpty()) {
        val availableBugTypes = mutableSetOf<BugType>()
        val typeToPiece = mutableMapOf<BugType, Piece>()

        for (p in reserve) {
            if (availableBugTypes.add(p.type)) {
                typeToPiece[p.type] = p
            }
        }

        for ((bugType, piece) in typeToPiece) {
            for (hex in validPlacements) {
                actions.add(
                    MoveAction(
                        type = MoveAction.ActionType.PLACE,
                        pieceId = piece.id,
                        bugType = bugType,
                        player = player,
                        toHex = hex,
                    ),
                )
            }
        }
    }

    if (queenPlaced) {
        val occupied = getAllOccupiedHexes(board)

        for (hex in occupied) {
            val topPiece = getTopPiece(board, hex)
            if (topPiece != null && topPiece.player == player) {
                val moves = getValidMovesForPiece(
                    board,
                    hex,
                    player,
                    turnCountP,
                    lastMovedPieceId,
                    expansions,
                )

                for (dest in moves) {
                    actions.add(
                        MoveAction(
                            type = MoveAction.ActionType.MOVE,
                            pieceId = topPiece.id,
                            bugType = topPiece.type,
                            player = player,
                            fromHex = hex,
                            toHex = dest,
                        ),
                    )
                }

                val effectiveTypes = getEffectiveBugTypes(board, hex, topPiece)
                if (effectiveTypes.contains(BugType.PILLBUG)) {
                    val pbTargets = getPillbugSpecialTargets(board, hex, player, lastMovedPieceId)
                    for (opt in pbTargets) {
                        for (destHex in opt.destinationHexes) {
                            actions.add(
                                MoveAction(
                                    type = MoveAction.ActionType.PILLBUG_SPECIAL,
                                    pieceId = topPiece.id,
                                    bugType = topPiece.type,
                                    player = player,
                                    fromHex = hex,
                                    pillbugTargetHex = opt.targetHex,
                                    toHex = destHex,
                                ),
                            )
                        }
                    }
                }
            }
        }
    }

    return actions
}

fun checkGameStatus(board: Map<String, List<Piece>>): GameStatus {
    val p1QueenHex = getQueenHex(board, Player.ONE)
    val p2QueenHex = getQueenHex(board, Player.TWO)

    var p1Surrounded = 0
    var p2Surrounded = 0

    if (p1QueenHex != null) {
        p1Surrounded = p1QueenHex.getNeighbors().count { isOccupied(board, it) }
    }
    if (p2QueenHex != null) {
        p2Surrounded = p2QueenHex.getNeighbors().count { isOccupied(board, it) }
    }

    val p1IsSurrounded = p1Surrounded == 6
    val p2IsSurrounded = p2Surrounded == 6

    return when {
        p1IsSurrounded && p2IsSurrounded -> GameStatus(true, null, true, p1Surrounded, p2Surrounded)
        p1IsSurrounded -> GameStatus(true, Player.TWO, false, p1Surrounded, p2Surrounded)
        p2IsSurrounded -> GameStatus(true, Player.ONE, false, p1Surrounded, p2Surrounded)
        else -> GameStatus(false, null, false, p1Surrounded, p2Surrounded)
    }
}

class BugzEngine {
    val board = mutableMapOf<String, MutableList<Piece>>()
    val p1Reserve = mutableListOf<Piece>()
    val p2Reserve = mutableListOf<Piece>()
    var currentPlayer = Player.ONE
    var turnCountP1 = 1
    var turnCountP2 = 1
    var lastMovedPieceId: String? = null
    val history = mutableListOf<MoveLogEntry>()
    var expansions = ExpansionsConfig()

    data class EngineSnapshot(
        val board: Map<String, List<Piece>>,
        val p1Reserve: List<Piece>,
        val p2Reserve: List<Piece>,
        val currentPlayer: Player,
        val turnCountP1: Int,
        val turnCountP2: Int,
        val lastMovedPieceId: String?,
        val history: List<MoveLogEntry>,
    )

    fun snapshot(): EngineSnapshot {
        return EngineSnapshot(
            board = board.mapValues { it.value.toList() }.toMap(),
            p1Reserve = p1Reserve.toList(),
            p2Reserve = p2Reserve.toList(),
            currentPlayer = currentPlayer,
            turnCountP1 = turnCountP1,
            turnCountP2 = turnCountP2,
            lastMovedPieceId = lastMovedPieceId,
            history = history.toList(),
        )
    }

    fun restore(snap: EngineSnapshot) {
        board.clear()
        board.putAll(snap.board.mapValues { it.value.toMutableList() })
        p1Reserve.clear()
        p1Reserve.addAll(snap.p1Reserve)
        p2Reserve.clear()
        p2Reserve.addAll(snap.p2Reserve)
        currentPlayer = snap.currentPlayer
        turnCountP1 = snap.turnCountP1
        turnCountP2 = snap.turnCountP2
        lastMovedPieceId = snap.lastMovedPieceId
        history.clear()
        history.addAll(snap.history)
    }

    fun reserveFor(p: Player): List<Piece> = if (p == Player.ONE) p1Reserve else p2Reserve

    fun turnCountFor(p: Player): Int = if (p == Player.ONE) turnCountP1 else turnCountP2

    fun initNewGame(expansions: ExpansionsConfig) {
        board.clear()
        p1Reserve.clear()
        p2Reserve.clear()
        history.clear()
        currentPlayer = Player.ONE
        turnCountP1 = 1
        turnCountP2 = 1
        lastMovedPieceId = null
        this.expansions = expansions

        fun createReserve(player: Player): List<Piece> {
            val list = mutableListOf<Piece>()
            BugType.values().forEach { bug ->
                if (!bug.isExpansion ||
                    (bug == BugType.MOSQUITO && expansions.mosquito) ||
                    (bug == BugType.LADYBUG && expansions.ladybug) ||
                    (bug == BugType.PILLBUG && expansions.pillbug)
                ) {
                    repeat(bug.defaultCount) { idx ->
                        list.add(Piece("p${if (player == Player.ONE) 1 else 2}_${bug.name}_$idx", bug, player))
                    }
                }
            }
            return list
        }

        p1Reserve.addAll(createReserve(Player.ONE))
        p2Reserve.addAll(createReserve(Player.TWO))
    }

    fun isQueenPlaced(player: Player): Boolean {
        return isQueenPlaced(board, player)
    }

    fun placementsForCurrent(): List<AxialHex> {
        return getValidPlacements(board, currentPlayer, turnCountFor(currentPlayer))
    }

    fun movesFor(hex: AxialHex): List<AxialHex> {
        return getValidMovesForPiece(
            board,
            hex,
            currentPlayer,
            turnCountFor(currentPlayer),
            lastMovedPieceId,
            expansions,
        )
    }

    fun pillbugTargets(hex: AxialHex): List<PillbugTargetOption> {
        return getPillbugSpecialTargets(board, hex, currentPlayer, lastMovedPieceId)
    }

    fun effectiveTypes(hex: AxialHex, piece: Piece): List<BugType> {
        return getEffectiveBugTypes(board, hex, piece)
    }

    fun legalActions(): List<MoveAction> {
        return getPlayerAllLegalActions(
            board,
            currentPlayer,
            reserveFor(currentPlayer),
            turnCountFor(currentPlayer),
            lastMovedPieceId,
            expansions,
        )
    }

    fun checkGameStatus(): GameStatus {
        return checkGameStatus(board)
    }

    fun executeMove(action: MoveAction) {
        var logDesc = ""
        var actuallyMovedId: String? = null

        if (action.type == MoveAction.ActionType.PLACE) {
            if (action.player == Player.ONE) {
                p1Reserve.removeAll { it.id == action.pieceId }
            } else {
                p2Reserve.removeAll { it.id == action.pieceId }
            }

            val newPiece = Piece(action.pieceId, action.bugType, action.player)
            val key = action.toHex.key()
            val stack = board.getOrPut(key) { mutableListOf() }
            stack.add(newPiece)
            actuallyMovedId = newPiece.id

            logDesc = I18n.tr(
                "placedLog",
                "bug" to I18n.tr(action.bugType.nameKey),
                "q" to action.toHex.q,
                "r" to action.toHex.r,
            )
        } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
            val fromStack = board[action.fromHex.key()] ?: return
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) board.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = I18n.tr(
                "movedLog",
                "bug" to I18n.tr(action.bugType.nameKey),
                "q1" to action.fromHex.q,
                "r1" to action.fromHex.r,
                "q2" to action.toHex.q,
                "r2" to action.toHex.r,
            )
        } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
            val targetStack = board[action.pillbugTargetHex.key()] ?: return
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) board.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = board.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
                actuallyMovedId = movedPiece.id
            }

            logDesc = I18n.tr(
                "pillbugLog",
                "bug" to (movedPiece?.type?.title ?: "piece"),
                "q1" to action.pillbugTargetHex.q,
                "r1" to action.pillbugTargetHex.r,
                "q2" to action.toHex.q,
                "r2" to action.toHex.r,
            )
        }

        // The piece that actually moved/placed is "stunned" on the opponent's next turn.
        lastMovedPieceId = actuallyMovedId ?: action.pieceId

        history.add(
            MoveLogEntry(
                turn = if (action.player == Player.ONE) turnCountP1 else turnCountP2,
                player = action.player,
                text = logDesc,
            ),
        )

        if (action.player == Player.ONE) {
            turnCountP1++
            currentPlayer = Player.TWO
        } else {
            turnCountP2++
            currentPlayer = Player.ONE
        }
    }

    fun switchTurn() {
        currentPlayer = if (currentPlayer == Player.ONE) Player.TWO else Player.ONE
    }
}

// ============================================================================
// 2.5 SAVE / RESUME (SharedPreferences + org.json)
// ============================================================================

data class GameSave(
    val settings: GameSettings,
    val snapshot: BugzEngine.EngineSnapshot,
)

private const val SAVE_PREFS = "bugz_strategy_save"
private const val SAVE_KEY = "game"

private fun pieceToJson(p: Piece): JSONObject = JSONObject().apply {
    put("id", p.id)
    put("type", p.type.name)
    put("player", p.player.name)
}

private fun pieceFromJson(o: JSONObject): Piece = Piece(
    id = o.getString("id"),
    type = BugType.valueOf(o.getString("type")),
    player = Player.valueOf(o.getString("player")),
)

private fun logToJson(e: MoveLogEntry): JSONObject = JSONObject().apply {
    put("turn", e.turn)
    put("player", e.player.name)
    put("text", e.text)
}

private fun logFromJson(o: JSONObject): MoveLogEntry = MoveLogEntry(
    turn = o.getInt("turn"),
    player = Player.valueOf(o.getString("player")),
    text = o.getString("text"),
)

private fun snapshotToJson(s: BugzEngine.EngineSnapshot): JSONObject = JSONObject().apply {
    val boardJson = JSONObject()
    s.board.forEach { (key, stack) ->
        val arr = JSONArray()
        stack.forEach { arr.put(pieceToJson(it)) }
        boardJson.put(key, arr)
    }
    put("board", boardJson)
    put("p1Reserve", JSONArray().apply { s.p1Reserve.forEach { put(pieceToJson(it)) } })
    put("p2Reserve", JSONArray().apply { s.p2Reserve.forEach { put(pieceToJson(it)) } })
    put("currentPlayer", s.currentPlayer.name)
    put("turnCountP1", s.turnCountP1)
    put("turnCountP2", s.turnCountP2)
    put("lastMovedPieceId", s.lastMovedPieceId ?: JSONObject.NULL)
    put("history", JSONArray().apply { s.history.forEach { put(logToJson(it)) } })
}

private fun snapshotFromJson(o: JSONObject): BugzEngine.EngineSnapshot {
    val boardJson = o.getJSONObject("board")
    val board = mutableMapOf<String, List<Piece>>()
    boardJson.keys().forEach { key ->
        val arr = boardJson.getJSONArray(key)
        board[key] = (0 until arr.length()).map { pieceFromJson(arr.getJSONObject(it)) }
    }
    val p1 = o.getJSONArray("p1Reserve")
    val p2 = o.getJSONArray("p2Reserve")
    val hist = o.getJSONArray("history")
    return BugzEngine.EngineSnapshot(
        board = board,
        p1Reserve = (0 until p1.length()).map { pieceFromJson(p1.getJSONObject(it)) },
        p2Reserve = (0 until p2.length()).map { pieceFromJson(p2.getJSONObject(it)) },
        currentPlayer = Player.valueOf(o.getString("currentPlayer")),
        turnCountP1 = o.getInt("turnCountP1"),
        turnCountP2 = o.getInt("turnCountP2"),
        lastMovedPieceId = if (o.isNull("lastMovedPieceId")) null else o.getString("lastMovedPieceId"),
        history = (0 until hist.length()).map { logFromJson(hist.getJSONObject(it)) },
    )
}

private fun settingsToJson(s: GameSettings): JSONObject = JSONObject().apply {
    put("mode", s.mode.name)
    put("aiDifficulty", s.aiDifficulty.name)
    put("humanColor", s.humanColor.name)
    put("tutorialMode", s.tutorialMode)
    put("expMosquito", s.expansions.mosquito)
    put("expLadybug", s.expansions.ladybug)
    put("expPillbug", s.expansions.pillbug)
}

private fun settingsFromJson(o: JSONObject): GameSettings = GameSettings(
    mode = GameMode.valueOf(o.getString("mode")),
    aiDifficulty = AIDifficulty.valueOf(o.getString("aiDifficulty")),
    humanColor = Player.valueOf(o.getString("humanColor")),
    tutorialMode = o.optBoolean("tutorialMode", false),
    expansions = ExpansionsConfig(
        mosquito = o.getBoolean("expMosquito"),
        ladybug = o.getBoolean("expLadybug"),
        pillbug = o.getBoolean("expPillbug"),
    ),
)

fun saveGame(context: Context, settings: GameSettings, engine: BugzEngine) {
    val json = JSONObject().apply {
        put("settings", settingsToJson(settings))
        put("snapshot", snapshotToJson(engine.snapshot()))
        put("savedAt", System.currentTimeMillis())
    }
    runCatching {
        context.getSharedPreferences(SAVE_PREFS, Context.MODE_PRIVATE)
            .edit().putString(SAVE_KEY, json.toString()).apply()
    }
}

fun loadGame(context: Context): GameSave? {
    val raw = runCatching {
        context.getSharedPreferences(SAVE_PREFS, Context.MODE_PRIVATE).getString(SAVE_KEY, null)
    }.getOrNull() ?: return null
    return runCatching {
        val json = JSONObject(raw)
        GameSave(
            settings = settingsFromJson(json.getJSONObject("settings")),
            snapshot = snapshotFromJson(json.getJSONObject("snapshot")),
        )
    }.getOrNull()
}

fun clearSave(context: Context) {
    runCatching {
        context.getSharedPreferences(SAVE_PREFS, Context.MODE_PRIVATE).edit().remove(SAVE_KEY).apply()
    }
}

// ============================================================================
// 3. AI ENGINE (Easy / Medium / Hard)
// ============================================================================

fun computeAIMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    difficulty: AIDifficulty,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig,
): MoveAction? {
    val legalActions = getPlayerAllLegalActions(
        board,
        aiPlayer,
        aiReserve,
        turnCountAI,
        lastMovedPieceId,
        expansions,
    )

    if (legalActions.isEmpty()) return null

    return when (difficulty) {
        AIDifficulty.EASY -> computeEasyMove(board, aiPlayer, legalActions, turnCountAI)
        AIDifficulty.MEDIUM -> computeMediumMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions,
        )
        AIDifficulty.HARD -> computeHardMinimaxMove(
            board, aiPlayer, aiReserve, humanReserve, turnCountAI, turnCountHuman,
            legalActions, lastMovedPieceId, expansions,
        )
    }
}

fun computeEasyMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    legalActions: List<MoveAction>,
    turnCountAI: Int,
): MoveAction {
    // Play the queen when it is due (by the 4th turn) if the AI forgot to place it earlier.
    if (!isQueenPlaced(board, aiPlayer) && turnCountAI >= 3) {
        val queenActions = legalActions.filter { it.bugType == BugType.QUEEN }
        if (queenActions.isNotEmpty()) {
            return queenActions[Math.floor(Math.random() * queenActions.size).toInt()]
        }
    }

    return legalActions[Math.floor(Math.random() * legalActions.size).toInt()]
}

fun computeMediumMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig,
): MoveAction {
    var bestScore = -1e9
    var bestActions = mutableListOf<MoveAction>()

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board,
            action,
            aiPlayer,
            aiReserve,
            humanReserve,
        )

        val score = evaluateBoard(
            nextBoard,
            aiPlayer,
            nextAIReserve,
            nextHumanReserve,
            turnCountAI,
            turnCountHuman,
            expansions,
        )

        if (score > bestScore + 1e-9) {
            bestScore = score
            bestActions = mutableListOf(action)
        } else if (kotlin.math.abs(score - bestScore) <= 1e-9) {
            bestActions.add(action)
        }
    }

    return bestActions[Math.floor(Math.random() * bestActions.size).toInt()]
}

fun computeHardMinimaxMove(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnCountAI: Int,
    turnCountHuman: Int,
    legalActions: List<MoveAction>,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig,
): MoveAction {
    val depth = 2
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    var alpha = -1e9
    var beta = 1e9
    var bestScore = -1e9
    var bestAction = legalActions[0]

    for (action in legalActions) {
        val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
            board,
            action,
            aiPlayer,
            aiReserve,
            humanReserve,
        )

        val status = checkGameStatus(nextBoard)
        if (status.isGameOver && status.winner == aiPlayer) {
            return action
        }

        val value = minimax(
            nextBoard,
            depth - 1,
            alpha,
            beta,
            false,
            aiPlayer,
            humanPlayer,
            nextAIReserve,
            nextHumanReserve,
            turnCountAI + 1,
            turnCountHuman,
            actuallyMovedPieceId(board, action),
            expansions,
        )

        if (value > bestScore) {
            bestScore = value
            bestAction = action
        }
        alpha = maxOf(alpha, bestScore)
    }

    return bestAction
}

fun minimax(
    board: Map<String, List<Piece>>,
    depth: Int,
    alpha: Double,
    beta: Double,
    isMaximizing: Boolean,
    aiPlayer: Player,
    humanPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    lastMovedPieceId: String?,
    expansions: ExpansionsConfig,
): Double {
    var alpha = alpha
    var beta = beta

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    if (depth == 0) {
        return evaluateBoard(board, aiPlayer, aiReserve, humanReserve, turnAI, turnHuman, expansions)
    }

    val currentPlayer = if (isMaximizing) aiPlayer else humanPlayer
    val currentReserve = if (isMaximizing) aiReserve else humanReserve
    val turnCount = if (isMaximizing) turnAI else turnHuman

    val legalActions = getPlayerAllLegalActions(
        board,
        currentPlayer,
        currentReserve,
        turnCount,
        lastMovedPieceId,
        expansions,
    )

    if (legalActions.isEmpty()) {
        return minimax(
            board, depth - 1, alpha, beta, !isMaximizing,
            aiPlayer, humanPlayer, aiReserve, humanReserve,
            if (isMaximizing) turnAI + 1 else turnAI,
            if (isMaximizing) turnHuman else turnHuman + 1,
            lastMovedPieceId, expansions,
        )
    }

    if (isMaximizing) {
        var maxEval = -1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board,
                action,
                aiPlayer,
                aiReserve,
                humanReserve,
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, false,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI + 1, turnHuman, actuallyMovedPieceId(board, action), expansions,
            )

            maxEval = maxOf(maxEval, evalValue)
            alpha = maxOf(alpha, evalValue)
            if (beta <= alpha) break
        }
        return maxEval
    } else {
        var minEval = 1e9
        for (action in legalActions) {
            val (nextBoard, nextAIReserve, nextHumanReserve) = simulateAction(
                board,
                action,
                humanPlayer,
                aiReserve,
                humanReserve,
            )

            val evalValue = minimax(
                nextBoard, depth - 1, alpha, beta, true,
                aiPlayer, humanPlayer, nextAIReserve, nextHumanReserve,
                turnAI, turnHuman + 1, actuallyMovedPieceId(board, action), expansions,
            )

            minEval = minOf(minEval, evalValue)
            beta = minOf(beta, evalValue)
            if (beta <= alpha) break
        }
        return minEval
    }
}

fun evaluateBoard(
    board: Map<String, List<Piece>>,
    aiPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
    turnAI: Int,
    turnHuman: Int,
    expansions: ExpansionsConfig,
): Double {
    val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE

    val status = checkGameStatus(board)
    if (status.isGameOver) {
        return when {
            status.winner == aiPlayer -> 10000.0
            status.winner == humanPlayer -> -10000.0
            else -> 0.0
        }
    }

    val aiQueenHex = getQueenHex(board, aiPlayer)
    val humanQueenHex = getQueenHex(board, humanPlayer)

    var score = 0.0

    // Attack: surround the human queen.
    if (humanQueenHex != null) {
        val neighbors = humanQueenHex.getNeighbors()
        val aiAdjacent = neighbors.count { getTopPiece(board, it)?.player == aiPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        score += aiAdjacent * 150
        score += (anyOccupied - aiAdjacent) * 40
        if (anyOccupied == 5) score += 300
    } else {
        // Slight pressure to get the human to place their queen, then it becomes targetable.
        score += if (turnHuman >= 3) 30 else 10
    }

    // Defense: protect the AI queen. Only ENEMY pieces adjacent are a threat;
    // the AI's own surrounding pieces are a defensive ring (mild bonus).
    if (aiQueenHex != null) {
        val neighbors = aiQueenHex.getNeighbors()
        val enemyAdjacent = neighbors.count { getTopPiece(board, it)?.player == humanPlayer }
        val anyOccupied = neighbors.count { isOccupied(board, it) }
        val ownAdjacent = anyOccupied - enemyAdjacent
        score -= enemyAdjacent * 210
        if (anyOccupied == 5) score -= 400
        score += ownAdjacent * 15
    } else {
        // Mild timing pressure so the AI places its queen around its 3rd turn.
        score -= if (turnAI >= 3) 60 else 15
    }

    val occupiedHexes = getAllOccupiedHexes(board)
    for (hex in occupiedHexes) {
        val stack = board[hex.key()]
        if (stack != null && stack.size > 1) {
            val topPiece = stack[stack.size - 1]
            val pinnedPiece = stack[stack.size - 2]

            if (topPiece.player == aiPlayer && pinnedPiece.player == humanPlayer) {
                score += 80
                if (pinnedPiece.type == BugType.QUEEN) score += 200
            } else if (topPiece.player == humanPlayer && pinnedPiece.player == aiPlayer) {
                score -= 90
                if (pinnedPiece.type == BugType.QUEEN) score -= 250
            }
        }
    }

    return score
}

fun actuallyMovedPieceId(board: Map<String, List<Piece>>, action: MoveAction): String {
    return when (action.type) {
        MoveAction.ActionType.PILLBUG_SPECIAL ->
            action.pillbugTargetHex?.let { getTopPiece(board, it)?.id } ?: action.pieceId
        else -> action.pieceId
    }
}

fun simulateAction(
    board: Map<String, List<Piece>>,
    action: MoveAction,
    actingPlayer: Player,
    aiReserve: List<Piece>,
    humanReserve: List<Piece>,
): Triple<MutableMap<String, MutableList<Piece>>, List<Piece>, List<Piece>> {
    val nextBoard = cloneBoard(board)
    var nextAIReserve = aiReserve.filter { it.id != action.pieceId }
    var nextHumanReserve = humanReserve.filter { it.id != action.pieceId }

    if (action.type == MoveAction.ActionType.PLACE) {
        val newPiece = Piece(action.pieceId, action.bugType, actingPlayer)
        val key = action.toHex.key()
        val existingStack = nextBoard.getOrPut(key) { mutableListOf() }
        existingStack.add(newPiece)
    } else if (action.type == MoveAction.ActionType.MOVE && action.fromHex != null) {
        val fromStack = nextBoard[action.fromHex.key()]
        if (fromStack != null) {
            val movedPiece = if (fromStack.isNotEmpty()) fromStack.removeAt(fromStack.size - 1) else null
            if (fromStack.isEmpty()) nextBoard.remove(action.fromHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    } else if (action.type == MoveAction.ActionType.PILLBUG_SPECIAL && action.pillbugTargetHex != null) {
        val targetStack = nextBoard[action.pillbugTargetHex.key()]
        if (targetStack != null) {
            val movedPiece = if (targetStack.isNotEmpty()) targetStack.removeAt(targetStack.size - 1) else null
            if (targetStack.isEmpty()) nextBoard.remove(action.pillbugTargetHex.key())

            if (movedPiece != null) {
                val key = action.toHex.key()
                val stack = nextBoard.getOrPut(key) { mutableListOf() }
                stack.add(movedPiece)
            }
        }
    }

    return Triple(nextBoard, nextAIReserve, nextHumanReserve)
}

// ============================================================================
// 4. MAIN JETPACK COMPOSE UI APP
// ============================================================================

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun BugzApp() {
    val engine = remember { BugzEngine() }
    val context = LocalContext.current

    // Initialize language from saved preference or device locale
    LaunchedEffect(Unit) { I18n.initLang(context) }
    // Observe language changes so the whole UI recomposes
    @Suppress("UNUSED_VARIABLE")
    val currentLang by I18n.langState.collectAsState()

    var gameState by remember { mutableStateOf(0) }
    fun bump() {
        gameState++
    }

    var resumeSave by remember { mutableStateOf(loadGame(context)) }

    var settings by remember {
        mutableStateOf(GameSettings(GameMode.AI, AIDifficulty.MEDIUM, ExpansionsConfig(), Player.ONE))
    }
    var isSetupOpen by remember { mutableStateOf(true) }
    var gameOver by remember { mutableStateOf<Player?>(null) }
    var isDraw by remember { mutableStateOf(false) }

    var selectedHex by remember { mutableStateOf<AxialHex?>(null) }
    var selectedReserveBug by remember { mutableStateOf<BugType?>(null) }
    var validDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var pillbugTargetHex by remember { mutableStateOf<AxialHex?>(null) }
    var pillbugDestinations by remember { mutableStateOf<List<AxialHex>>(emptyList()) }
    var pillbugTargetList by remember { mutableStateOf<List<PillbugTargetOption>>(emptyList()) }
    var pillbugTargetIdx by remember { mutableStateOf(0) }
    var lastMovedHex by remember { mutableStateOf<AxialHex?>(null) }
    var isAITurn by remember { mutableStateOf(false) }
    var toast by remember { mutableStateOf<String?>(null) }
    var undoStack by remember { mutableStateOf<List<BugzEngine.EngineSnapshot>>(emptyList()) }

    // Tutorial mode state
    var tutorialStep by remember { mutableStateOf(TutorialStep.WELCOME) }
    val isTutorial by remember { derivedStateOf { settings.tutorialMode && tutorialStep != TutorialStep.COMPLETE } }

    val scope = rememberCoroutineScope()
    var executeMoveImpl: ((MoveAction) -> Unit)? = null

    val aiPlayer: Player = if (settings.humanColor == Player.ONE) Player.TWO else Player.ONE

    fun clearSelection() {
        selectedHex = null
        selectedReserveBug = null
        validDestinations = emptyList()
        pillbugTargetHex = null
        pillbugDestinations = emptyList()
        pillbugTargetList = emptyList()
        pillbugTargetIdx = 0
    }

    fun applyForcedPasses() {
        var guard = 0
        while (guard < 100) {
            if (gameOver != null) break
            val cur = engine.currentPlayer
            val actions = engine.legalActions()
            if (actions.isNotEmpty()) break
            if (engine.board.isEmpty() && engine.p1Reserve.isEmpty() && engine.p2Reserve.isEmpty()) break

            val turn = engine.turnCountFor(cur)
            engine.history.add(MoveLogEntry(turn, cur, I18n.tr("passLog", "n" to if (cur == Player.ONE) 1 else 2)))
            engine.switchTurn()
            bump()
            guard++
        }
    }

    /** Advance the tutorial to the next step. */
    fun advanceTutorial() {
        if (!settings.tutorialMode) return
        tutorialStep = when (tutorialStep) {
            TutorialStep.WELCOME -> TutorialStep.PLACE_QUEEN
            TutorialStep.PLACE_QUEEN -> TutorialStep.OPP_QUEEN
            TutorialStep.OPP_QUEEN -> TutorialStep.PLACE_SPIDER
            TutorialStep.PLACE_SPIDER -> TutorialStep.OPP_SPIDER
            TutorialStep.OPP_SPIDER -> TutorialStep.PLACE_BEETLE
            TutorialStep.PLACE_BEETLE -> TutorialStep.OPP_BEETLE
            TutorialStep.OPP_BEETLE -> TutorialStep.PLACE_GRASSHOPPER
            TutorialStep.PLACE_GRASSHOPPER -> TutorialStep.OPP_GRASSHOPPER
            TutorialStep.OPP_GRASSHOPPER -> TutorialStep.MOVE_EXAMPLE
            TutorialStep.MOVE_EXAMPLE -> TutorialStep.COMPLETE
            TutorialStep.COMPLETE -> TutorialStep.COMPLETE
        }
    }

    /** Skip the tutorial and return to setup. */
    fun skipTutorial() {
        tutorialStep = TutorialStep.COMPLETE
        settings = settings.copy(tutorialMode = false)
        isSetupOpen = true
    }

    fun requestAIMove() {
        if (settings.tutorialMode && tutorialStep != TutorialStep.COMPLETE) return // tutorial handles its own opponent
        if (settings.mode != GameMode.AI) return
        if (gameOver != null || isSetupOpen) return
        if (engine.currentPlayer != aiPlayer) return
        if (isAITurn) return

        isAITurn = true
        scope.launch {
            delay(600)

            val humanPlayer: Player = if (aiPlayer == Player.ONE) Player.TWO else Player.ONE
            val action = computeAIMove(
                engine.board,
                aiPlayer,
                engine.reserveFor(aiPlayer),
                engine.reserveFor(humanPlayer),
                engine.turnCountFor(aiPlayer),
                engine.turnCountFor(humanPlayer),
                settings.aiDifficulty,
                engine.lastMovedPieceId,
                settings.expansions,
            )

            // Guard: game may have been restarted while the AI was thinking
            if (gameOver != null || engine.currentPlayer != aiPlayer || !isAITurn) {
                isAITurn = false
                bump()
                return@launch
            }

            if (action != null) {
                executeMoveImpl?.invoke(action)
            } else {
                undoStack = undoStack + engine.snapshot()
                val turn = engine.turnCountFor(engine.currentPlayer)
                engine.history.add(MoveLogEntry(turn, engine.currentPlayer, I18n.tr("aiPassLog", "n" to if (engine.currentPlayer == Player.ONE) 1 else 2)))
                engine.switchTurn()
                toast = I18n.tr("aiNoMovesToast")
                bump()
                applyForcedPasses()
                bump()
            }

            isAITurn = false
            bump()
            // If forced passes bounced the turn back to AI, keep playing
            requestAIMove()
        }
    }

    fun executeMove(action: MoveAction) {
        undoStack = undoStack + engine.snapshot()
        engine.executeMove(action)
        lastMovedHex = action.toHex
        clearSelection()

        val status = engine.checkGameStatus()
        if (status.isGameOver) {
            gameOver = status.winner
            isDraw = status.isDraw
            isAITurn = false
            bump()
            return
        }

        bump()
        applyForcedPasses()
        bump()

        // Advance tutorial step after any move in tutorial mode
        if (settings.tutorialMode && tutorialStep != TutorialStep.COMPLETE) {
            advanceTutorial()
        } else {
            requestAIMove()
        }
    }

    executeMoveImpl = ::executeMove

    // Auto-execute opponent placement when tutorial is on an OPP_* step.
    // Uses LaunchedEffect to always read fresh engine state (avoids stale-closure bugs).
    if (isTutorial && tutorialStep.name.startsWith("OPP_") && gameOver == null) {
        LaunchedEffect(tutorialStep) {
            isAITurn = true
            delay(800)
            val oppPlayer = if (settings.humanColor == Player.ONE) Player.TWO else Player.ONE
            val reserve = engine.reserveFor(oppPlayer)
            val bugType = when (tutorialStep) {
                TutorialStep.OPP_QUEEN -> BugType.QUEEN
                TutorialStep.OPP_SPIDER -> BugType.SPIDER
                TutorialStep.OPP_BEETLE -> BugType.BEETLE
                TutorialStep.OPP_GRASSHOPPER -> BugType.GRASSHOPPER
                else -> reserve.firstOrNull()?.type ?: run {
                    isAITurn = false
                    return@LaunchedEffect
                }
            }
            val piece = reserve.firstOrNull { it.type == bugType } ?: reserve.firstOrNull() ?: run {
                isAITurn = false
                return@LaunchedEffect
            }
            val placements = engine.legalActions().filter { it.type == MoveAction.ActionType.PLACE && it.pieceId == piece.id }
            val action = placements.firstOrNull()
            if (action != null) {
                executeMove(action)
            }
            isAITurn = false
        }
    }

    fun startNewGame(newSettings: GameSettings) {
        engine.initNewGame(newSettings.expansions)
        settings = newSettings
        gameOver = null
        isDraw = false
        clearSelection()
        lastMovedHex = null
        toast = null
        isAITurn = false
        undoStack = emptyList()
        resumeSave = null
        isSetupOpen = false
        tutorialStep = if (newSettings.tutorialMode) TutorialStep.WELCOME else TutorialStep.COMPLETE
        bump()
        requestAIMove()
    }

    fun resumeLastGame(save: GameSave) {
        engine.restore(save.snapshot)
        engine.expansions = save.settings.expansions
        settings = save.settings
        gameOver = null
        isDraw = false
        clearSelection()
        lastMovedHex = null
        toast = null
        isAITurn = false
        undoStack = emptyList()
        resumeSave = null
        isSetupOpen = false
        bump()
        requestAIMove()
    }

    fun handleUndo() {
        if (isAITurn || undoStack.isEmpty()) return

        // In AI mode, keep popping until it is the human player's turn again
        var restored = false
        while (undoStack.isNotEmpty()) {
            val snap = undoStack.last()
            undoStack = undoStack.dropLast(1)
            engine.restore(snap)
            restored = true
            if (settings.mode != GameMode.AI || engine.currentPlayer != aiPlayer) break
        }

        if (!restored) return

        clearSelection()
        lastMovedHex = null
        gameOver = null
        isDraw = false
        isAITurn = false
        toast = I18n.tr("undoToast")
        bump()
    }

    // Toast auto-dismiss
    LaunchedEffect(toast) {
        if (toast != null) {
            delay(2500)
            toast = null
        }
    }

    // Auto-save after every move so a finished or interrupted game can be resumed
    // when the player returns (the app may have been closed in the meantime).
    LaunchedEffect(gameState, isSetupOpen, gameOver) {
        if (gameOver != null) {
            clearSave(context)
            resumeSave = null
        } else if (!isSetupOpen) {
            saveGame(context, settings, engine)
        }
    }

    fun queenDue(): Boolean {
        return engine.turnCountFor(engine.currentPlayer) >= 4 && !engine.isQueenPlaced(engine.currentPlayer)
    }

    fun handleReserveSelect(bug: BugType) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        if (queenDue() && bug != BugType.QUEEN) {
            toast = I18n.tr("queenDueToast")
            return
        }

        selectedHex = null
        pillbugTargetHex = null
        pillbugDestinations = emptyList()

        if (selectedReserveBug == bug) {
            selectedReserveBug = null
            validDestinations = emptyList()
        } else {
            selectedReserveBug = bug
            validDestinations = engine.placementsForCurrent()
        }
    }

    fun handleHexClick(hex: AxialHex) {
        if (isAITurn || gameOver != null) return
        if (settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer) return

        val isDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
        val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }
        val isPillbugTarget = pillbugTargetHex?.let { it.q == hex.q && it.r == hex.r } == true

        // Tapping the highlighted pillbug target cycles to the next eligible one.
        if (isPillbugTarget && pillbugTargetList.size > 1) {
            val next = (pillbugTargetIdx + 1) % pillbugTargetList.size
            pillbugTargetIdx = next
            pillbugTargetHex = pillbugTargetList[next].targetHex
            pillbugDestinations = pillbugTargetList[next].destinationHexes
            return
        }

        // Placement
        if (selectedReserveBug != null && isDest) {
            if (queenDue() && selectedReserveBug != BugType.QUEEN) {
                toast = I18n.tr("queenDueToast")
                return
            }
            val reserve = engine.reserveFor(engine.currentPlayer)
            val piece = reserve.firstOrNull { it.type == selectedReserveBug } ?: return
            executeMove(
                MoveAction(
                    type = MoveAction.ActionType.PLACE,
                    pieceId = piece.id,
                    bugType = piece.type,
                    player = engine.currentPlayer,
                    toHex = hex,
                ),
            )
            return
        }

        // Move / Pillbug special
        if (selectedHex != null && (isDest || isPillbugDest)) {
            val topPiece = getTopPiece(engine.board, selectedHex!!) ?: return
            if (pillbugTargetHex != null && isPillbugDest) {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.PILLBUG_SPECIAL,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        pillbugTargetHex = pillbugTargetHex,
                        toHex = hex,
                    ),
                )
            } else {
                executeMove(
                    MoveAction(
                        type = MoveAction.ActionType.MOVE,
                        pieceId = topPiece.id,
                        bugType = topPiece.type,
                        player = engine.currentPlayer,
                        fromHex = selectedHex,
                        toHex = hex,
                    ),
                )
            }
            return
        }

        // Select piece
        val stack = engine.board[hex.key()]
        val topPiece = stack?.lastOrNull()

        selectedReserveBug = null

        if (selectedHex != null && selectedHex!!.q == hex.q && selectedHex!!.r == hex.r) {
            clearSelection()
            return
        }

        if (topPiece != null && topPiece.player == engine.currentPlayer) {
            selectedHex = hex
            validDestinations = engine.movesFor(hex)

            val effectiveTypes = engine.effectiveTypes(hex, topPiece)
            if (effectiveTypes.contains(BugType.PILLBUG)) {
                val targets = engine.pillbugTargets(hex)
                pillbugTargetList = targets
                pillbugTargetIdx = 0
                if (targets.isNotEmpty()) {
                    pillbugTargetHex = targets[0].targetHex
                    pillbugDestinations = targets[0].destinationHexes
                } else {
                    pillbugTargetHex = null
                    pillbugDestinations = emptyList()
                }
            } else {
                pillbugTargetList = emptyList()
                pillbugTargetIdx = 0
                pillbugTargetHex = null
                pillbugDestinations = emptyList()
            }
        } else {
            clearSelection()
        }
    }

    MaterialTheme(
        colorScheme = if (isSystemInDarkTheme()) DarkColors else LightColors,
    ) {
        Scaffold(
            topBar = {
                TopAppBar(
                    modifier = Modifier.height(74.dp),
                    title = {
                        Column(modifier = Modifier.padding(top = 14.dp)) {
                            Text(I18n.tr("appTitle"), fontWeight = FontWeight.Black)
                            Text(
                                text = when {
                                    gameOver != null -> I18n.tr("topGameOver")
                                    isAITurn -> I18n.tr("topAiThinking")
                                    settings.mode == GameMode.AI -> I18n.tr(
                                        "topVsAi",
                                        "diff" to when (settings.aiDifficulty) {
                                            AIDifficulty.EASY -> I18n.tr("diffEasy")
                                            AIDifficulty.MEDIUM -> I18n.tr("diffMedium")
                                            AIDifficulty.HARD -> I18n.tr("diffHard")
                                        },
                                    )
                                    else -> I18n.tr("topPassPlay")
                                },
                                fontSize = 15.sp,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                            )
                        }
                    },
                    actions = {
                        Text(
                            text = if (gameOver != null) {
                                I18n.tr(
                                    "winnerLabel",
                                    "color" to when {
                                        gameOver == Player.ONE -> I18n.tr("white")
                                        gameOver == Player.TWO -> I18n.tr("black")
                                        else -> I18n.tr("draw")
                                    },
                                )
                            } else {
                                I18n.tr(
                                    "turnLabel",
                                    "player" to if (engine.currentPlayer == Player.ONE) 1 else 2,
                                ) + " · T$gameState"
                            },
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (engine.currentPlayer == Player.ONE) {
                                MaterialTheme.colorScheme.primary
                            } else {
                                if (isSystemInDarkTheme()) Color(0xFF93C5FD) else Color(0xFF1D4ED8)
                            },
                            modifier = Modifier.align(Alignment.CenterVertically),
                        )
                        Spacer(Modifier.width(8.dp))
                        LanguageSwitcher()
                        IconButton(
                            onClick = { handleUndo() },
                            enabled = undoStack.isNotEmpty() && !isAITurn,
                        ) {
                            Text(
                                text = "\u21B6",
                                fontSize = 24.sp,
                                fontWeight = FontWeight.Bold,
                                color = if (undoStack.isNotEmpty() && !isAITurn) {
                                    MaterialTheme.colorScheme.primary
                                } else {
                                    MaterialTheme.colorScheme.onSurfaceVariant
                                },
                            )
                        }
                        IconButton(onClick = { isSetupOpen = true }) {
                            Icon(Icons.Default.Settings, contentDescription = I18n.tr("settings"))
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(
                        containerColor = MaterialTheme.colorScheme.background,
                    ),
                )
            },
        ) { paddingValues ->
            Box(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(paddingValues)
                    .background(MaterialTheme.colorScheme.background),
            ) {
                Column(
                    modifier = Modifier.fillMaxSize(),
                ) {
                    // Main Interactive Hexagon Canvas (fills space above reserve bar)
                    Box(
                        modifier = Modifier
                            .fillMaxWidth()
                            .weight(1f),
                    ) {
                        HexCanvasBoard(
                            board = engine.board,
                            selectedHex = selectedHex,
                            validDestinations = validDestinations,
                            pillbugTargetHex = pillbugTargetHex,
                            pillbugDestinations = pillbugDestinations,
                            lastMovedHex = lastMovedHex,
                            onHexClick = { hex -> handleHexClick(hex) },
                        )

                        // Toast notification
                        toast?.let { msg ->
                            Surface(
                                color = Color(0xFFF59E0B),
                                shape = RoundedCornerShape(16.dp),
                                modifier = Modifier
                                    .align(Alignment.BottomCenter)
                                    .padding(12.dp),
                            ) {
                                Text(
                                    text = msg,
                                    color = Color.Black,
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 13.sp,
                                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 8.dp),
                                )
                            }
                        }

                        // Move Log Overlay
                        MoveLogOverlay(
                            history = engine.history,
                            modifier = Modifier
                                .align(Alignment.TopEnd)
                                .padding(12.dp),
                        )
                    }

                    // Reserve Bar at Bottom
                    ReserveBar(
                        reserve = engine.reserveFor(engine.currentPlayer),
                        selectedBug = selectedReserveBug,
                        isEnabled = !isAITurn && gameOver == null &&
                            !(settings.mode == GameMode.AI && engine.currentPlayer == aiPlayer),
                        queenDue = queenDue(),
                        onSelectBug = { bug -> handleReserveSelect(bug) },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(12.dp),
                    )
                }

                // Resume prompt shown over the setup screen when a saved game exists
                if (isSetupOpen) {
                    val save = resumeSave
                    if (save != null) {
                        ResumePromptDialog(
                            onResume = { resumeLastGame(save) },
                            onNewGame = {
                                clearSave(context)
                                resumeSave = null
                            },
                        )
                    }
                }

                // New Game / Setup Modal
                if (isSetupOpen) {
                    SetupModal(
                        currentSettings = settings,
                        onStart = { newSettings ->
                            startNewGame(newSettings)
                        },
                        onDismiss = {
                            if (gameOver != null || engine.board.isNotEmpty()) isSetupOpen = false
                        },
                    )
                }

                // Game Over Dialog
                if (gameOver != null) {
                    GameOverDialog(
                        winner = gameOver,
                        isDraw = isDraw,
                        onRematch = { startNewGame(settings) },
                        onNewSetup = {
                            gameOver = null
                            isDraw = false
                            isSetupOpen = true
                        },
                    )
                }

                // Tutorial Welcome Dialog
                if (settings.tutorialMode && tutorialStep == TutorialStep.WELCOME && !isSetupOpen) {
                    TutorialWelcomeDialog(
                        onNext = { advanceTutorial() },
                        onSkip = { skipTutorial() },
                    )
                }

                // Tutorial Complete Dialog
                if (settings.tutorialMode && tutorialStep == TutorialStep.COMPLETE && engine.board.size > 0) {
                    TutorialCompleteDialog(
                        onClose = { skipTutorial() },
                    )
                }

                // Tutorial Instruction Overlay (below top bar)
                if (isTutorial && !isSetupOpen) {
                    TutorialOverlay(
                        step = tutorialStep,
                        onSkip = { skipTutorial() },
                    )
                }
            }
        }
    }
}

private fun hexToPixel(hex: AxialHex, radius: Float): Offset {
    val x = radius * sqrt(3f) * (hex.q + hex.r / 2f)
    val y = radius * 1.5f * hex.r
    return Offset(x, y)
}

private fun pixelToHex(pos: Offset, center: Offset, radius: Float): AxialHex {
    val relX = pos.x - center.x
    val relY = pos.y - center.y

    val r = (2.0 / 3.0) * (relY / radius)
    var q = (relX / (radius * sqrt(3.0))) - r / 2.0

    val s = -q - r
    var rq = round(q).toInt()
    var rr = round(r).toInt()
    var rs = round(s).toInt()

    val dq = abs(rq - q)
    val dr = abs(rr - r)
    val ds = abs(rs - s)

    if (dq > dr && dq > ds) {
        rq = -rr - rs
    } else if (dr > ds) rr = -rq - rs

    return AxialHex(rq, rr)
}

@Composable
fun HexCanvasBoard(
    board: Map<String, List<Piece>>,
    selectedHex: AxialHex?,
    validDestinations: List<AxialHex>,
    pillbugTargetHex: AxialHex?,
    pillbugDestinations: List<AxialHex>,
    lastMovedHex: AxialHex?,
    onHexClick: (AxialHex) -> Unit,
) {
    var scale by remember { mutableStateOf(1f) }
    var pan by remember { mutableStateOf(Offset.Zero) }
    var canvasSize by remember { mutableStateOf(Size.Zero) }
    val baseRadius = 42.dp
    val surfaceVariant = MaterialTheme.colorScheme.surfaceVariant
    val outline = MaterialTheme.colorScheme.outline

    // Collect all hexes to render
    val renderMap = mutableMapOf<String, AxialHex>()

    board.forEach { (key, stack) ->
        if (stack.isNotEmpty()) {
            val hex = parseKey(key)
            renderMap[key] = hex
            for (n in hex.getNeighbors()) {
                if (!renderMap.containsKey(n.key())) renderMap[n.key()] = n
            }
        }
    }

    // Empty board: render center + neighbors
    if (renderMap.isEmpty()) {
        val center = AxialHex(0, 0)
        renderMap[center.key()] = center
        for (n in center.getNeighbors()) renderMap[n.key()] = n
    }

    validDestinations.forEach { renderMap[it.key()] = it }
    pillbugDestinations.forEach { renderMap[it.key()] = it }
    selectedHex?.let { renderMap[it.key()] = it }
    pillbugTargetHex?.let { renderMap[it.key()] = it }

    val textMeasurer = rememberTextMeasurer()

    Canvas(
        modifier = Modifier
            .fillMaxSize()
            .onSizeChanged { canvasSize = Size(it.width.toFloat(), it.height.toFloat()) }
            .pointerInput(Unit) {
                detectTransformGestures { _, gesturePan, gestureZoom, _ ->
                    scale = (scale * gestureZoom).coerceIn(0.4f, 2.5f)
                    pan += gesturePan
                }
            }
            .pointerInput(Unit) {
                detectTapGestures { tap ->
                    val center = Offset(canvasSize.width / 2f + pan.x, canvasSize.height / 2f + pan.y)
                    val hexRadius = baseRadius.toPx() * scale
                    val hex = pixelToHex(Offset(tap.x, tap.y), center, hexRadius)
                    onHexClick(hex)
                }
            },
    ) {
        val center = Offset(size.width / 2f + pan.x, size.height / 2f + pan.y)
        val hexRadius = baseRadius.toPx() * scale

        renderMap.values.forEach { hex ->
            val rel = hexToPixel(hex, hexRadius)
            val x = center.x + rel.x
            val y = center.y + rel.y

            val stack = board[hex.key()]
            val isOccupiedTile = stack != null && stack.isNotEmpty()
            val topPiece = stack?.lastOrNull()
            val stackHeight = stack?.size ?: 0

            val isSelected = selectedHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isValidDest = validDestinations.any { it.q == hex.q && it.r == hex.r }
            val isPillbugTarget = pillbugTargetHex?.let { it.q == hex.q && it.r == hex.r } == true
            val isPillbugDest = pillbugDestinations.any { it.q == hex.q && it.r == hex.r }
            val isLastMoved = lastMovedHex?.let { it.q == hex.q && it.r == hex.r } == true

            val path = Path().apply {
                for (i in 0..5) {
                    val angle = (60 * i - 30) * Math.PI / 180.0
                    val px = x + hexRadius * cos(angle).toFloat()
                    val py = y + hexRadius * sin(angle).toFloat()
                    if (i == 0) moveTo(px, py) else lineTo(px, py)
                }
                close()
            }

            val fillColor = when {
                isOccupiedTile && topPiece?.player == Player.ONE -> Color(0xFFF8FAFC)
                isOccupiedTile -> Color(0xFF1E293B)
                isValidDest || isPillbugDest -> Color(0x2E10B981)
                isPillbugTarget -> Color(0x2EEC4899)
                else -> surfaceVariant
            }
            val strokeColor = when {
                isSelected -> Color(0xFFF59E0B)
                isPillbugTarget -> Color(0xFFEC4899)
                isLastMoved -> Color(0xFF3B82F6)
                isValidDest || isPillbugDest -> Color(0xFF10B981)
                isOccupiedTile -> outline
                else -> outline
            }
            val strokeWidth = when {
                isSelected -> 4f
                isPillbugTarget -> 3.5f
                isLastMoved -> 3f
                isValidDest || isPillbugDest -> 2.5f
                else -> 1.5f
            }

            drawPath(path, color = fillColor)
            drawPath(path, color = strokeColor, style = Stroke(width = strokeWidth))

            if (isOccupiedTile && topPiece != null) {
                val emojiSizeSp = with(density) { (hexRadius * 1.05f).toSp() }
                val layout = textMeasurer.measure(
                    AnnotatedString(topPiece.type.emoji),
                    style = TextStyle(fontSize = emojiSizeSp),
                )
                drawText(
                    layout,
                    topLeft = Offset(x - layout.size.width / 2f, y - layout.size.height / 2f),
                )

                if (stackHeight > 1) {
                    val badge = textMeasurer.measure(
                        AnnotatedString(stackHeight.toString()),
                        style = TextStyle(fontSize = 12.sp, color = Color.Black, fontWeight = FontWeight.Bold),
                    )
                    val badgeCenter = Offset(x + hexRadius * 0.72f, y - hexRadius * 0.72f)
                    drawCircle(color = Color(0xFFF59E0B), radius = 12f, center = badgeCenter)
                    drawText(
                        badge,
                        topLeft = Offset(
                            badgeCenter.x - badge.size.width / 2f,
                            badgeCenter.y - badge.size.height / 2f,
                        ),
                    )
                }

                // Player indicator dot
                val dotColor = if (topPiece.player == Player.ONE) Color.White else Color.Black
                drawCircle(
                    color = dotColor,
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f),
                )
                drawCircle(
                    color = if (topPiece.player == Player.ONE) Color(0xFFCBD5E1) else Color(0xFF64748B),
                    radius = 7f,
                    center = Offset(x - hexRadius * 0.7f, y - hexRadius * 0.7f),
                    style = Stroke(width = 1.5f),
                )
            } else if (isValidDest || isPillbugDest) {
                drawCircle(
                    color = Color(0xFF10B981),
                    radius = 9f,
                    center = Offset(x, y),
                )
            }
        }
    }
}

@Composable
fun ReserveBar(
    reserve: List<Piece>,
    selectedBug: BugType?,
    isEnabled: Boolean,
    queenDue: Boolean,
    onSelectBug: (BugType) -> Unit,
    modifier: Modifier = Modifier,
) {
    val grouped = reserve.groupBy { it.type }
    val colors = MaterialTheme.colorScheme

    Surface(
        shape = RoundedCornerShape(24.dp),
        color = colors.surface,
        tonalElevation = 8.dp,
        modifier = modifier.fillMaxWidth(),
    ) {
        LazyRow(
            contentPadding = PaddingValues(14.dp),
            horizontalArrangement = Arrangement.spacedBy(12.dp),
        ) {
            items(grouped.entries.toList()) { entry ->
                val bug = entry.key
                val count = entry.value.size
                val isSelected = selectedBug == bug
                val cardEnabled = isEnabled && !(queenDue && bug != BugType.QUEEN)

                Box(
                    modifier = Modifier
                        .clip(RoundedCornerShape(18.dp))
                        .background(
                            when {
                                isSelected -> colors.primary
                                !cardEnabled -> colors.background
                                else -> colors.surfaceVariant
                            },
                        )
                        .border(
                            width = if (isSelected) 2.dp else 1.dp,
                            color = if (isSelected) colors.primary else colors.outline,
                            shape = RoundedCornerShape(18.dp),
                        )
                        .clickable(enabled = cardEnabled) { onSelectBug(bug) }
                        .sizeIn(minHeight = 96.dp, minWidth = 112.dp)
                        .padding(horizontal = 12.dp, vertical = 10.dp),
                    contentAlignment = Alignment.Center,
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(
                            text = bug.emoji,
                            fontSize = 46.sp,
                            color = if (isSelected) colors.onPrimary else colors.onSurface,
                        )
                        Spacer(Modifier.height(4.dp))
                        Text(
                            text = I18n.tr(bug.nameKey),
                            fontSize = 12.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (isSelected) colors.onPrimary else colors.onSurfaceVariant,
                            maxLines = 1,
                        )
                    }

                    // Count badge
                    Box(
                        modifier = Modifier
                            .align(Alignment.TopEnd)
                            .padding(6.dp)
                            .size(28.dp)
                            .clip(CircleShape)
                            .background(if (isSelected) colors.onPrimary else colors.primary),
                        contentAlignment = Alignment.Center,
                    ) {
                        Text(
                            text = "$count",
                            fontSize = 14.sp,
                            fontWeight = FontWeight.Black,
                            color = if (isSelected) colors.primary else colors.onPrimary,
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun MoveLogOverlay(history: List<MoveLogEntry>, modifier: Modifier = Modifier) {
    var expanded by remember { mutableStateOf(false) }

    val colors = MaterialTheme.colorScheme

    Row(
        modifier = modifier,
        verticalAlignment = Alignment.CenterVertically,
    ) {
        // Toggle tab pinned to the side
        Surface(
            shape = RoundedCornerShape(10.dp),
            color = colors.surface.copy(alpha = 0.9f),
            border = BorderStroke(1.dp, colors.outline),
            onClick = { expanded = !expanded },
        ) {
            Text(
                text = if (expanded) "❯" else "❮",
                fontSize = 18.sp,
                fontWeight = FontWeight.Black,
                color = colors.primary,
                modifier = Modifier
                    .padding(horizontal = 8.dp, vertical = 14.dp),
            )
        }

        if (expanded) {
            Spacer(Modifier.width(4.dp))
            Surface(
                shape = RoundedCornerShape(12.dp),
                color = colors.background.copy(alpha = 0.9f),
                border = BorderStroke(1.dp, colors.outline),
            ) {
                LazyColumn(contentPadding = PaddingValues(8.dp)) {
                    item {
                        Text(
                            I18n.tr("moveLog"),
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = colors.onSurfaceVariant,
                        )
                    }
                    items(history.takeLast(8).reversed()) { entry ->
                        Text(
                            text = "${entry.turn}. ${I18n.tr("pLabel", "player" to if (entry.player == Player.ONE) 1 else 2)}: ${entry.text}",
                            fontSize = 11.sp,
                            color = colors.onSurface,
                            modifier = Modifier.padding(vertical = 1.dp),
                        )
                    }
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun SetupModal(
    currentSettings: GameSettings,
    onStart: (GameSettings) -> Unit,
    onDismiss: () -> Unit,
) {
    var mode by remember { mutableStateOf(currentSettings.mode) }
    var diff by remember { mutableStateOf(currentSettings.aiDifficulty) }
    var humanColor by remember { mutableStateOf(currentSettings.humanColor) }
    var mosquito by remember { mutableStateOf(currentSettings.expansions.mosquito) }
    var ladybug by remember { mutableStateOf(currentSettings.expansions.ladybug) }
    var pillbug by remember { mutableStateOf(currentSettings.expansions.pillbug) }
    var tutorialMode by remember { mutableStateOf(currentSettings.tutorialMode) }
    var showRules by remember { mutableStateOf(false) }

    if (showRules) {
        RulesDialog(onClose = { showRules = false })
        return
    }

    AlertDialog(
        onDismissRequest = onDismiss,
        title = { Text(I18n.tr("setupTitle"), fontWeight = FontWeight.Bold) },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState()),
                verticalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                Text(I18n.tr("selectMode"), fontWeight = FontWeight.SemiBold)
                Row(
                    horizontalArrangement = Arrangement.spacedBy(8.dp),
                    modifier = Modifier.fillMaxWidth(),
                ) {
                    FilterChip(
                        selected = mode == GameMode.PASS_AND_PLAY && !tutorialMode,
                        onClick = {
                            mode = GameMode.PASS_AND_PLAY
                            tutorialMode = false
                        },
                        label = { Text(I18n.tr("modePassPlay")) },
                        modifier = Modifier.weight(1f),
                    )
                    FilterChip(
                        selected = mode == GameMode.AI && !tutorialMode,
                        onClick = {
                            mode = GameMode.AI
                            tutorialMode = false
                        },
                        label = { Text(I18n.tr("modeVsAi")) },
                        modifier = Modifier.weight(1f),
                    )
                }
                FilterChip(
                    selected = tutorialMode,
                    onClick = {
                        tutorialMode = !tutorialMode
                        if (tutorialMode) {
                            mode = GameMode.AI
                            diff = AIDifficulty.EASY
                            humanColor = Player.ONE
                            mosquito = false
                            ladybug = false
                            pillbug = false
                        }
                    },
                    label = { Text(I18n.tr("tutorialMode")) },
                    modifier = Modifier.fillMaxWidth(),
                )

                if (mode == GameMode.AI && !tutorialMode) {
                    Text(I18n.tr("aiDifficulty"), fontWeight = FontWeight.SemiBold)
                    FlowRow(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        AIDifficulty.values().forEach { d ->
                            FilterChip(
                                selected = diff == d,
                                onClick = { diff = d },
                                label = {
                                    Text(
                                        when (d) {
                                            AIDifficulty.EASY -> I18n.tr("diffEasy")
                                            AIDifficulty.MEDIUM -> I18n.tr("diffMedium")
                                            AIDifficulty.HARD -> I18n.tr("diffHard")
                                        },
                                    )
                                },
                            )
                        }
                    }

                    Text(I18n.tr("youPlayAs"), fontWeight = FontWeight.SemiBold)
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        modifier = Modifier.fillMaxWidth(),
                    ) {
                        FilterChip(
                            selected = humanColor == Player.ONE,
                            onClick = { humanColor = Player.ONE },
                            label = { Text(I18n.tr("whiteP1")) },
                            modifier = Modifier.weight(1f),
                        )
                        FilterChip(
                            selected = humanColor == Player.TWO,
                            onClick = { humanColor = Player.TWO },
                            label = { Text(I18n.tr("blackP2")) },
                            modifier = Modifier.weight(1f),
                        )
                    }
                }

                Text(I18n.tr("expansions"), fontWeight = FontWeight.SemiBold)
                Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                    FilterChip(
                        selected = mosquito,
                        onClick = { if (!tutorialMode) mosquito = !mosquito },
                        enabled = !tutorialMode,
                        label = { Text(I18n.tr("expMosquito")) },
                        modifier = Modifier.fillMaxWidth(),
                    )
                    FilterChip(
                        selected = ladybug,
                        onClick = { if (!tutorialMode) ladybug = !ladybug },
                        enabled = !tutorialMode,
                        label = { Text(I18n.tr("expLadybug")) },
                        modifier = Modifier.fillMaxWidth(),
                    )
                    FilterChip(
                        selected = pillbug,
                        onClick = { if (!tutorialMode) pillbug = !pillbug },
                        enabled = !tutorialMode,
                        label = { Text(I18n.tr("expPillbug")) },
                        modifier = Modifier.fillMaxWidth(),
                    )
                }
            }
        },
        confirmButton = {
            Button(
                onClick = {
                    onStart(
                        GameSettings(
                            mode = mode,
                            aiDifficulty = diff,
                            expansions = ExpansionsConfig(mosquito, ladybug, pillbug),
                            humanColor = humanColor,
                            tutorialMode = tutorialMode,
                        ),
                    )
                },
            ) {
                Text(I18n.tr("startMatch"))
            }
        },
        dismissButton = {
            TextButton(onClick = { showRules = true }) { Text(I18n.tr("learnToPlay")) }
        },
    )
}

@Composable
fun RulesDialog(onClose: () -> Unit) {
    AlertDialog(
        onDismissRequest = onClose,
        title = { Text(I18n.tr("rulesTitle"), fontWeight = FontWeight.Bold) },
        text = {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .verticalScroll(rememberScrollState())
                    .padding(vertical = 4.dp),
                verticalArrangement = Arrangement.spacedBy(6.dp),
            ) {
                Text(
                    I18n.tr("rulesGoal"),
                    fontSize = 13.sp,
                )
                Text(I18n.tr("rulesCoreTitle"), fontWeight = FontWeight.Bold)
                Text(
                    I18n.tr("rulesCoreBody"),
                    fontSize = 13.sp,
                )
                Text(I18n.tr("rulesInsectsTitle"), fontWeight = FontWeight.Bold)

                Text(
                    I18n.tr("insectQueen"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectSpider"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectBeetle"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectGrasshopper"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectAnt"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectMosquito"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectLadybug"),
                    fontSize = 13.sp,
                )
                Text(
                    I18n.tr("insectPillbug"),
                    fontSize = 13.sp,
                )
            }
        },
        confirmButton = {
            TextButton(onClick = onClose) { Text(I18n.tr("gotIt")) }
        },
    )
}

@Composable
fun TutorialOverlay(
    step: TutorialStep,
    onSkip: () -> Unit,
) {
    if (step == TutorialStep.WELCOME || step == TutorialStep.COMPLETE) return
    val playerStepNum = when (step) {
        TutorialStep.PLACE_QUEEN -> 1
        TutorialStep.PLACE_SPIDER -> 2
        TutorialStep.PLACE_BEETLE -> 3
        TutorialStep.PLACE_GRASSHOPPER -> 4
        TutorialStep.MOVE_EXAMPLE -> 5
        else -> 0 // OPP_ steps and others
    }
    Surface(
        color = Color(0xFFF59E0B).copy(alpha = 0.95f),
        shape = RoundedCornerShape(bottomStart = 16.dp, bottomEnd = 16.dp),
        modifier = Modifier.fillMaxWidth(),
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Column(modifier = Modifier.weight(1f)) {
                if (playerStepNum > 0) {
                    Text(
                        text = I18n.tr("tutorialStepLabel", "n" to playerStepNum),
                        fontSize = 10.sp,
                        fontWeight = FontWeight.Bold,
                        color = Color(0xFF451A03).copy(alpha = 0.7f),
                    )
                }
                Text(
                    text = I18n.tr(step.instructionKey),
                    fontSize = 13.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = Color(0xFF451A03),
                )
            }
            TextButton(onClick = onSkip) {
                Text(
                    text = I18n.tr("tutorialSkip"),
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color(0xFF451A03),
                )
            }
        }
    }
}

@Composable
fun TutorialWelcomeDialog(onNext: () -> Unit, onSkip: () -> Unit) {
    AlertDialog(
        onDismissRequest = {},
        title = { Text(I18n.tr("tutorialMode"), fontWeight = FontWeight.Bold) },
        text = { Text(I18n.tr("tutorialWelcome"), fontSize = 14.sp) },
        confirmButton = {
            Button(onClick = onNext) { Text(I18n.tr("tutorialNext")) }
        },
        dismissButton = {
            TextButton(onClick = onSkip) { Text(I18n.tr("tutorialSkip")) }
        },
    )
}

@Composable
fun TutorialCompleteDialog(onClose: () -> Unit) {
    AlertDialog(
        onDismissRequest = onClose,
        title = { Text(I18n.tr("tutorialComplete").take(30), fontWeight = FontWeight.Bold) },
        text = { Text(I18n.tr("tutorialComplete"), fontSize = 14.sp) },
        confirmButton = {
            Button(onClick = onClose) { Text(I18n.tr("tutorialGotIt")) }
        },
    )
}

@Composable
fun GameOverDialog(
    winner: Player?,
    isDraw: Boolean,
    onRematch: () -> Unit,
    onNewSetup: () -> Unit,
) {
    val title = if (isDraw) {
        I18n.tr("overDrawTitle")
    } else {
        I18n.tr("overWinTitle", "n" to if (winner == Player.ONE) 1 else 2)
    }

    AlertDialog(
        onDismissRequest = {},
        title = { Text("🏆 $title", fontWeight = FontWeight.Bold) },
        text = {
            Text(
                if (isDraw) {
                    I18n.tr("overDrawBody")
                } else {
                    I18n.tr("overWinBody", "n" to if (winner == Player.ONE) 2 else 1)
                },
            )
        },
        confirmButton = {
            Button(onClick = onRematch) { Text(I18n.tr("rematch")) }
        },
        dismissButton = {
            TextButton(onClick = onNewSetup) { Text(I18n.tr("newSetup")) }
        },
    )
}

@Composable
fun LanguageSwitcher() {
    val context = LocalContext.current
    Box {
        var menuOpen by remember { mutableStateOf(false) }
        TextButton(onClick = { menuOpen = true }) {
            Text(I18n.lang.nativeName, fontSize = 12.sp)
        }
        DropdownMenu(expanded = menuOpen, onDismissRequest = { menuOpen = false }) {
            Lang.values().forEach { lang ->
                DropdownMenuItem(
                    text = { Text(lang.nativeName) },
                    onClick = {
                        I18n.lang = lang
                        I18n.saveLang(context)
                        menuOpen = false
                    },
                )
            }
        }
    }
}

@Composable
fun ResumePromptDialog(
    onResume: () -> Unit,
    onNewGame: () -> Unit,
) {
    AlertDialog(
        onDismissRequest = {},
        title = { Text("▶️ ${I18n.tr("resumeTitle")}", fontWeight = FontWeight.Bold) },
        text = { Text(I18n.tr("resumeBody")) },
        confirmButton = {
            Button(onClick = onResume) { Text(I18n.tr("resumeBtn")) }
        },
        dismissButton = {
            TextButton(onClick = onNewGame) { Text(I18n.tr("newGameBtn")) }
        },
    )
}

// ============================================================================
// 5. ACTIVITY ENTRY POINT
// ============================================================================

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            BugzApp()
        }
    }
}
