/**
 * Game Prompts Database
 * Structure holds unrated party cards grouped by mode -> type
 */
const gameDatabase = {
  normal: {
    truth: [
      "¿Quién del grupo te cae peor y por qué?",
      "¿Qué es lo más vergonzoso que has hecho estando borracho?",
      "¿Si pudieras borrar a alguien de este cuarto de tu vida, quién sería?",
      "¿Cuál ha sido tu peor cita de Tinder o redes sociales?",
      "¿Qué secreto inconfesable guardas y te gustaría compartir?",
      "¿Cuál es tu mayor miedo irracional?",
      "¿Qué es lo más tonto que has buscado en Google?",
      "Si pudieras tener un superpoder, ¿cuál sería y por qué?",
      "¿Cuál es la mentira más grande que le has dicho a tus padres?",
      "¿Qué personaje de ficción te gustaría ser por un día?",
      "¿Cuál es tu peor hábito que intentas dejar?",
      "¿Con qué personaje famoso te gustaría tener una cita?",
      "¿Qué es lo que más te molesta de la persona que está sentada a tu derecha?",
      "¿Cuál fue el último regalo que recibiste y te decepcionó?",
      "¿Qué canción te da ganas de cantar a todo pulmón, sin importar dónde estés?",
      "¿Cuál es tu mayor arrepentimiento?",
      "¿Qué es lo más ridículo que has hecho para impresionar a alguien?",
      "Si pudieras cambiar algo de tu cuerpo, ¿qué sería?",
      "¿Cuál es tu comida chatarra favorita y por qué?",
      "¿Qué superhéroe crees que tendría el peor trabajo como superhéroe?",
      "¿Cuál es tu peor pesadilla recurrente?",
      "¿Qué es lo que más te pone nervioso?",
      "Si pudieras vivir en cualquier época histórica, ¿cuál elegirías?",
      "¿Cuál es la película que más veces has visto?",
      "¿Qué es lo más extraño que te ha pasado en un transporte público?",
      "¿Qué consejo le darías a tu yo más joven?",
      "¿Cuál es tu placer culpable?",
      "¿Qué famoso te parece sobrevalorado?",
      "¿Cuál es la cosa más embarazosa que te ha pasado en el trabajo o escuela?",
      "¿Si tuvieras que comer solo una cosa por el resto de tu vida, qué sería?",
      "¿Qué es lo que más te atrae de la persona de tu izquierda?",
      "¿Cuál es el momento más vergonzoso de tu infancia?",
      "¿Qué estereotipo te molesta más que te atribuyan?",
      "¿Cuál es tu mayor aspiración en la vida?",
      "¿Qué es lo que más te gusta de ti mismo?",
      "¿Si pudieras tener una conversación con cualquier persona, viva o muerta, a quién elegirías?",
      "¿Cuál es tu peor manía?",
      "¿Qué crees que la gente malinterpreta de ti?",
      "¿Cuál es el sueño más vívido que has tenido?",
      "¿Qué personaje histórico te gustaría conocer?",
      "¿Cuál es tu peor virtud?",
      "¿Qué harías si te ganaras la lotería mañana?",
      "¿Cuál es la broma más pesada que has hecho?",
      "¿Qué película te ha hecho llorar más?",
      "¿Cuál es tu mayor frustración?",
      "¿Qué personaje de videojuego te gustaría ser?",
      "¿Cuál es tu peor experiencia con la comida?",
      "¿Qué te gustaría aprender a hacer?",
      "¿Cuál es la situación más incómoda en la que te has encontrado?",
      "¿Qué te da más risa de las películas de comedia?",
      "¿Qué es lo más valiente que has hecho?",
    ],
    dare: [
      "Dale tu teléfono a la persona de tu derecha por 2 minutos para que mire lo que quiera.",
      "Deja que el grupo elija un contacto de tu WhatsApp y mándale un mensaje que diga: 'Te extraño, volvamos'.",
      "Muestra la foto más vieja o vergonzoso que tengas guardada en tu galería.",
      "Imita a alguien de este cuarto hasta que el resto adivine quién es (Tiempo: 40s)",
      "Haz 20 flexiones de pecho seguidas o tómate un trago de castigo.",
      "Canta la canción más ridícula que se te ocurra a todo volumen.",
      "Ponte un calcetín en la nariz y camina por la habitación.",
      "Haz el baile de un pollo por 30 segundos.",
      "Deja que alguien te dibuje un bigote con un lápiz.",
      "Habla con acento extranjero durante las próximas 3 rondas.",
      "Muestra la última búsqueda de Google que hiciste.",
      "Envía un emoji sin sentido a 3 contactos al azar.",
      "Haz 10 saltos de tijera.",
      "Cuenta un chiste malo hasta que alguien se ría.",
      "Pide disculpas a un objeto inanimado.",
      "Intenta hacer malabares con 3 objetos pequeños.",
      "Llama a un número al azar y dile 'Hola, ¿eres tú?'",
      "Ponte de cabeza y dile algo a alguien.",
      "Haz una reverencia como si fueras un príncipe o princesa.",
      "Escribe tu nombre con el pie.",
      "Come una cucharada de algo picante (si hay disponible) o una pizca de sal.",
      "Imita el sonido de un animal.",
      "Pasa el resto de la ronda con una expresión facial fija.",
      "Haz una pose de superhéroe.",
      "Toma una foto de tu propio pie y compártela.",
      "Inventa una historia corta usando 3 palabras al azar que te digan.",
      "Haz una imitación de un personaje de dibujos animados.",
      "Camina como si estuvieras flotando.",
      "Deja que alguien te ponga una venda en los ojos y te guíe por la habitación.",
      "Haz un masaje de pies a la persona que está a tu izquierda.",
      "Dile a la persona de enfrente 3 cosas que te gustan de ella.",
      "Escribe un poema corto sobre el objeto más cercano.",
      "Actúa como si fueras un robot.",
      "Haz el moonwalk por 15 segundos.",
      "Intenta tocarte la nariz con la lengua.",
      "Haz el sonido de una sirena.",
      "Ponte a bailar de forma exagerada por 20 segundos.",
      "Ofrece tu silla a la persona que esté de pie.",
      "Intenta hacer una pirueta.",
      "Dile a alguien un cumplido falso.",
      "Haz la imitación de un famoso haciendo algo trivial.",
      "Lanza un beso al aire y di una frase romántica.",
      "Actúa como si estuvieras poseído por un fantasma.",
      "Haz una cara graciosa.",
      "Intenta mover tus orejas.",
      "Imita a un personaje de película.",
      "Haz una rutina de ejercicios de 1 minuto.",
      "Dile a la persona de tu derecha que te gusta su peinado.",
      "Actúa como un mimo.",
      "Canta una canción de cuna a alguien.",
    ],
  },
  spicy: {
    truth: [
      "¿Qué es lo más atrevido o fetiche raro que te genera curiosidad probar en la cama?",
      "¿Cuál es el lugar más público o extraño donde has tenido relaciones?",
      "¿Quién de los presentes te parece el más atractivo sexualmente?",
      "¿Qué es lo peor que has hecho o te han hecho en la intimidad que te dio 'cringe'?",
      "¿Alguna vez has enviado fotos íntimas a alguien equivocado? ¿A quién?",
      "¿Cuál ha sido tu experiencia sexual más salvaje?",
      "¿Qué fantasía sexual te da vergüenza admitir?",
      "¿Has engañado a alguna pareja? ¿Cómo te sentiste?",
      "¿Cuál es tu mayor fetiche oculto?",
      "¿Qué es lo más loco que has hecho por sexo?",
      "¿Con quién de los presentes te gustaría tener una aventura secreta?",
      "¿Cuál es tu límite en cuanto a la exploración sexual?",
      "¿Has participado en algún juego de rol sexual? ¿Cuál?",
      "¿Qué es lo que más te excita de una persona?",
      "¿Cuál es tu secreto mejor guardado sobre tu vida sexual?",
      "¿Has usado algún juguete sexual? ¿Cuál y cómo fue la experiencia?",
      "¿Cuál es el acto sexual más incómodo en el que has participado?",
      "¿Qué harías si tu pareja te pidiera algo que te incomoda en la cama?",
      "¿Has fantaseado con tener relaciones con alguien de tu familia (sin ser incestuoso)?",
      "¿Cuál es tu posición sexual favorita y por qué?",
      "¿Qué opinas del poliamor?",
      "¿Cuál es la cosa más sucia que has dicho en la cama?",
      "¿Has tenido alguna experiencia sexual con más de una persona a la vez?",
      "¿Qué te atrae de la dominación o sumisión?",
      "¿Cuál es tu mayor miedo relacionado con el sexo?",
      "¿Has sido infiel a tu pareja actual o pasada? Describe la situación.",
      "¿Qué parte de tu cuerpo te gusta más para ser acariciada?",
      "¿Cuál es el comentario más picante que te han hecho?",
      "¿Has considerado alguna vez la posibilidad de tener sexo con un desconocido?",
      "¿Cuál es tu peor experiencia sexual?",
      "¿Qué es lo que más te excita de un desnudo?",
      "¿Has experimentado con alguna parafilias?",
      "¿Cuál es el lugar más sugerente donde has pensado en tener sexo?",
      "¿Qué papel jugarías en una escena de sadomasoquismo?",
      "¿Cuál es tu secreto más íntimo que nadie en este grupo conoce?",
      "¿Qué es lo más pervertido que has hecho en público?",
      "¿Has utilizado alguna vez una aplicación de citas para encuentros sexuales casuales?",
      "¿Cuál es tu fetiche más extraño y por qué?",
      "¿Qué es lo que más te gusta de un cuerpo ajeno?",
      "¿Te has masturbado pensando en alguien de este grupo?",
      "¿Cuál es tu fantasía más prohibida?",
      "¿Qué te haría renunciar a tu pareja actual por una noche de pasión?",
      "¿Cuál es tu mayor deseo sexual no cumplido?",
      "¿Has hecho alguna vez un trío? ¿Cómo fue la experiencia?",
      "¿Qué es lo más arriesgado que has hecho por placer sexual?",
      "¿Cuál es tu tipo de cuerpo ideal en una pareja?",
      "¿Qué te excita de la ropa interior?",
      "¿Cuál es tu tabú sexual que te gustaría romper?",
      "¿Qué harías si te propusieran una orgía?",
      "¿Cuál es la peor mentira que has dicho para conseguir sexo?",
    ],
    dare: [
      "Dale un beso apasionado en el cuello a la persona que elijas del grupo (Tiempo: 10s)",
      "Quítate dos prendas de ropa que tú no elijas, el grupo decide cuáles.",
      "Hazle un baile erótico (lap dance) a la persona que tienes enfrente durante 30 segundos (Tiempo: 30s)",
      "Deja que la persona de tu izquierda te muerda suavemente el labio o la oreja.",
      "Susúrrale al oído a la persona de tu derecha tu fantasía más sucia.",
      "Hazle una lencería improvisada a la persona de tu izquierda usando objetos de la habitación.",
      "Pasa tu lengua por el cuello de la persona que elijas durante 15 segundos.",
      "Deja que alguien te toque una parte íntima de tu cuerpo (a través de la ropa).",
      "Cierra los ojos y deja que la persona de enfrente te toque el cuerpo lentamente.",
      "Hazle una pregunta picante a la persona de tu derecha y ella debe responderla.",
      "Muestra la lencería más sexy que tengas (si la llevas puesta).",
      "Haz un striptease improvisado de 30 segundos.",
      "Deja que la persona de tu izquierda te dé una nalgada.",
      "Describe tu fantasía sexual más intensa sin censura.",
      "Mánchale los labios a la persona de tu derecha con un labial.",
      "Haz una pose sensual frente al grupo.",
      "Deja que alguien te acueste en su regazo y te acaricie el cabello.",
      "Imita una escena de película erótica.",
      "Pide a la persona que te elijas que te quite una prenda de ropa.",
      "Besa la parte del cuerpo de la persona de tu elección que más te guste.",
      "Canta una canción romántica de forma sensual.",
      "Haz una caricia profunda en la espalda de la persona de tu izquierda.",
      "Deja que alguien te dé un masaje erótico durante 1 minuto.",
      "Muestra una foto sugerente de ti mismo.",
      "Hazle una propuesta indecente a alguien del grupo.",
      "Deja que la persona de tu derecha te susurre algo al oído.",
      "Lame un trozo de hielo y pásalo por el cuerpo de la persona de tu elección.",
      "Haz un baile privado para la persona que elijas.",
      "Deja que alguien te bese en el cuello.",
      "Actúa como si estuvieras en un club de striptease.",
      "Con los ojos vendados, adivina qué parte del cuerpo te tocan.",
      "Haz un twerk durante 30 segundos.",
      "Deja que la persona de tu izquierda te mime durante 1 minuto.",
      "Cuenta una anécdota sexual embarazosa.",
      "Haz un striptease hasta quedarte en ropa interior.",
      "Dale un beso de 5 segundos a la persona que elijas.",
      "Deja que la persona de tu derecha te pida algo que hacer y debes hacerlo (dentro de lo razonable).",
      "Imita una escena de sexo salvaje.",
      "Haz un striptease parcial (quítate una prenda de ropa).",
      "Deja que alguien te acaricie suavemente la pierna.",
      "Susurra algo provocativo al oído de la persona de tu derecha.",
      "Haz una danza sensual para la persona que elijas.",
      "Deja que la persona de tu izquierda te pida una prenda de ropa y debes quitártela.",
      "Dale un beso en la mano a la persona de tu elección y dile algo sexy.",
      "Actúa como si estuvieras en un encuentro sexual secreto.",
      "Deja que la persona de tu derecha te haga un masaje en los hombros.",
      "Haz un striptease improvisado con una bufanda o pañuelo.",
      "Besa el cuello de la persona que elijas durante 10 segundos.",
      "Deja que la persona de tu izquierda te diga qué hacer durante el próximo minuto.",
      "Haz una pose sexy y mantenla durante 20 segundos.",
    ],
  },
  extreme: {
    truth: [
      "¿Cuál ha sido tu experiencia sexual más salvaje, prohibida o infiel hasta la fecha?",
      "¿Con cuántas personas has estado en una misma semana o al mismo tiempo?",
      "¿Has tenido fantasías íntimas con la pareja o ex de alguno de tus amigos aquí presentes? ¿Con quién?",
      "¿Qué es lo máximo que has hecho frente a una cámara web o sexting extremo?",
      "Con total honestidad: ¿Has hecho algún trío o intercambio y cómo terminó?",
      "¿Cuál es el acto sexual más extremo que has realizado?",
      "¿Has utilizado algún tipo de juguete sexual de forma extrema o inusual?",
      "¿Cuál es tu fantasía sexual más oscura y retorcida?",
      "¿Has participado en alguna orgía o fiesta sexual?",
      "¿Cuál es el límite de tu excitación? ¿Qué te lleva al extremo?",
      "¿Has experimentado con algún tipo de BDSM (Bondage, Dominación, Sadismo, Masoquismo)?",
      "¿Qué es lo más vergonzoso que has hecho bajo la influencia de drogas o alcohol en un contexto sexual?",
      "¿Has estado involucrado en alguna infidelidad sexual con alguien del grupo o cercano?",
      "¿Cuál es tu mayor fantasía sexual que te da miedo realizar?",
      "¿Has tenido alguna experiencia sexual que te haya marcado de forma negativa o traumática?",
      "¿Cuál es el acto sexual más raro o inesperado que has probado?",
      "¿Qué es lo que más te excita de un acto sexual prohibido o tabú?",
      "¿Has tenido alguna fantasía con un personaje ficticio y cómo la has llevado a cabo?",
      "¿Cuál es el secreto sexual más escandaloso que guardas?",
      "¿Qué harías si te propusieran un intercambio de parejas o un ménage à trois?",
      "¿Cuál es tu peor experiencia con un juego de rol sexual?",
      "¿Has consumido alguna vez material pornográfico con alguna persona del grupo?",
      "¿Cuál es la cosa más extrema que harías por placer sexual?",
      "¿Has fantaseado con tener sexo con alguien que te supera en edad o autoridad?",
      "¿Qué papel jugarías en una sesión de dominación extrema?",
      "¿Cuál es el fetiche más extraño y extremo que has considerado?",
      "¿Has participado en algún desafío sexual peligroso?",
      "¿Cuál es el secreto más sucio que has guardado de tu vida sexual?",
      "¿Qué te excita más: el riesgo, la prohibición o el tabú?",
      "¿Has experimentado con algún tipo de juego sexual extremo o peligroso?",
      "¿Cuál es tu mayor debilidad sexual?",
      "¿Qué harías si te propusieran un encuentro sexual anónimo y extremo?",
      "¿Has tenido alguna experiencia sexual con más de 3 personas a la vez?",
      "¿Cuál es el acto sexual más pervertido que has imaginado?",
      "¿Qué te atrae de la idea de ser observado mientras tienes sexo?",
      "¿Has consumido alguna vez alguna droga para potenciar tu experiencia sexual?",
      "¿Cuál es tu secreto más oscuro sobre tus preferencias sexuales?",
      "¿Qué harías si te propusieran una fantasía sexual con alguien famoso o inalcanzable?",
      "¿Cuál es el límite que nunca cruzarías en una experiencia sexual?",
      "¿Has experimentado con alguna forma de esclavitud sexual consensuada?",
      "¿Qué es lo más extremo que has hecho por cumplir una fantasía sexual?",
      "¿Has tenido alguna experiencia sexual que haya sido ilegal en algún lugar?",
      "¿Cuál es tu mayor deseo sexual que consideras inalcanzable?",
      "¿Qué te excita más: el poder o la sumisión extrema?",
      "¿Has experimentado con alguna forma de juego sexual con objetos punzantes o peligrosos?",
      "¿Cuál es tu secreto más escandaloso sobre tu vida sexual fuera de la pareja?",
      "¿Qué harías si te propusieran un encuentro sexual en un lugar público y de alto riesgo?",
      "¿Cuál es el acto sexual más salvaje que has presenciado?",
      "¿Has tenido alguna fantasía sexual que involucre violencia consensuada?",
      "¿Qué te excita más: el dolor consensuado o la humillación?",
      "¿Cuál es tu mayor secreto sexual que te atormenta?",
      "¿Qué harías si te propusieran un juego sexual que ponga en riesgo tu salud?",
      "¿Has experimentado con alguna forma de fetichismo extremo?",
      "¿Cuál es el acto sexual más extraño que has realizado bajo influencia de sustancias?",
      "¿Qué te excita más: la dominación total o la sumisión total?",
      "¿Cuál es tu fantasía sexual más transgresora y por qué?",
      "¿Has tenido alguna experiencia sexual con más de una pareja al mismo tiempo (más de un trío)?",
      "¿Qué harías si te propusieran un juego sexual que implique un riesgo físico real?",
    ],
    dare: [
      "Intercambia toda la ropa interior o una prenda íntima con la persona de tu izquierda ahora mismo.",
      "Ponte en posición de cuatro patas y deja que alguien del grupo te dé tres nalgadas fuertes.",
      "Quítate la camiseta/blusa y quédate así durante las próximas 3 rondas del juego.",
      "Simula los sonidos que haces en el clímax de una relación íntima a todo volumen durante 15 segundos (Tiempo: 15s)",
      "Dale un beso de tres (o un beso francés completo de 5 segundos) a la persona que el grupo vote. (Tiempo: 5s)",
      "Deja que la persona de tu derecha te ate con algo (cinturón, cordón) durante la próxima ronda.",
      "Permite que alguien del grupo te dé una nalgada con un objeto (si está disponible y es consensuado).",
      "Pide a la persona que elijas que te quite una prenda de ropa y te la ponga en la boca.",
      "Deja que la persona de tu izquierda te haga un tatuaje temporal (con un boli o maquillaje).",
      "Actúa como un esclavo sexual y obedece las órdenes de la persona que elijas durante 5 minutos.",
      "Realiza una escena de sumisión extrema con la persona que elijas.",
      "Deja que la persona de tu derecha te cubra el cuerpo con algo (crema, chocolate, si hay disponible).",
      "Haz un striptease completo y muéstrate al grupo.",
      "Deja que la persona de tu izquierda te vista con su ropa y te ponga a bailar.",
      "Susurra tu fantasía más oscura y prohibida al oído de la persona que elijas.",
      "Haz una escena de dominación con la persona de tu derecha.",
      "Deja que alguien del grupo te vista como quieras y te ponga a hacer algo vergonzoso.",
      "Realiza un striptease y al final regala una prenda íntima a alguien del grupo.",
      "Deja que la persona de tu izquierda te controle durante la próxima ronda.",
      "Haz un acto sexual simulado con la persona de tu elección durante 30 segundos.",
      "Deja que alguien del grupo te pida un secreto sexual y debes contarlo.",
      "Actúa como si estuvieras en una sesión de BDSM y obedece a quien elijas.",
      "Deja que la persona de tu derecha te stripe y te haga lo que quiera con tus prendas.",
      "Haz un striptease parcial mientras te tocan las partes que el grupo elija.",
      "Deja que la persona de tu izquierda te vista con ropa provocativa y te haga bailar.",
      "Realiza un acto sexual simulado con la persona de tu elección, con contacto físico más allá de lo normal.",
      "Deja que alguien del grupo te haga preguntas íntimas y debes responderlas con total honestidad.",
      "Haz un striptease y al final deja que alguien del grupo te haga un masaje erótico.",
      "Deja que la persona de tu derecha te ate los ojos y te haga lo que quiera.",
      "Actúa como si estuvieras en un club de sexo clandestino y obedece a quien elijas.",
      "Realiza un striptease con objetos eróticos (si los hay).",
      "Deja que la persona de tu izquierda te vista y te haga un baile sensual.",
      "Haz un acto sexual simulado con la persona de tu elección, con más intensidad y realismo.",
      "Deja que alguien del grupo te ponga un juguete sexual (si es consensuado y hay disponible).",
      "Haz un striptease y al final deja que alguien del grupo te bese apasionadamente.",
      "Deja que la persona de tu derecha te pida una prenda de ropa y debes quitártela y dársela.",
      "Actúa como si estuvieras en una escena de sexo salvaje y explícita.",
      "Realiza un striptease con contacto físico directo con la persona que elijas.",
      "Deja que la persona de tu izquierda te haga una pregunta íntima y debes responderla con detalle.",
      "Haz un acto sexual simulado con la persona de tu elección, con mucho más contacto y realismo.",
      "Deja que alguien del grupo te cubra con algo y te haga lo que quiera.",
      "Haz un striptease y al final deja que alguien del grupo te toque íntimamente.",
      "Deja que la persona de tu derecha te stripe y te haga un masaje erótico.",
      "Actúa como si estuvieras en un juego de rol sexual extremo y obedece a quien elijas.",
      "Realiza un striptease con penetración simulada (si es consensuado y hay una pareja).",
      "Deja que la persona de tu izquierda te vista con ropa provocativa y te haga un baile erótico.",
      "Haz un acto sexual simulado con la persona de tu elección, con énfasis en la pasión y el placer.",
      "Deja que alguien del grupo te pida algo que hacer y debes hacerlo sin excusas.",
      "Haz un striptease y al final deja que alguien del grupo te bese apasionadamente en todo el cuerpo.",
    ],
  },
};

