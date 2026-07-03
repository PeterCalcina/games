const pairRulesDataset = {
  2: {
    letter: "T",
    text: "¡TODOS BEBEN! 🍻\nCaos total en la ronda. ¡Salud completo para los 18!",
  },
  4: {
    letter: "O",
    text: "¡OBLIGAS! 🫵\nElige a un jugador de la mesa. ¡Tú decides cuánto toma!",
  },
  6: {
    letter: "D",
    text: "¡DERECHA! 👉\nLa persona a la derecha se toma un trago completo.",
  },
  8: {
    letter: "I",
    text: "¡IZQUIERDA! 👈\nLa persona a la izquierda se toma un trago completo.",
  },
  10: {
    letter: "S",
    text: "¡SOLO! 🧍‍♂️\nTe tocó la mala suerte. ¡Te la tomas solito sin compañía!",
  },
  12: {
    letter: "E",
    text: "¡POR ÉL / ELLA! 🎭\nDi fuerte: 'Tomo por [Nombre]' justificando el porqué antes de beber.",
  },
};

const oddRulesDataset = {
  3: {
    letter: "T",
    text: "¡TODOS BEBEN! 🍻\nLa mesa entera alza el vaso. ¡Que ruede el alcohol!",
  },
  5: {
    letter: "O",
    text: "¡OBLIGAS! 🫵\nTienes el control de la previa. Elige quién toma.",
  },
  7: {
    letter: "D",
    text: "¡DERECHA! 👉\nEl trago corre hacia el lado derecho. ¡Que beba el afortunado!",
  },
  9: {
    letter: "I",
    text: "¡IZQUIERDA! 👈\nEl castigo va al lado del corazón. ¡Toma tu izquierda!",
  },
  11: {
    letter: "S",
    text: "¡SOLO! 🧍‍♂️\nEstás por tu cuenta en este tiro. ¡Fondo tú solo!",
  },
  12: {
    letter: "E",
    text: "¡POR ÉL / ELLA! 🎭\nInmólate por alguien diciendo su nombre antes de tomar.",
  },
};

let isOddModeLogicActive = false;
let currentHazardCounter = 0;
let isDiceAnimationRunning = false;

function startGameEngine() {
  document
    .getElementById("splash-screen")
    .classList.add("opacity-0", "pointer-events-none");
  checkDisplayOrientation();
}

function checkDisplayOrientation() {
  const blocker = document.getElementById("orientation-blocker");
  if (window.innerWidth > window.innerHeight) {
    blocker.classList.remove("hidden");
  } else {
    blocker.classList.add("hidden");
  }
}
window.addEventListener("resize", checkDisplayOrientation);
window.addEventListener("orientationchange", checkDisplayOrientation);

// Map of dice values to their corresponding dot positions on a 3x3 grid
const diceDotPatterns = {
  1: [4],
  2: [0, 8],
  3: [0, 4, 8],
  4: [0, 2, 6, 8],
  5: [0, 2, 4, 6, 8],
  6: [0, 2, 3, 5, 6, 8],
};

// Function to render the dots physically in the HTML
function renderDiceFace(dieId, value) {
  const dieBox = document.getElementById(dieId);
  const dots = dieBox.querySelectorAll(".dot");
  const activePositions = diceDotPatterns[value];

  dots.forEach((dot, index) => {
    if (activePositions.includes(index)) {
      dot.classList.remove("opacity-0");
      dot.classList.add("opacity-100");
    } else {
      dot.classList.remove("opacity-100");
      dot.classList.add("opacity-0");
    }
  });
}

