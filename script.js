const imagePath = "./images/";
const soundPath = "./sounds/";

const sounds = {
    correct: new Audio(`${soundPath}correct.mp3`),
    incorrect: new Audio(`${soundPath}incorrect.mp3`)
};

function generateAlphabetNumbers() {
    const letters = [..."abcdefghijklmnopqrstuvwxyz"].map((letter) => ({
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
        id: "alfabeto",
        name: "",
        gestures: generateAlphabetNumbers(),
        unlocked: true,
        image: `${imagePath}fase1.png`,
        type: "standard",
        tutorial: [
            { tipo: "vogais", titulo: "Tutorial: Vogais", conteudo: "Veja os gestos das vogais" },
            { tipo: "consoantes", titulo: "Tutorial: Consoantes", conteudo: "Veja os gestos das consoantes" },
            { tipo: "números", titulo: "Tutorial: Números", conteudo: "Veja os gestos dos números" }
        ],
        miniFases: [
            { tipo: "vogais", titulo: "Mini-Fase: Vogais", perguntas: ["a", "e", "i", "o", "u"] },
            { tipo: "consoantes", titulo: "Mini-Fase: Consoantes", perguntas: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"] },
            { tipo: "números", titulo: "Mini-Fase: Números", perguntas: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"] }
        ]
    },
    {
        id: "saudacoes",
        name: "",
        gestures: generateGreetings(),
        unlocked: false,
        image: `${imagePath}fase2.jpg`,
        type: "forca",
        tutorial: [
            { tipo: "saudacoes", titulo: "Tutorial: Saudações", conteudo: "Veja como cumprimentar em Libras." }
        ],
        miniFases: [
            { tipo: "saudacoes", titulo: "Mini-Fase: Saudações", perguntas: ["Oi", "Tchau", "Obrigado", "Desculpa"] }
        ]
    },
    {
        id: "cotidiano",
        name: "",
        gestures: generateIntroduction(),
        unlocked: false,
        image: `${imagePath}fase3.jpg`,
        type: "standard",
        tutorial: [
            { tipo: "perguntas", titulo: "Tutorial: Perguntas", conteudo: "Veja como fazer perguntas em Libras." }
        ],
        miniFases: [
            { tipo: "perguntas", titulo: "Mini-Fase: Perguntas", perguntas: ["Quem", "Quando", "Onde", "O que"] }
        ]
    }
];

let currentPhase = null;
let etapaTutorial = 0;
let etapaMiniFase = 0;

function showStartScreen() {
    document.getElementById("game-screen").classList.remove("hidden");
    document.getElementById("phase-selection").classList.add("hidden");
    document.getElementById("progress-bar-container").classList.add("hidden");
    document.getElementById("end-screen").classList.add("hidden");

    const gameScreen = document.getElementById("game-screen");
    gameScreen.innerHTML = `
        <p id="introduction">Clique em "Iniciar" para começar a aprender e jogar.</p>
        <button id="start-button" aria-label="Iniciar o jogo">Iniciar</button>
    `;
    document.getElementById("start-button").addEventListener("click", showPhaseSelection);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showPhaseSelection() {
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("phase-selection").classList.remove("hidden");
    document.getElementById("progress-bar-container").classList.add("hidden");
    document.getElementById("end-screen").classList.add("hidden");

    const phasesContainer = document.getElementById("phases-container");
    phasesContainer.innerHTML = phases
        .map((phase, index) => `
            <div class="phase-box ${phase.unlocked ? "" : "locked"}" data-index="${index}">
                <img src="${phase.image}" alt="${phase.name}" style="width: 100px; height: 100px; object-fit: cover; border-radius: 10px;">
                <p>${phase.name}</p>
            </div>
        `)
        .join("");

    document.querySelectorAll(".phase-box").forEach((box) => {
        box.addEventListener("click", () => {
            const index = parseInt(box.getAttribute("data-index"), 10);
            if (phases[index].unlocked) {
                iniciarTutorial(phases[index]);
            }
        });
    });

    document.getElementById("back-to-start-button").addEventListener("click", showStartScreen);
}

function iniciarTutorial(fase) {
    currentPhase = fase;
    etapaTutorial = 0;
    etapaMiniFase = 0;
    document.getElementById("phase-selection").classList.add("hidden");
    document.getElementById("game-screen").classList.remove("hidden");
    mostrarTutorial();
}

function mostrarTutorial() {
    const tutorial = currentPhase.tutorial[etapaTutorial];
    const gameScreen = document.getElementById("game-screen");

    gameScreen.innerHTML = `
        <h2>${tutorial.titulo}</h2>
        <p>${tutorial.conteudo}</p>
        <button id="start-mini-tutorial-button">Ver Mini-Tutorial</button>
        <button id="skip-to-phase-button" style="margin-left:10px;">Pular para Fase Principal</button>
    `;

    document.getElementById("start-mini-tutorial-button").onclick = () => mostrarMiniTutorial();
    document.getElementById("skip-to-phase-button").onclick = () => mostrarTutorialCompleto(currentPhase, phases.indexOf(currentPhase));
}

function mostrarMiniTutorial() {
    const miniFase = currentPhase.miniFases[etapaTutorial];
    const gameScreen = document.getElementById("game-screen");
    const gestosHtml = miniFase.perguntas.map(pergunta => {
        const gestureObj = currentPhase.gestures.find(g => g.name.toLowerCase() === pergunta.toLowerCase());
        return gestureObj
            ? `<div style="text-align:center; margin:10px;">
                    <div style="width:80px;height:80px;background-image:url('${gestureObj.image}');background-size:cover;background-position:center;border:1px solid #ccc;border-radius:5px;"></div>
                    <p style="margin-top:5px;font-size:14px;">${gestureObj.name}</p>
               </div>`
            : "";
    }).join("");

    gameScreen.innerHTML = `
        <h2>Mini-Tutorial: ${miniFase.titulo}</h2>
        <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
            ${gestosHtml}
        </div>
        <button id="start-mini-phase-button">Iniciar Mini-Fase</button>
        <button id="skip-to-phase-button" style="margin-left:10px;">Pular para Fase Principal</button>
    `;

    document.getElementById("start-mini-phase-button").onclick = () => iniciarMiniFase();
    document.getElementById("skip-to-phase-button").onclick = () => mostrarTutorialCompleto(currentPhase, phases.indexOf(currentPhase));
}

function iniciarMiniFase() {
    etapaMiniFase = 0;
    mostrarMiniFasePergunta();
}

function mostrarTutorialCompleto(phase, phaseIndex) {
    // Mostra todos os tutoriais da fase antes do início da fase principal
    const gameScreen = document.getElementById("game-screen");
    const tutHtml = phase.tutorial.map(tut => `
    `).join("");

    // Agrupa gestos por imagem e mostra todos os nomes/possíveis significados
    const gestureMap = {};
    phase.gestures.forEach(gestureObj => {
        if (!gestureMap[gestureObj.image]) {
            gestureMap[gestureObj.image] = [];
        }
        gestureMap[gestureObj.image].push(gestureObj.name);
    });

    const gestosHtml = Object.entries(gestureMap).map(([img, names]) => `
        <div style="text-align:center; margin:10px;">
            <div style="width:80px;height:80px;background-image:url('${img}');background-size:cover;background-position:center;border:1px solid #ccc;border-radius:5px;"></div>
            <div style="margin-top:5px;font-size:14px;">
                ${names.map(n => `<span style="display:block;">${n}</span>`).join("")}
            </div>
        </div>
    `).join("");

    gameScreen.innerHTML = `
        <div>
            ${tutHtml}
            <h3>Todos os gestos desta fase e seus significados:</h3>
            <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
                ${gestosHtml}
            </div>
            <button id="start-phase-button">Iniciar Fase</button>
        </div>
    `;
    document.getElementById("start-phase-button").onclick = () => {
        if (phase.type === "forca") {
            startHangmanPhase(phase, phaseIndex);
        } else {
            startStandardPhase(phase, phaseIndex);
        }
    };
}

function mostrarMiniFasePergunta() {
    const miniFase = currentPhase.miniFases[etapaTutorial];
    const pergunta = miniFase.perguntas[etapaMiniFase];
    const gameScreen = document.getElementById("game-screen");

    // Busca imagem do gesto correspondente à pergunta
    let gestureImage = "";
    if (currentPhase.gestures) {
        const gestureObj = currentPhase.gestures.find(g => g.name.toLowerCase() === pergunta.toLowerCase());
        if (gestureObj) gestureImage = gestureObj.image;
    }

    gameScreen.innerHTML = `
        <h2>${miniFase.titulo}</h2>
        <p>Qual é este gesto?</p>
        ${gestureImage ? `<div style="width:100px;height:100px;margin:0 auto;background-image:url('${gestureImage}');background-size:cover;background-position:center;border:1px solid #ccc;border-radius:5px;"></div>` : ""}
        <input type="text" id="resposta-input" placeholder="Digite sua resposta">
        <button id="finish-mini-phase-button">Responder</button>
        <button id="skip-to-phase-button" style="margin-left:10px;">Pular para Fase Principal</button>
        <span id="feedback"></span>
    `;

    document.getElementById("finish-mini-phase-button").onclick = () => {
        const resposta = document.getElementById("resposta-input").value.trim();
        if (resposta.toLowerCase() === pergunta.toLowerCase()) {
            document.getElementById("feedback").textContent = "✅ Correto!";
            sounds.correct.play();
        } else {
            document.getElementById("feedback").textContent = "❌ Errado, tente novamente.";
            sounds.incorrect.play();
            return;
        }

        etapaMiniFase++;
        if (etapaMiniFase < miniFase.perguntas.length) {
            setTimeout(mostrarMiniFasePergunta, 1000);
        } else {
            etapaTutorial++;
            if (etapaTutorial < currentPhase.tutorial.length) {
                mostrarTutorial();
            } else {
                mostrarTutorialCompleto(currentPhase, phases.indexOf(currentPhase));
            }
        }
    };

    document.getElementById("skip-to-phase-button").onclick = () => mostrarTutorialCompleto(currentPhase, phases.indexOf(currentPhase));
}

function startPhase(phaseIndex) {
    const phase = phases[phaseIndex];
    if (phase.type === "forca") {
        startHangmanPhase(phase, phaseIndex);
    } else {
        startStandardPhase(phase, phaseIndex);
    }
}

// FASE PRINCIPAL COM DICA REDONDA E LIMITE DE ERROS
function startStandardPhase(phase, phaseIndex) {
    const gestures = shuffleArray(phase.gestures);
    let currentGestureIndex = 0;
    let errorCount = 0;
    let hintCount = 0;
    const maxHints = 5;
    const maxErrors = 5;

    const gameScreen = document.getElementById("game-screen");
    gameScreen.innerHTML = `
        <div style="position:relative;">
            <button id="hint-button" title="Dica" style="
                position:absolute;
                top:10px;
                left:10px;
                z-index:10;
                width:40px;
                height:40px;
                border-radius:50%;
                background:#ffe066;
                border:none;
                box-shadow:0 2px 6px rgba(0,0,0,0.12);
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:22px;
                cursor:pointer;
                transition:background 0.2s;
            ">💡</button>
        </div>
        <h2>${phase.name}</h2>
        <p>Qual é o significado deste gesto?</p>
        <div id="gesture"></div>
        <div id="answer-container">
            <input type="text" id="answer" placeholder="Digite sua resposta">
            <button id="submit-button">Enviar</button>
        </div>
        <p id="feedback"></p>
        <p id="error-count" style="color:red;">Erros: 0/${maxErrors}</p>
    `;

    const gestureElement = document.getElementById("gesture");
    const answerInput = document.getElementById("answer");
    const feedback = document.getElementById("feedback");
    const submitButton = document.getElementById("submit-button");
    const hintButton = document.getElementById("hint-button");
    const errorCountElement = document.getElementById("error-count");

    function loadGesture() {
        const currentGesture = gestures[currentGestureIndex];
        gestureElement.style.backgroundImage = `url(${currentGesture.image})`;
        feedback.textContent = "";
        answerInput.value = "";
    }

    function showHint() {
        if (hintCount < maxHints) {
            const currentGesture = gestures[currentGestureIndex];
            feedback.textContent = `Dica: Começa com "${currentGesture.name[0].toUpperCase()}" e tem ${currentGesture.name.length} letras.`;
            hintCount++;
            if (hintCount >= maxHints) {
                hintButton.disabled = true;
                feedback.textContent = "Limite de dicas excedido";
            }
        } else {
            feedback.textContent = "Limite de dicas excedido";
        }
    }

    function checkAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswer = gestures[currentGestureIndex].name.toLowerCase();

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correto!";
            feedback.className = "correct";
            sounds.correct.play();
            currentGestureIndex++;
            errorCountElement.textContent = `Erros: ${errorCount}/${maxErrors}`;

            if (currentGestureIndex < gestures.length) {
                loadGesture();
            } else {
                feedback.textContent = "Você concluiu esta fase!";
                setTimeout(() => completePhase(phaseIndex), 2000);
            }
        } else {
            errorCount++;
            feedback.textContent = "Errado! Tente novamente.";
            feedback.className = "incorrect";
            sounds.incorrect.play();
            errorCountElement.textContent = `Erros: ${errorCount}/${maxErrors}`;
            if (errorCount >= maxErrors) {
                feedback.textContent = "Você atingiu o limite de erros. A fase será reiniciada.";
                setTimeout(() => startStandardPhase(phase, phaseIndex), 2000);
            }
        }
    }

    submitButton.addEventListener("click", checkAnswer);
    answerInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") checkAnswer();
    });
    hintButton.addEventListener("click", showHint);

    loadGesture();
}

function startHangmanPhase(phase, phaseIndex) {
    const gestures = shuffleArray(phase.gestures);
    let currentGestureIndex = 0;
    let progress = [];
    let errorCount = 0;
    let hintCount = 0;
    const maxHints = 5;
    const maxErrors = 5;

    const gameScreen = document.getElementById("game-screen");
    gameScreen.innerHTML = `
        <div style="position:relative;">
            <button id="hint-button" title="Dica" style="
                position:absolute;
                top:10px;
                left:10px;
                z-index:10;
                width:40px;
                height:40px;
                border-radius:50%;
                background:#ffe066;
                border:none;
                box-shadow:0 2px 6px rgba(0,0,0,0.12);
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:22px;
                cursor:pointer;
                transition:background 0.2s;
            ">💡</button>
        </div>
        <h2>${phase.name}</h2>
        <p>Digite a letra correta para este gesto!</p>
        <div id="gesture"></div>
        <div id="progress"></div>
        <input type="text" id="letter" maxlength="1" placeholder="Digite uma letra">
        <button id="submit-letter">Enviar</button>
        <p id="feedback"></p>
        <p id="error-count" style="color:red;">Erros: 0/${maxErrors}</p>
    `;

    const gestureElement = document.getElementById("gesture");
    const progressElement = document.getElementById("progress");
    const letterInput = document.getElementById("letter");
    const feedback = document.getElementById("feedback");
    const submitLetterButton = document.getElementById("submit-letter");
    const hintButton = document.getElementById("hint-button");
    const errorCountElement = document.getElementById("error-count");

    function loadGesture() {
        const currentGesture = gestures[currentGestureIndex];
        gestureElement.style.backgroundImage = `url(${currentGesture.image})`;
        progress = Array(currentGesture.name.length).fill("_");
        updateProgress();
        feedback.textContent = "";
        letterInput.value = "";
    }

    function showHint() {
        if (hintCount < maxHints) {
            const currentGesture = gestures[currentGestureIndex];
            feedback.textContent = `Dica: Começa com "${currentGesture.name[0].toUpperCase()}" e tem ${currentGesture.name.length} letras.`;
            hintCount++;
            if (hintCount >= maxHints) {
                hintButton.disabled = true;
                feedback.textContent = "Limite de dicas excedido";
            }
        } else {
            feedback.textContent = "Limite de dicas excedido";
        }
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
                errorCountElement.textContent = `Erros: ${errorCount}/${maxErrors}`;

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
            errorCount++;
            feedback.textContent = "Letra incorreta!";
            sounds.incorrect.play();
            errorCountElement.textContent = `Erros: ${errorCount}/${maxErrors}`;
            if (errorCount >= maxErrors) {
                feedback.textContent = "Você atingiu o limite de erros. A fase será reiniciada.";
                setTimeout(() => startHangmanPhase(phase, phaseIndex), 2000);
            }
        }

        letterInput.value = "";
    }

    submitLetterButton.addEventListener("click", checkLetter);
    letterInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") checkLetter();
    });
    hintButton.addEventListener("click", showHint);

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
    showStartScreen();

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
});
