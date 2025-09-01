# ✋ DuoLibras

**DuoLibras** é uma aplicação web interativa para o ensino da **Língua Brasileira de Sinais (Libras)** por meio de jogos educativos. O sistema oferece uma experiência acessível e lúdica, com desafios progressivos, recursos visuais e feedbacks imediatos.

---

## Estrutura do Projeto

- [index.html](index.html) – Estrutura base da aplicação.
- [style.css](style.css) – Estilização, tema claro/escuro e layout responsivo.
- [script.js](script.js) – Lógica do jogo: controle de fases, tutoriais, manipulação de DOM e alternância de tema.

### Recursos adicionais
- **Imagens**: Pasta [images/](images/) com subpastas para categorias (`alfabeto`, `apresentacao`, `saudacao`) e imagens das fases (`fase1.png`, `fase2.jpg`, `fase3.jpg`).
- **Áudios**: Sons de acerto ([sounds/correct.mp3](sounds/correct.mp3)) e erro ([sounds/incorrect.mp3](sounds/incorrect.mp3)).

---

## ✨ Funcionalidades

### Alternância de Tema (Claro/Escuro)
- Botão fixo no canto superior direito.
- Ícones: lua (modo claro) e sol (modo escuro).
- Preferência salva no navegador e restaurada automaticamente.
- Layout responsivo para dispositivos móveis.

### Tutoriais Interativos
- Antes de cada fase, o jogador acessa um tutorial com imagens e significados dos gestos.

### Fases do Jogo
1. **Fase 1 – Alfabeto e Números**: Identificação de gestos de letras e números.
2. **Fase 2 – Saudações Básicas**: Jogo da forca com palavras de cumprimentos em Libras.
3. **Fase 3 – Frases Cotidianas**: Aprendizado de expressões comuns do dia a dia.

### Quadro de Fases
- Visualização das fases disponíveis.
- Fases desbloqueadas progressivamente conforme o desempenho.
- Cores fixas, independente do tema.

### Feedback Imediato
- Respostas visuais e sonoras para acertos e erros.

---

## ▶️ Como Jogar

1. Abra o arquivo [index.html](index.html) em um navegador moderno.
2. Clique em **Iniciar** para começar.
3. Siga o tutorial da fase atual.
4. Complete os desafios propostos.
5. Receba feedbacks visuais e sonoros imediatos.

---

## Tecnologias Utilizadas

- **HTML5** – Estrutura semântica.
- **CSS3** – Design responsivo e alternância de temas.
- **JavaScript (Vanilla)** – Controle das fases, interações, lógica de jogo e salvamento de estado.

---

## Melhorias Recentes

- Tema claro/escuro com persistência.
- Quadro de fases responsivo.
- Tutoriais visuais antes de cada fase.
- Feedback sonoro e visual para respostas.
- Imagens representativas nas seleções de fase.

---

## Melhorias Futuras

- Novas fases e categorias.
- Otimização para dispositivos móveis.
- Sistema de progressão do usuário.
- Tela de configurações (volume, reset de progresso).
- Animações para transições e feedbacks.

---

## Sobre o Projeto

Projeto desenvolvido por **Thais Faucz Jasse** no **Projeto de Extensão Assistiva da UDESC CCT**. O DuoLibras busca facilitar o acesso à Libras de forma divertida, inclusiva e educacional.

---

## Licença

Projeto acadêmico, disponível para fins educacionais e não comerciais.

---

## Acesso ao Jogo

Acesse DuoLibras diretamente no navegador:  
👉 https://tatafaucz.github.io/duolibras/