function toggleGameModeLogic() {
  if (isDiceAnimationRunning) return;

  isOddModeLogicActive = document.getElementById("mode-logic-toggle").checked;
  resetHazardCounters();

  const labels = isOddModeLogicActive
    ? ["3", "5", "7", "9", "11", "12"]
    : ["2", "4", "6", "8", "10", "12"];
  document.getElementById("mode-label-text").innerText = isOddModeLogicActive
    ? "MODO IMPARES"
    : "MODO PARES";
  document.getElementById("danger-counter-label").innerText =
    `Acumulador de ${isOddModeLogicActive ? "Pares" : "Impares"} (Lleva 0)`;

  document.getElementById("sub-T").innerText = labels[0];
  document.getElementById("sub-O").innerText = labels[1];
  document.getElementById("sub-6").innerText = labels[2];
  document.getElementById("sub-I").innerText = labels[3];
  document.getElementById("sub-S").innerText = labels[4];
  document.getElementById("sub-E").innerText = labels[5];

  clearActiveMatrixHighlights();
  clearInlineTextBox();
}

function rollDiceEngine() {
  if (isDiceAnimationRunning) return;
  isDiceAnimationRunning = true;
  clearActiveMatrixHighlights();

  document.getElementById("action-text-container").className =
    "w-full text-center opacity-0";

  const box1 = document.getElementById("die-box-1");
  const box2 = document.getElementById("die-box-2");
  const rollBtn = document.getElementById("dice-roll-btn");

  rollBtn.disabled = true;
  box1.classList.add("dice-rolling-shake");
  box2.classList.add("dice-rolling-shake");

  let ticks = 0;
  const interval = setInterval(() => {
    // Generar caras random visuales mientras gira
    renderDiceFace("die-box-1", Math.floor(Math.random() * 6) + 1);
    renderDiceFace("die-box-2", Math.floor(Math.random() * 6) + 1);
    ticks++;

    if (ticks >= 12) {
      clearInterval(interval);
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const total = d1 + d2;

      // Fijar el resultado real final
      renderDiceFace("die-box-1", d1);
      renderDiceFace("die-box-2", d2);

      box1.classList.remove("dice-rolling-shake");
      box2.classList.remove("dice-rolling-shake");

      rollBtn.disabled = false;
      isDiceAnimationRunning = false;

      evaluateTurnResult(total);
    }
  }, 90);
}

function evaluateTurnResult(sum) {
  const isSumEven = sum % 2 === 0;
  let actionCard = null;
  let incrementHazard = false;

  if (!isOddModeLogicActive) {
    if (isSumEven && pairRulesDataset[sum]) actionCard = pairRulesDataset[sum];
    else incrementHazard = true;
  } else {
    if ((!isSumEven || sum === 12) && oddRulesDataset[sum])
      actionCard = oddRulesDataset[sum];
    else incrementHazard = true;
  }

  // Esconder el placeholder inicial ya que hay acción activa
  document.getElementById("action-placeholder").classList.add("hidden");

  if (actionCard) {
    highlightTargetMatrixNode(actionCard.letter);
    updateInlineTextBox(actionCard.letter, actionCard.text, false);
  } else if (incrementHazard) {
    processHazardAccumulator();
  }
}

function processHazardAccumulator() {
  currentHazardCounter++;
  const textType = isOddModeLogicActive ? "Pares" : "Impares";
  document.getElementById("danger-counter-label").innerText =
    `Acumulador de ${textType} (Lleva ${currentHazardCounter})`;

  if (currentHazardCounter >= 1)
    document.getElementById("hazard-dot-1").className =
      "w-5 h-5 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.4)]";
  if (currentHazardCounter >= 2)
    document.getElementById("hazard-dot-2").className =
      "w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.5)]";

  if (currentHazardCounter >= 3) {
    document.getElementById("hazard-dot-3").className =
      "w-5 h-5 rounded-full bg-red-600 shadow-[0_0_15px_rgba(220,38,38,0.7)]";
    setTimeout(() => {
      updateInlineTextBox(
        "💀 CRÍTICO",
        "¡ALGUIEN ESTA SEDIENTO! 🔥\nTercer acumulador consecutivo. ¡Te toca SECAR EL VASO completo (Fondo Fondo)! 🍻",
        true,
      );
      resetHazardCounters();
    }, 200);
  } else {
    const singularType = isOddModeLogicActive ? "PAR" : "IMPAR";
    updateInlineTextBox(
      "+1 ACUMULADO",
      `Salió un número ${singularType}. No tomas... esta vez. [${currentHazardCounter}/3].`,
      false,
    );
  }
}