// Application Global States
let selectedMode = "normal";
let selectedOptionType = "";
let timerInterval = null;
let timerSecondsBackup = 0; // Stores the target seconds to load on click
let isTimerRunning = false; // Prevents overlapping clicks

/**
 * Handles Game Mode Selection and updates background gradients via CSS classes
 * @param {string} mode - Choose between 'normal', 'spicy', or 'extreme'
 */
function selectMode(mode) {
  selectedMode = mode;
  const bodyElement = document.body;

  bodyElement.classList.remove("normal-theme", "spicy-theme", "extreme-theme");

  if (mode === "normal") bodyElement.classList.add("normal-theme");
  if (mode === "spicy") bodyElement.classList.add("spicy-theme");
  if (mode === "extreme") bodyElement.classList.add("extreme-theme");

  document.getElementById("modes-screen").classList.add("hidden");
  document.getElementById("choice-screen").classList.remove("hidden");
}

/**
 * Return back to main dashboard
 */
function backToModes() {
  document.getElementById("choice-screen").classList.add("hidden");
  document.getElementById("modes-screen").classList.remove("hidden");
}

/**
 * Triggers random card array query from DB based on selection type
 * @param {string} optionType - Input value 'truth' or 'dare'
 */
function selectOption(optionType) {
  selectedOptionType = optionType;

  const targetPool = gameDatabase[selectedMode][optionType];
  const randomPrompt =
    targetPool[Math.floor(Math.random() * targetPool.length)];

  const titleElement = document.getElementById("prompt-type-title");
  const contentTextElement = document.getElementById("prompt-content-text");

  contentTextElement.innerText = randomPrompt;
  titleElement.innerText = optionType === "truth" ? "VERDAD 🤫" : "RETO 🔥";

  if (optionType === "truth") {
    titleElement.className =
      "font-cabinet text-4xl md:text-5xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 mb-6 drop-shadow";
  } else {
    titleElement.className =
      "font-cabinet text-4xl md:text-5xl uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-500 mb-6 drop-shadow";
  }

  clearActiveTimer();

  // Regex match structural rule pattern string "(Tiempo: XXs)" to parse seconds
  const timeRegex = /\(Tiempo:\s*(\d+)s\)/i;
  const matchesTimePattern = randomPrompt.match(timeRegex);

  if (matchesTimePattern && optionType === "dare") {
    // Save target time, setup click handler, and display but don't start it yet!
    timerSecondsBackup = parseInt(matchesTimePattern[1], 10);
    isTimerRunning = false;

    const valueDisplay = document.getElementById("timer-countdown-value");
    const timerBoxContainer = document.getElementById("timer-container");

    valueDisplay.innerText = timerSecondsBackup;
    timerBoxContainer.classList.add("cursor-pointer");
    // Attach click listener to start on user prompt
    timerBoxContainer.onclick = function () {
      if (!isTimerRunning) {
        isTimerRunning = true;
        timerBoxContainer.classList.remove("cursor-pointer");
        startTimerCountdown(timerSecondsBackup);
      }
    };

    document.getElementById("timer-wrapper").classList.remove("hidden");
  } else {
    document.getElementById("timer-wrapper").classList.add("hidden");
  }

  document.getElementById("choice-screen").classList.add("hidden");
  document.getElementById("prompt-screen").classList.remove("hidden");
}

