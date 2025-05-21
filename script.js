const imagePath = "./images/";
const soundPath = "./sounds/";

const sounds = {
    correct: new Audio(`${soundPath}correct.mp3`),
    incorrect: new Audio(`${soundPath}incorrect.mp3`)
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
        { name: "Bomdia", image: `${imagePath}saudacao/bom_dia.jpg` },
        { name: "Boatarde", image: `${imagePath}saudacao/boa_tarde.jpg` },
        { name: "Boanoite", image: `${imagePath}saudacao/boa_noite.jpg` },
        { name: "Obrigado", image: `${imagePath}saudacao/obrigado.jpg` },
        { name: "Desculpa", image: `${imagePath}saudacao/desculpe.png` },
        { name: "Porfavor", image: `${imagePath}saudacao/por_favor.png` },
        { name: "Oi", image: `${imagePath}saudacao/oi.jpg` },
        { name: "Tchau", image: `${imagePath}saudacao/tchau.jpg` },
        { name: "Tudobem", image: `${imagePath}saudacao/tudo_bem.jpg` },
    ];
}

function generateIntroduction() {
    return [
        { name: "Qual o seu nome", image: `${imagePath}apresentacao/seu_nome.jpg` },
        { name: "Prazer em te conhecer", image: `${imagePath}apresentacao/prazer_conhecer.jpg` },
        { name: "Quando", image: `${imagePath}apresentacao/quando.jpg` },
        { name: "Quem", image: `${imagePath}apresentacao/quem.jpg` },
        { name: "Perguntar", image: `${imagePath}apresentacao/perguntar.jpg` },
        { name: "Por que", image: `${imagePath}apresentacao/porque.jpg` },
        { name: "O que", image: `${imagePath}apresentacao/oque.jpg` },
        { name: "Onde", image: `${imagePath}apresentacao/onde.jpg` },
    ];
}

const phases = [
    {
        name: "Fase 1: Alfabeto e Números",
        gestures: generateAlphabetNumbers(),
        unlocked: true,
        image: `${imagePath}fase1.png`
    },
    {
        name: "Fase 2: Saudações Básicas",
        gestures: generateGreetings(),
        type: "forca",
        unlocked: false,
        image: `${imagePath}fase2.jpg`
    },
    {
        name: "Fase 3: Falas Cotidianas",
        gestures: generateIntroduction(),
        unlocked: false,
        image: `${imagePath}fase3.jpg`
    },
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showPhaseSelection() {
    const gameScreen = document.getElementById("game-screen");
    const phaseSelection = document.getElementById("phase-selection");
    const phasesContainer = document.getElementById("phases-container");

    gameScreen.style.display = "none";
    phaseSelection.style.display = "block";

    phasesContainer.innerHTML = phases
        .map((phase, index) => `
            <div class="phase-box ${phase.unlocked ? "" : "locked"}" data-index="${index}">
                <img src="${phase.image}" alt="${phase.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">
            </div>
        `)
        .join("");

    document.querySelectorAll(".phase-box").forEach((box) => {
        box.addEventListener("click", () => {
            const index = parseInt(box.getAttribute("data-index"), 10);
            if (phases[index].unlocked) {
                showTutorial(index);
            }
        });
    });

    const backToStartButton = document.getElementById("back-to-start-button");
    backToStartButton.addEventListener("click", showStartScreen);
}

function showStartScreen() {
    const gameScreen = document.getElementById("game-screen");
    const phaseSelection = document.getElementById("phase-selection");

    phaseSelection.style.display = "none";
    gameScreen.style.display = "block";

    gameScreen.innerHTML = `
        <p id="introduction">Bem-vindo ao DuoLibras! Clique em "Iniciar" para começar a aprender e jogar.</p>
        <button id="start-button" aria-label="Iniciar o jogo">Iniciar</button>
    `;

    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", showPhaseSelection);
}

function showTutorial(phaseIndex) {
    const phase = phases[phaseIndex];
    const gameScreen = document.getElementById("game-screen");
    const phaseSelection = document.getElementById("phase-selection");

    phaseSelection.style.display = "none";
    gameScreen.style.display = "block";

    gameScreen.innerHTML = `
        <h2>Tutorial: ${phase.name}</h2>
        <div id="tutorial-container" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 10px;">
            ${phase.gestures.map(gesture => `
                <div style="text-align: center;">
                    <div style="width: 100px; height: 100px; background-image: url(${gesture.image}); background-size: cover; background-position: center; border: 1px solid #ccc; border-radius: 5px;"></div>
                    <p style="margin-top: 5px; font-size: 14px;">${gesture.name}</p>
                </div>
            `).join('')}
        </div>
        <button id="start-phase-button" style="margin-top: 20px; padding: 10px 20px; font-size: 16px;">Iniciar Fase</button>
    `;

    const startPhaseButton = document.getElementById("start-phase-button");
    startPhaseButton.addEventListener("click", () => startPhase(phaseIndex));
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
        <div id="answer-container">
            <input type="text" id="answer" placeholder="Digite sua resposta">
            <button id="submit-button">Enviar</button>
        </div>
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
            feedback.className = "correct";
            sounds.correct.play();
            currentGestureIndex++;

            if (currentGestureIndex < gestures.length) {
                answerInput.value = "";
                loadGesture();
            } else {
                feedback.textContent = "Você concluiu esta fase!";
                setTimeout(() => completePhase(phaseIndex), 2000);
            }
        } else {
            feedback.textContent = "Errado! Tente novamente.";
            feedback.className = "incorrect";
            sounds.incorrect.play();
        }
    }

    submitButton.addEventListener("click", checkAnswer);

    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") checkAnswer();
    });

    loadGesture();
}

