/**
 * Comprehensive Dataset containing exactly 32 Group-Targeted Party Punishments
 * Optimized specifically for large unacquainted 18-player layouts
 */
const punishmentsPool = [
  "Beben todos los que tengan el celular con menos del 30% de batería. ¡A cargar!",
  "Todos los hombres de la ronda se toman un trago de inmediato.",
  "Todas las mujeres de la ronda se toman un trago de inmediato.",
  "Beben todos los que tengan puesto zapatos blancos o tenis blancos.",
  "El último en poner la mano sobre la mesa o el suelo se toma dos tragos de castigo.",
  "Beben todos los que estén solteros en este momento en la habitación.",
  "Beben todos los que estén actualmente en una relación o 'comprometidos'.",
  "Guerra de miradas: Quien giró la ruleta elige a un desconocido. Se miran fijo, el primero en sonreír o parpadear bebe.",
  "Beben todos los que tengan algún tatuaje en su cuerpo.",
  "Beben todos los que tengan puesto algo de color negro en este instante.",
  "El que tenga el carro o la moto más lejos parqueada se toma un trago de consuelo.",
  "El que tenga la estatura más baja del grupo se toma un trago (¡Salud pequeños!).",
  "El que tenga la estatura más alta del grupo se toma un shot completo.",
  "Beben todos los que hayan asistido a un concierto en los últimos 3 meses.",
  "Todos los que tengan hermanos mayores se toman un trago.",
  "El que tenga el nombre más corto de la sala se bebe un shot.",
  "Todos los que hayan viajado fuera del país este año beben.",
  "El último en mandar un mensaje de texto hoy se toma dos tragos.",
  "Todos los que prefieran el café sobre el té beben.",
  "Quien tenga el objeto más brillante cerca se lo debe poner en la frente por 5 minutos.",
  "Beben todos los que se hayan teñido el pelo alguna vez.",
  "El que haya hecho una locura por amor bebe.",
  "Todos los que hayan cantado karaoke en el último mes beben.",
  "El que haya compartido un meme gracioso hoy bebe.",
  "Beben todos los que hayan tenido un sueño lúcido.",
  "El que haya cocinado algo nuevo esta semana bebe.",
  "Todos los que hayan aprendido algo nuevo hoy beben.",
  "El que tenga el accesorio más caro puesto bebe.",
  "Beben todos los que se ríen de sus propios chistes.",
  "El último en llegar a la reunión bebe.",
  "Todos los que usen gafas beben.",
  "Quien tenga la piel más clara bebe.",
  "Quien tenga la piel más oscura bebe.",
  "El que haya dicho 'no pasa nada' pero en realidad sí le pasa, bebe.",
  "Todos los que hayan bailado hoy beben.",
  "El que haya usado un filtro de Instagram hoy bebe.",
  "Todos los que tengan un lunar visible beben.",
  "El que tenga la cartera o monedero más antiguo bebe.",
  "Beben todos los que hayan hecho trampa en un juego alguna vez.",
  "El que haya soñado con alguien presente en la fiesta bebe.",
  "Todos los que hayan dicho una grosería hoy beben.",
  "El que se haya escapado de alguna responsabilidad bebe.",
  "Beben todos los que tengan un vicio confesable.",
  "El que haya hecho una lista de tareas y no la haya cumplido bebe.",
  "Todos los que hayan visto una película de terror recientemente beben.",
  "El que haya estado a punto de comprar algo impulsivamente bebe.",
  "Beben todos los que se sepan la letra de una canción completa.",
  "El que haya tenido una conversación profunda con un desconocido bebe.",
  "Todos los que se hayan peleado con alguien por redes sociales beben.",
  "El que tenga el número de teléfono más largo (incluyendo código de país) bebe.",
  "Beben todos los que hayan intentado ligar en esta fiesta.",
  "El que haya perdido las llaves recientemente bebe.",
  "Todos los que hayan usado calcetines desparejados beben.",
  "El que se haya puesto el despertador para despertarse y luego lo haya pospuesto bebe.",
  "Beben todos los que hayan comido algo picante hoy.",
  "El que haya hecho una promesa y la haya roto bebe.",
  "Todos los que hayan hecho reír a alguien hoy beben.",
  "El que tenga el cabello más largo bebe.",
  "El que tenga el cabello más corto bebe.",
  "Beben todos los que hayan practicado algún deporte esta semana.",
  "El que haya dicho 'una más y me voy' y se quedó bebiendo bebe.",
  "Todos los que tengan alguna cicatriz visible beben.",
  "El que haya organizado esta fiesta bebe.",
  "Beben todos los que hayan pedido comida a domicilio en las últimas 48 horas.",
  "El que tenga el peor gusto musical del grupo (según votación popular) bebe.",
  "Todos los que hayan sentido que esta fiesta es la mejor de sus vidas beben.",
  "Todos los que sean hijos únicos se toman un trago doble.",
  "El que giró la ruleta elige a alguien que no conozca bien; ambos se presentan y toman juntos.",
  "Beben todos los que se hayan despertado hoy después de las 10:00 AM.",
  "Cascada obligatoria: Quien giró empieza a beber, el de su izquierda le sigue, y nadie para hasta que el de su derecha termine.",
  "Beben todos los que tengan una prenda de ropa de Jean (denim) puesta.",
  "Los que lleven puestos accesorios (anillos, cadenas, relojes, pulseras) se toman un trago.",
  "Beben todos los que hayan dicho una mentira piadosa para asistir a esta fiesta hoy.",
  "Beben todos los que hablen más de dos idiomas con fluidez.",
  "El que tenga el cumpleaños más cercano al día de hoy se toma un trago de festejo.",
  "Los que tengan más de 24 años beben; los menores de 24 se salvan esta ronda.",
  "Beben todos los que prefieran el Gin/Vodka sobre el Ron/Aguardiente/Fernet.",
  "El que tenga la foto de perfil de WhatsApp más vieja o vergonzosa se toma un trago, el grupo juzga.",
  "Beben todos los que hayan stalkeado a su ex o a su 'casi algo' en las últimas 24 horas.",
  "El grupo vota rápidamente quién es el más fiestero/borracho del salón. El ganador bebe.",
  "Beben todos los que lleven medias (calcetines) con algún diseño de color o muñequito.",
  "El que tenga el nombre más largo contando sus dos apellidos bebe de inmediato.",
  "¡Ronda libre! Nadie bebe... excepto la persona que giró la ruleta por confiada.",
];