function updateInlineTextBox(badgeText, bodyText, isDryUp) {
  const container = document.getElementById("action-text-container");
  const badge = document.getElementById("action-badge");
  const textNode = document.getElementById("action-text-payload");

  badge.innerText = isDryUp ? badgeText : `${badgeText}`;
  textNode.innerHTML = bodyText.replace("\n", "<br>");

  // Estilos basados en severidad
  if (isDryUp) {
    badge.className =
      "px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase mb-2 inline-block bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse";
    textNode.className =
      "text-sm md:text-base font-black leading-relaxed text-red-400 px-2";
  } else if (badgeText.includes("+1")) {
    badge.className =
      "px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase mb-2 inline-block bg-slate-800 text-slate-400 border border-slate-700";
    textNode.className =
      "text-sm font-semibold leading-relaxed text-slate-400 px-2";
  } else {
    badge.className =
      "px-2.5 py-0.5 rounded-full text-[9px] font-black tracking-widest uppercase mb-2 inline-block bg-amber-500/20 text-amber-400 border border-amber-500/30";
    textNode.className =
      "text-sm md:text-base font-bold leading-relaxed text-slate-200 px-2";
  }

  // Determinar animación aleatoria (o la explosión si es seco)
  const directionAnimations = [
    "anim-inline-up",
    "anim-inline-down",
    "anim-inline-left",
    "anim-inline-right",
  ];
  const selectedAnim = isDryUp
    ? "anim-inline-boom"
    : directionAnimations[
        Math.floor(Math.random() * directionAnimations.length)
      ];

  // Aplicar animación de irrupción limpia
  container.className = "w-full text-center";
  container.classList.add(selectedAnim);

  if (navigator.vibrate) {
    if (isDryUp) navigator.vibrate([200, 100, 200]);
    else navigator.vibrate(80);
  }
}

function highlightTargetMatrixNode(letter) {
  clearActiveMatrixHighlights();
  const cell = document.getElementById(`letter-${letter}`);
  if (cell) {
    cell.className =
      "bg-gradient-to-br from-amber-500 to-orange-600 border border-amber-300 rounded-2xl py-4 text-center transform scale-105 shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-all duration-200";
    cell.firstElementChild.className =
      "block font-syne text-2xl md:text-3xl opacity-100 text-slate-950 font-black";
    cell.lastElementChild.className =
      "text-[9px] uppercase tracking-wider font-black block mt-1 opacity-80 text-slate-900";
  }
}

function clearActiveMatrixHighlights() {
  ["T", "O", "D", "I", "S", "E"].forEach((l) => {
    const cell = document.getElementById(`letter-${l}`);
    if (cell) {
      cell.className =
        "bg-white/5 border border-white/5 rounded-2xl py-4 text-center transition-all duration-300";
      cell.firstElementChild.className =
        "block font-syne text-2xl md:text-3xl opacity-20 text-white";
      cell.lastElementChild.className =
        "text-[9px] uppercase tracking-wider font-bold block mt-1 opacity-30 text-slate-400";
    }
  });
}

function clearInlineTextBox() {
  document.getElementById("action-text-container").className =
    "w-full text-center opacity-0";
  document.getElementById("action-placeholder").classList.remove("hidden");
}

function resetHazardCounters() {
  currentHazardCounter = 0;
  const textType = isOddModeLogicActive ? "Pares" : "Impares";
  document.getElementById("danger-counter-label").innerText =
    `Acumulador de ${textType} (Lleva 0)`;
  document.getElementById("hazard-dot-1").className =
    "w-5 h-5 rounded-full bg-slate-900 border border-white/5 transition-all duration-300";
  document.getElementById("hazard-dot-2").className =
    "w-5 h-5 rounded-full bg-slate-900 border border-white/5 transition-all duration-300";
  document.getElementById("hazard-dot-3").className =
    "w-5 h-5 rounded-full bg-slate-900 border border-white/5 transition-all duration-300";
}