function startHangmanPhase(phase, phaseIndex) {
    const gestures = shuffleArray(phase.gestures);
    let currentGestureIndex = 0;
    let progress = [];

    const gameScreen = document.getElementById("game-screen");
    gameScreen.innerHTML = `
        <h2>${phase.name}</h2>
        <p>Digite a letra correta para este gesto!</p>
        <div id="gesture"></div>
        <div id="progress"></div>
        <input type="text" id="letter" maxlength="1" placeholder="Digite uma letra">
        <button id="submit-letter">Enviar</button>
        <p id="feedback"></p>
    `;

    const gestureElement = document.getElementById("gesture");
    const progressElement = document.getElementById("progress");
    const letterInput = document.getElementById("letter");
    const feedback = document.getElementById("feedback");
    const submitLetterButton = document.getElementById("submit-letter");

    function loadGesture() {
        const currentGesture = gestures[currentGestureIndex];
        gestureElement.style.backgroundImage = `url(${currentGesture.image})`;
        progress = Array(currentGesture.name.length).fill("_");
        updateProgress();
    }

    function updateProgress() {
        progressElement.textContent = progress.join(" ");
    }

    function checkLetter() {
        const letter = letterInput.value.trim().toLowerCase();
        const currentGesture = gestures[currentGestureIndex];
        const correctName = currentGesture.name.toLowerCase();

        if (!letter || letter.length !== 1) {
            feedback.textContent = "Por favor, insira uma única letra.";
            return;
        }

        if (correctName.includes(letter)) {
            feedback.textContent = "Letra correta!";
            sounds.correct.play();

            for (let i = 0; i < correctName.length; i++) {
                if (correctName[i] === letter) {
                    progress[i] = letter;
                }
            }
            updateProgress();

            if (progress.join("") === correctName) {
                feedback.textContent = "Você acertou o gesto!";
                currentGestureIndex++;

                if (currentGestureIndex < gestures.length) {
                    setTimeout(() => {
                        feedback.textContent = "";
                        loadGesture();
                    }, 1000);
                } else {
                    feedback.textContent = "Você concluiu esta fase!";
                    setTimeout(() => completePhase(phaseIndex), 2000);
                }
            }
        } else {
            feedback.textContent = "Letra incorreta!";
            sounds.incorrect.play();
        }

        letterInput.value = "";
    }

    submitLetterButton.addEventListener("click", checkLetter);

    letterInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") checkLetter();
    });

    loadGesture();
}

function completePhase(phaseIndex) {
    if (phaseIndex < phases.length - 1) {
        phases[phaseIndex + 1].unlocked = true;
    } else {
        phases.forEach(phase => phase.unlocked = true); 
    }
    showPhaseSelection();
}

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const restartButton = document.getElementById("restart-button");
    const themeToggle = document.getElementById("theme-toggle");

    const currentTheme = localStorage.getItem("theme") || "light";
    document.body.classList.add(currentTheme + "-mode");
    themeToggle.textContent = currentTheme === "light" ? "🌙" : "☀️";

    themeToggle.addEventListener("click", () => {
        const isLightMode = document.body.classList.contains("light-mode");
        document.body.classList.toggle("light-mode", !isLightMode);
        document.body.classList.toggle("dark-mode", isLightMode);

        themeToggle.textContent = isLightMode ? "☀️" : "🌙";

        localStorage.setItem("theme", isLightMode ? "dark" : "light");
    });

    startButton.addEventListener("click", showPhaseSelection);

    if (restartButton) {
        restartButton.addEventListener("click", () => {
            phases.forEach((phase, index) => {
                phase.unlocked = index === 0; 
            });
            showPhaseSelection();
        });
    }
});