const imagePath = "./images/";
const soundPath = "./sounds/";
const sounds = {
    correct: new Audio(`${soundPath}correct.mp3`),
    incorrect: new Audio(`${soundPath}incorrect.mp3`),
};

function generateAlphabetNumbers() {
    const letters = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"].map((letter) => ({
        name: letter,
        image: `${imagePath}alfabeto/${letter}.jpg`,
    }));
    const numbers = Array.from({ length: 10 }, (_, i) => ({
        name: `${i}`,
        image: `${imagePath}alfabeto/${i}.jpg`,
    }));
    return [...letters, ...numbers];
}

function generateGreetings() {
    return [
        //{ name: "Bomdia", image: `${imagePath}saudacao/bom_dia.jpg` },
        { name: "Boatarde", image: `${imagePath}saudacao/boa_tarde.jpg` },
        { name: "Boanoite", image: `${imagePath}saudacao/boa_noite.jpg` },
        { name: "Obrigado", image: `${imagePath}saudacao/obrigado.jpg` },
        /*{ name: "Desculpa", image: `${imagePath}saudacao/desculpe.png` },
        { name: "Porfavor", image: `${imagePath}saudacao/por_favor.png` },*/
        { name: "Oi", image: `${imagePath}saudacao/oi.jpg` },
        { name: "Tchau", image: `${imagePath}saudacao/tchau.jpg` },
        { name: "Tudobem", image: `${imagePath}saudacao/tudo_bem.jpg` },
    ];
}

function generateIntroduction() {
    return [
        { name: "Qual o seu nome?", image: `${imagePath}apresentacao/seu_nome.jpg` },
        { name: "Prazer em te conhecer", image: `${imagePath}apresentacao/prazer_conhecer.jpg` },
        /*{ name: "Quando?", image: `${imagePath}apresentacao/quando.jpg` },
        { name: "Quem?", image: `${imagePath}apresentacao/quem.jpg` },
        { name: "Perguntar", image: `${imagePath}apresentacao/perguntar.jpg` },
        { name: "Por quê?", image: `${imagePath}apresentacao/porque.jpg` },
        { name: "O que?", image: `${imagePath}apresentacao/oque.jpg` },
        { name: "Onde?", image: `${imagePath}apresentacao/onde.jpg` },*/
    ];
}