/**
 * Starts mathematical rendering loop for countdown timer and mobile device vibration routines
 * @param {number} totalSeconds
 */
function startTimerCountdown(totalSeconds) {
  const valueDisplay = document.getElementById("timer-countdown-value");
  const timerBoxContainer = document.getElementById("timer-container");
  let remainingTime = totalSeconds;

  timerBoxContainer.classList.remove(
    "shake-effect",
    "border-red-500",
    "text-red-500",
  );

  timerInterval = setInterval(() => {
    remainingTime--;
    valueDisplay.innerText = remainingTime;

    if (remainingTime <= 3 && remainingTime > 0) {
      timerBoxContainer.classList.add("border-red-500", "text-red-500");
      if (navigator.vibrate) navigator.vibrate(100);
    }

    if (remainingTime <= 0) {
      clearInterval(timerInterval);

      timerBoxContainer.classList.add("shake-effect", "bg-red-600/40");
      document.body.classList.add("shake-effect");

      if (navigator.vibrate) {
        navigator.vibrate([400, 200, 400, 200, 400]);
      }
    }
  }, 1000);
}

/**
 * Safe cleanup utility to reset running background intervals and prevent memory leaks
 */
function clearActiveTimer() {
  if (timerInterval) clearInterval(timerInterval);
  document.body.classList.remove("shake-effect");
  const timerBoxContainer = document.getElementById("timer-container");
  if (timerBoxContainer) {
    timerBoxContainer.classList.remove(
      "shake-effect",
      "bg-red-600/40",
      "border-red-500",
      "text-red-500",
    );
    timerBoxContainer.onclick = null; // Wipe out active click listener triggers
  }
  isTimerRunning = false;
}

/**
 * Route flow back to election view for the next player turnaround
 */
function nextTurn() {
  clearActiveTimer();
  document.getElementById("prompt-screen").classList.add("hidden");
  document.getElementById("choice-screen").classList.remove("hidden");
}
