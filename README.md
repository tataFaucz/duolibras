# DuoLibras

**DuoLibras** é uma aplicação web interativa voltada ao ensino e aprendizagem da **Língua Brasileira de Sinais (Libras)** por meio de jogos educativos. Desenvolvido com foco na acessibilidade, o sistema proporciona uma experiência lúdica, com desafios progressivos, recursos visuais e feedbacks imediatos que facilitam a imersão no conteúdo.

---

## 📁 Estrutura do Projeto

* **`index.html`** – Estrutura base da aplicação.
* **`style.css`** – Estilização, suporte a tema claro/escuro e layout responsivo.
* **`script.js`** – Lógica do jogo: controle de fases, interações, tutoriais, manipulação de DOM e tema.

### Recursos adicionais

* **Imagens**: Localizadas na pasta `images/`, organizadas por categorias (`alfabeto`, `apresentacao`, `saudacao`) e imagens representativas das fases (`fase1.jpg`, `fase2.jpg`, `fase3.jpg`).
* **Áudios**: Sons de acerto (`correct.mp3`) e erro (`incorrect.mp3`) na pasta `sounds/`.

---

## ✨ Funcionalidades

### 🌗 Alternância de Tema (Claro/Escuro)

* Botão fixo no canto superior direito.
* Ícones: lua (modo claro) e sol (modo escuro).
* Apenas o fundo é alterado; demais elementos mantêm suas cores.
* Preferência salva no navegador e restaurada automaticamente.
* Layout responsivo para dispositivos móveis.

### 📘 Tutoriais Interativos

* Antes de cada fase, o jogador acessa um tutorial com imagens e seus significados.
* Auxilia na preparação para os desafios seguintes.

### 🧩 Fases do Jogo

1. **Fase 1 – Alfabeto e Números**
   Identificação de gestos correspondentes a letras e números.

2. **Fase 2 – Saudações Básicas**
   Jogo de forca com palavras relacionadas a cumprimentos em Libras.

3. **Fase 3 – Frases Cotidianas**
   Aprendizado de expressões comuns do dia a dia.

### 📋 Quadro de Fases

* Interface fixa com visualização das fases disponíveis.
* Fases são desbloqueadas progressivamente conforme o desempenho.
* Cores fixas, independente do tema escolhido.

### 🔊 Feedback Imediato

* Respostas visuais e sonoras para acertos e erros.
* Estímulo contínuo ao aprendizado.

---

## ▶️ Como Jogar

1. Abra o arquivo `index.html` em um navegador moderno.
2. Clique em **Iniciar** para começar.
3. Siga o tutorial da fase atual.
4. Complete os desafios propostos.
5. Receba feedbacks visuais e sonoros.

---

## 🛠 Tecnologias Utilizadas

* **HTML5** – Estrutura semântica da aplicação.
* **CSS3** – Design responsivo e alternância de temas.
* **JavaScript (Vanilla)** – Controle das fases, interações, lógica de jogo e salvamento de estado.

---

## 📌 Melhorias Recentes

* Implementação do **tema claro/escuro** com persistência de estado.
* **Quadro de fases** com design fixo e responsivo.
* **Tutoriais visuais** com gestos e significados antes de cada fase.
* **Feedback sonoro e visual** para respostas corretas/incorretas.
* Inclusão de **imagens representativas** nas seleções de fase.

---

## 🚀 Melhorias Futuras

* Novas fases e categorias de aprendizado.
* Otimização completa para dispositivos móveis.
* Sistema de pontuação para gamificação.
* Tela de configurações (volume, reset de progresso, etc.).
* Animações para transições e feedbacks visuais.

---

## 🙋‍♀️ Sobre o Projeto

Este projeto foi desenvolvido por **Thais Faucz Jasse**, como parte do **Projeto de Extensão Assistiva da UDESC CCT**. O DuoLibras tem como missão facilitar o acesso à Libras por meio de uma ferramenta divertida, inclusiva e educacional.

---

## 📄 Licença

Projeto de caráter acadêmico, disponível para fins educacionais e não comerciais.

---

## 🌐 Acesso ao Jogo

Acesse o DuoLibras diretamente no navegador:

👉 https://tatafaucz.github.io/duolibras/