const phases = [
    {
        name: "Fase 1: Alfabeto e Números",
        gestures: generateAlphabetNumbers(),
    },
    {
        name: "Fase 2: Saudações Básicas",
        gestures: generateGreetings(),
        type: "forca",
    },
    {
        name: "Fase 3: Falas Cotidianas",
        gestures: generateIntroduction(),
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startPhase(phaseIndex) {
    const phase = phases[phaseIndex];
    if (phase.type === "forca") {
        startHangmanPhase(phase, phaseIndex);
    } else {
        startStandardPhase(phase, phaseIndex);
    }
}

function startStandardPhase(phase, phaseIndex) {
    const gestures = shuffleArray(phase.gestures);
    let currentGestureIndex = 0;
    
    const gameScreen = document.getElementById("game-screen");
    gameScreen.innerHTML = `
      <h2>${phase.name}</h2>
      <p>Qual é o significado deste gesto?</p>
      <div id="gesture"></div>
      <input type="text" id="answer" placeholder="Digite sua resposta">
      <button id="submit-button">Enviar</button>
      <p id="feedback"></p>
    `;
    
    const gestureElement = document.getElementById("gesture");
    const answerInput = document.getElementById("answer");
    const feedback = document.getElementById("feedback");
    const submitButton = document.getElementById("submit-button");

    function loadGesture() {
        const currentGesture = gestures[currentGestureIndex];
        gestureElement.style.backgroundImage = `url(${currentGesture.image})`;
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = gestures[currentGestureIndex].name.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correto!";
            sounds.correct.play(); 
            currentGestureIndex++;
            
            if (currentGestureIndex < gestures.length) {
                answerInput.value = "";
                loadGesture();
            } else {
                feedback.textContent = "Você concluiu esta fase!";
                setTimeout(() => nextPhase(phaseIndex), 2000);
            }
        } else {
            feedback.textContent = "Errado! Tente novamente.";
            sounds.incorrect.play();
        }
    }

    submitButton.addEventListener("click", checkAnswer);
    
    loadGesture();
}

function startHangmanPhase(phase, phaseIndex) {
    const gestures = shuffleArray(phase.gestures);
    let currentGestureIndex = 0;
    let mistakes = 0;
    
    const gameScreen = document.getElementById("game-screen");
    
    gameScreen.innerHTML = `
      <h2>${phase.name}</h2>
      <p>Digite a letra correta para este gesto!</p>
      <div id="gesture"></div>
      <div id="hangman"></div>
      <p>Progresso: <span id="progress"></span></p>
      <input type="text" id="letter" maxlength="1" placeholder="Digite uma letra">
      <button id="submit-letter">Enviar</button>
      <p id="feedback"></p>
     `;
    
     const gestureElement = document.getElementById("gesture");
     const hangmanElement = document.getElementById("hangman");
     const progressElement = document.getElementById("progress");
     const letterInput = document.getElementById("letter");
     const feedback = document.getElementById("feedback");
     const submitLetterButton = document.getElementById("submit-letter");
     const maxMistakes = 6;

     function updateHangman() {
    const parts = [
        document.querySelector('.head'),
        document.querySelector('.body'),
        document.querySelector('.left-arm'),
        document.querySelector('.right-arm'),
        document.querySelector('.left-leg'),
        document.querySelector('.right-leg'),
    ];

    if (mistakes <= parts.length) {
        parts[mistakes - 1].classList.remove('hidden'); 
    }
}


     function loadGesture() {
         const currentGesture = gestures[currentGestureIndex];
         gestureElement.style.backgroundImage = `url(${currentGesture.image})`;
         progressElement.textContent = "_".repeat(currentGesture.name.length);
     }

     function checkLetter() {
         const currentGesture = gestures[currentGestureIndex];
         const letter = letterInput.value.trim().toLowerCase();
         const correctName = currentGesture.name.toLowerCase();

         if (!letter || correctName.includes(letter)) {
             feedback.textContent = "Letra correta!";
             updateProgress(letter, correctName);
             sounds.correct.play(); 
         } else {
             feedback.textContent = "Letra incorreta!";
             mistakes++;
             sounds.incorrect.play(); 
             updateHangman();

             if (mistakes >= maxMistakes) {
                 feedback.textContent = "Você perdeu! Reiniciando a fase.";
                 setTimeout(() => startPhase(phaseIndex), 2000);
                 return;
             }
         }

         letterInput.value = "";

         if (progressElement.textContent.toLowerCase() === correctName) {
             feedback.textContent = "Você acertou o gesto!";
             currentGestureIndex++;

             if (currentGestureIndex < gestures.length) {
                 loadGesture();
             } else {
                 feedback.textContent = "Você concluiu esta fase!";
                 setTimeout(() => nextPhase(phaseIndex), 2000);
             }
         }
     }

     function updateProgress(letter, correctName) {
         const progress = progressElement.textContent.split("");
         for (let i = 0; i < correctName.length; i++) {
             if (correctName[i] === letter) {
                 progress[i] = letter;
             }
         }
         progressElement.textContent = progress.join("");
     }

     submitLetterButton.addEventListener("click", checkLetter);
     
     loadGesture();
     updateHangman();
}

function nextPhase(phaseIndex) {
     if (phaseIndex < phases.length - 1) {
         startPhase(phaseIndex + 1);
     } else {
         alert("Parabéns! Você completou todas as fases.");
     }
}

function nextPhase(phaseIndex) {
    if (phaseIndex < phases.length - 1) {
        startPhase(phaseIndex + 1);
    } else {
        showEndScreen();
    }
}

function showEndScreen() {
    const gameScreen = document.getElementById("game-screen");
    const endScreen = document.getElementById("end-screen");

    gameScreen.style.display = "none";
    endScreen.style.display = "flex";

    const restartButton = document.getElementById("restart-button");
    restartButton.addEventListener("click", () => {
        endScreen.style.display = "none";
        gameScreen.style.display = "block";
        startPhase(0);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener("click", () => startPhase(0));
    }
});