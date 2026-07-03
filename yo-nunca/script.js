/**
 * Never Have I Ever - Localized Phrases Repository
 * Hardcore party entries engineered for adult group bonding
 */
const neverPhrasesDataset = [
    "Yo nunca nunca he tenido una fantasía con el hermano/a o mejor amigo/a de mi pareja.",
    "Yo nunca nunca he besado a dos personas diferentes en la misma noche de fiesta.",
    "Yo nunca nunca he enviado un mensaje subido de tono a la persona equivocada y me tocó fingir demencia.",
    "Yo nunca nunca he tenido relaciones en un lugar público donde corría el riesgo de que me atraparan.",
    "Yo nunca nunca me he sentido atraído/a sexualmente por alguien de esta habitación.",
    "Yo nunca nunca he tenido un encuentro de una noche con alguien que acabo de conocer en un bar.",
    "Yo nunca nunca he mirado el celular de mi pareja o de mi 'casi algo' sin que se diera cuenta.",
    "Yo nunca nunca he fingido un orgasmo para terminar rápido una situación incómoda.",
    "Yo nunca nunca he hecho un trío ni he participado en una experiencia con más de dos personas.",
    "Yo nunca nunca he borrado mensajes de mi teléfono antes de que mi pareja o amigos los leyeran.",
    "Yo nunca nunca me he arrepentido locamente al día siguiente de la persona con la que pasé la noche.",
    "Yo nunca nunca he usado una app de citas estando en una relación formal."
];

// Runtime Session Memory State
let historyTrashBin = [];

/**
 * Orchestrates card slide mechanics, random allocation, and non-repeating state management
 */
function nextNeverPhrase() {
    const cardContainer = document.getElementById('never-card');
    const textViewport = document.getElementById('never-text');

    // Refill the active dynamic queue once all options have been exhausted
    if (historyTrashBin.length === neverPhrasesDataset.length) {
        historyTrashBin = [];
    }

    // Filter array dataset to extract unplayed statements safely
    let remainingPool = neverPhrasesDataset.filter(entry => !historyTrashBin.includes(entry));
    const randomSelection = remainingPool[Math.floor(Math.random() * remainingPool.length)];
    
    // Append tracking identifier to state
    historyTrashBin.push(randomSelection);

    // Apply cardFlyUp exit animation class to simulate physical card dealing
    cardContainer.classList.add('card-fly-up');
    
    // Execute data swaps exactly halfway through the visual screen shift
    setTimeout(() => {
        textViewport.innerText = randomSelection;
        cardContainer.classList.remove('card-fly-up');
        
        // Force rendering architecture engine layout reflow to restart entry animation seamlessly
        cardContainer.classList.remove('animate-fade-in');
        void cardContainer.offsetWidth; 
        cardContainer.classList.add('animate-fade-in');
    }, 380);
}

// Fire the application's first prompt instantly upon initialization lifecycle hook
document.addEventListener("DOMContentLoaded", () => {
    // Direct initialization call
    const pool = neverPhrasesDataset;
    const initialPhrase = pool[Math.floor(Math.random() * pool.length)];
    historyTrashBin.push(initialPhrase);
    document.getElementById('never-text').innerText = initialPhrase;
});