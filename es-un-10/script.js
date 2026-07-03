let gameActiveFase = false;
let executeCounter = false;
let cardInScreen = false;
let firstTouch = false;

const cardsValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9"];

const palos = [
  {
    icono: "♣",
    color: "text-slate-900",
    svg: `<svg viewBox="0 0 24 24" class="w-full h-full" fill="#1e293b"><path d="M12 2a3.5 3.5 0 0 0-3.5 3.5c0 1.15.56 2.17 1.41 2.8A3.99 3.99 0 0 0 7 12a4 4 0 0 0 4 4c.3 0 .58-.05.86-.11l-.86 4.11h2l-.86-4.11c.28.06.56.11.86.11a4 4 0 0 0 4-4 3.99 3.99 0 0 0-2.91-3.7c.85-.63 1.41-1.65 1.41-2.8A3.5 3.5 0 0 0 12 2z"/></svg>`,
  },
  {
    icono: "♥",
    color: "text-red-500",
    svg: `<svg viewBox="0 0 24 24" class="w-full h-full" fill="#ef4444"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
  },
  {
    icono: "♠",
    color: "text-slate-900",
    svg: `<svg viewBox="0 0 24 24" class="w-full h-full" fill="#1e293b"><path d="M12 2C9 6.5 5 9.5 5 13a7 7 0 0 0 13.92 1.11l-.92 3.89h2l-.92-3.89A7 7 0 0 0 19 13c0-3.5-4-6.5-7-11zm-1 16h2v3h-2z"/></svg>`,
  },
  {
    icono: "♦",
    color: "text-red-500",
    svg: `<svg viewBox="0 0 24 24" class="w-full h-full" fill="#ef4444"><path d="M12 2L2 12l10 10 10-10L12 2z"/></svg>`,
  },
];

// Transición del botón e inicio de interfaz
function iniciarJuego() {
  document.getElementById("main-title").style.transform = "translateY(-150vh)";
  document.getElementById("main-title").style.transition =
    "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)";
  document.getElementById("btn-jugar").style.transform = "translateY(150vh)";
  document.getElementById("btn-jugar").style.transition =
    "transform 0.8s cubic-bezier(0.77, 0, 0.175, 1)";

  setTimeout(() => {
    document.getElementById("pantalla-inicio").classList.add("hidden");
    document.getElementById("pantalla-juego").classList.remove("hidden");
    gameActiveFase = true;
  }, 700);
}

// Manejador del toque en pantalla (avanza contador o saca carta)
function manejarClickPantalla() {
  if (!gameActiveFase || executeCounter) return;

  if (!firstTouch) {
    firstTouch = true;
    document.getElementById("instruccion-inicio").classList.add("hidden");
    iniciarCuentaRegresiva();
    return;
  }

  if (cardInScreen) {
    const carta = document.getElementById("carta");
    document.getElementById("tap-hint").classList.add("opacity-0");

    // Animación de salida hacia la izquierda
    carta.classList.remove("card-enter");
    carta.classList.add("card-exit");

    setTimeout(() => {
      document.getElementById("contenedor-carta").classList.add("hidden");
      carta.classList.remove("card-exit");
      cardInScreen = false;
      iniciarCuentaRegresiva();
    }, 400);
  }
}

// Cuenta regresiva 3, 2, 1
function iniciarCuentaRegresiva() {
  executeCounter = true;
  const contador = document.getElementById("contador");
  contador.classList.remove("hidden");

  let paso = 3;

  function tick() {
    contador.innerText = paso;
    contador.classList.remove("animate-countdown");
    void contador.offsetWidth; // truco para reiniciar animación css
    contador.classList.add("animate-countdown");

    setTimeout(() => {
      if (paso > 1) {
        paso--;
        tick();
      } else {
        contador.classList.add("hidden");
        executeCounter = false;
        mostrarNuevaCarta();
      }
    }, 1000);
  }
  tick();
}

// Generar y pintar la carta con la lógica del ciclo
function mostrarNuevaCarta() {
  const indexAleatorio = Math.floor(Math.random() * cardsValues.length);
  const valorCarta = cardsValues[indexAleatorio];

  // Ciclo matemático de palos basado en el índice (A=0->♣, 2=1->♥, 3=2->♠, 4=3->♦, 5=4->♣...)
  const indexPalo = indexAleatorio % 4;
  const paloActual = palos[indexPalo];

  const vSup = document.getElementById("carta-valor-sup");
  const vInf = document.getElementById("carta-valor-inf");
  const iSup = document.getElementById("carta-icono-sup");
  const iInf = document.getElementById("carta-icono-inf");

  vSup.innerText = valorCarta;
  vInf.innerText = valorCarta;
  iSup.innerText = paloActual.icono;
  iInf.innerText = paloActual.icono;
  document.getElementById("carta-svg-centro").innerHTML = paloActual.svg;

  // Cambiar colores si es rojo o negro
  const colorClase = paloActual.color.includes("red")
    ? "text-red-500"
    : "text-slate-900";
  vSup.className = `text-5xl font-black title-font ${colorClase}`;
  vInf.className = `text-5xl font-black title-font ${colorClase}`;
  iSup.className = `text-3xl mt-1 ${colorClase}`;
  iInf.className = `text-3xl mt-1 ${colorClase}`;

  document.getElementById("contenedor-carta").classList.remove("hidden");
  document.getElementById("tap-hint").classList.remove("opacity-0");
  document.getElementById("carta").classList.add("card-enter");

  cardInScreen = true;
}