// Structural Engine Variables
let currentWheelAngle = 0;
let isSpinning = false;

/**
 * Initializes visual wheel rendering divisions mathematically upon window payload mount
 */
document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.getElementById("wheel-element");
  const totalSlices = 12; // Visual structural wedges for styling candy contrast
  const colors = [
    "#f59e0b",
    "#d97706",
    "#b45309",
    "#78350f",
    "#0f172a",
    "#1e293b",
  ];

  for (let i = 0; i < totalSlices; i++) {
    const rotationAngle = (360 / totalSlices) * i;

    // Build visual sector separation lines inside CSS
    const line = document.createElement("div");
    line.className = "wheel-slice-line";
    line.style.transform = `translateX(-50%) rotate(${rotationAngle}deg)`;
    line.style.background = colors[i % colors.length];
    // Inject slight opacity overlays to contrast sections beautifully
    line.style.width = "40px";
    line.style.clipPath = "polygon(50% 100%, 0 0, 100% 0)";

    wheel.appendChild(line);
  }
});

/**
 * Destroys view state 1 using structural CSS translations to deploy gameplay canvas
 */
function startGame() {
  const landing = document.getElementById("landing-screen");
  landing.classList.add("screen-exit-anim");

  setTimeout(() => {
    landing.classList.add("hidden");
    const gameScreen = document.getElementById("game-screen");
    gameScreen.classList.remove("hidden");
    gameScreen.classList.add("animate-fade-in");
  }, 380);
}

/**
 * Triggers rotational dynamic algorithms to roll wheel assets cleanly
 */
function spinWheel() {
  if (isSpinning) return;
  isSpinning = true;

  const wheel = document.getElementById("wheel-element");
  const spinButton = document.getElementById("center-spin-btn");

  spinButton.disabled = true;
  spinButton.classList.add("opacity-50", "scale-95");

  // 🔴 LA SOLUCIÓN: Forzamos la transición desde JS para anular el conflicto con Tailwind
  wheel.style.transition = "transform 4s cubic-bezier(0.1, 0.9, 0.2, 1)";

  // Calculamos los grados (entre 5 y 8 vueltas completas + un pico aleatorio)
  const extraSpinsDegrees = (Math.floor(Math.random() * 4) + 5) * 360;
  const randomOffsetTarget = Math.floor(Math.random() * 360);
  currentWheelAngle += extraSpinsDegrees + randomOffsetTarget;

  // Aplicamos la rotación
  wheel.style.transform = `rotate(${currentWheelAngle}deg)`;

  // Efecto de vibración (ticker)
  let tickInterval = setInterval(() => {
    if (navigator.vibrate) navigator.vibrate(10);
  }, 150);

  // Cuando pasen exactamente los 4 segundos de la animación visual, abrimos el popover
  setTimeout(() => {
    clearInterval(tickInterval);
    isSpinning = false;

    spinButton.disabled = false;
    spinButton.classList.remove("opacity-50", "scale-95");

    // Extraemos un castigo aleatorio de la base de datos
    const luckyStrike =
      punishmentsPool[Math.floor(Math.random() * punishmentsPool.length)];
    openPopover(luckyStrike);
  }, 4000);
}

/**
 * Deploys popover interface elements with reactive scaling behaviors
 * @param {string} text
 */
function openPopover(text) {
  const popoverContainer = document.getElementById("punishment-popover");
  const innerContentFrame = document.getElementById("popover-content");
  const textOutput = document.getElementById("punishment-output-text");

  textOutput.innerText = text;
  popoverContainer.classList.remove("hidden");

  // Smooth layout operational window scaling delays
  setTimeout(() => {
    innerContentFrame.classList.remove("scale-90", "opacity-0");
    innerContentFrame.classList.add("scale-100", "opacity-100");
  }, 50);

  // Heavy long smartphone vibration alert sequence to warn users at the table
  if (navigator.vibrate) navigator.vibrate([200, 100, 300]);
}

/**
 * Destroys active popover visibility status to return controls back to the rotation engine
 */
function closePopover() {
  const popoverContainer = document.getElementById("punishment-popover");
  const innerContentFrame = document.getElementById("popover-content");

  innerContentFrame.classList.remove("scale-100", "opacity-100");
  innerContentFrame.classList.add("scale-90", "opacity-0");

  setTimeout(() => {
    popoverContainer.classList.add("hidden");
  }, 250);
}
