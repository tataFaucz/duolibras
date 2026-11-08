# ✋ DuoLibras


**Uma plataforma gamificada e acessível para o letramento e alfabetização em Libras.**

*Estudo publicado nos anais do V Congresso Brasileiro de Pesquisa e Desenvolvimento em Tecnologia Assistiva (CBTA 2025) e do 1st International Congress on Research and Development in Assistive Technology (ICRDAT).*

---

## 📄 Publicação Científica {#publicacao-cientifica}

O desenvolvimento e a avaliação do DuoLibras foram formalizados como **relato técnico** e publicados como capítulo dos anais do **V CBTA 2025**, no livro *Inovação e a Inclusão em Tecnologia Assistiva — Volume 4: Da Autonomia no Espaço ao Suporte no Aprender* (Canal 6 Editora, Bauru/SP).

> **JASSE, Thais Faucz.** Duolibras: uma plataforma gamificada para letramento e alfabetização em Libras. *In*: OKIMOTO, Maria Lúcia Leite Ribeiro; GÓES, Anderson Roges Teixeira; KUBOTA, Flávio Issao; PIEKAS, Mari Inês; GÓES, Heliza Colaço; SANTOS, Ângela Maria dos; TEIXEIRA, Vanessa; BENTO JÚNIOR, Álvaro Ricardo Ferreira; MIGUEL, Vinícius Luiz Lisboa (org.). **Inovação e a Inclusão em Tecnologia Assistiva**: da autonomia no espaço ao suporte no aprender. Volume 4. 1. ed. Bauru: Canal 6 Editora, 2026. p. 353–361. ISBN 978-85-7917-713-2. DOI: [10.52050/9788579177132-31](https://doi.org/10.52050/9788579177132-31).

**Resumo do estudo:** descreve o desenvolvimento do DuoLibras fundamentado no Design Centrado no Usuário (DCU) e nas diretrizes **WCAG 2.1**, envolvendo levantamento de requisitos com usuários, prototipagem iterativa e testes de usabilidade. Nos testes preliminares com 12 participantes (educadores, familiares e membros da comunidade surda), observou-se **+40% de tempo médio de engajamento** em relação a métodos tradicionais de ensino digital, **78% de conclusão dos módulos** na primeira semana de uso e nenhum problema crítico de acessibilidade em auditorias automatizadas (axe-core).

Citar este trabalho — formatos alternativos (BibTeX · APA · ABNT)

**BibTeX**

```bibtex

@incollection{jasse2025duolibras,

author = {Jasse, Thais Faucz},

title = {Duolibras: uma plataforma gamificada para letramento e alfabetização em Libras},

booktitle = {Inova{\c{c}}{\~a}o e a Inclus{\~a}o em Tecnologia Assistiva: da autonomia no espa{\c{c}}o ao suporte no aprender},

volume = {4},

editor = {Okimoto, Maria L{\'u}cia Leite Ribeiro and others},

year = {2026},

publisher = {Canal 6 Editora},

address = {Bauru, SP},

pages = {353--361},

isbn = {978-85-7917-713-2},

doi = {10.52050/9788579177132-31},

url = {https://doi.org/10.52050/9788579177132-31}

}

```

**APA (7ª edição)**

> Jasse, T. F. (2026). Duolibras: Uma plataforma gamificada para letramento e alfabetização em Libras. Em M. L. L. R. Okimoto et al. (Orgs.), *Inovação e a inclusão em tecnologia assistiva: Da autonomia no espaço ao suporte no aprender* (Vol. 4, pp. 353–361). Canal 6 Editora. https://doi.org/10.52050/9788579177132-31


🔗 **Links úteis:** [Ler o capítulo completo (PDF)](https://canal6.com.br/livros_loja/CBTA2025/CBTA2025_V4_31.pdf) · [Visualizar o registro no DOI](https://doi.org/10.52050/9788579177132-31)

---

## 👋 Boas-vindas!

**DuoLibras** é uma aplicação web interativa para o ensino da **Língua Brasileira de Sinais (Libras)** por meio de jogos educativos. O sistema oferece uma experiência acessível e lúdica, com desafios progressivos, recursos visuais e feedbacks imediatos.

---

## Estrutura do Projeto

| Arquivo | Descrição |

| :--- | :--- |

| [index.html](index.html) | Estrutura base da aplicação |

| [style.css](style.css) | Estilização, tema claro/escuro e layout responsivo |

| [script.js](script.js) | Lógica do jogo: controle de fases, tutoriais, manipulação de DOM e alternância de tema |


### Recursos adicionais

- **Imagens**: Pasta [images/](images/) com subpastas para categorias (`alfabeto`, `apresentacao`, `saudacao`) e imagens das fases (`fase1.png`, `fase2.jpg`, `fase3.jpg`).

- **Áudios**: Sons de acerto ([sounds/correct.mp3](sounds/correct.mp3)) e erro ([sounds/incorrect.mp3](sounds/incorrect.mp3)).

---

## ✨ Funcionalidades

### 🎨 Alternância de Tema (Claro/Escuro)

- Botão fixo no canto superior direito.

- Ícones: lua (modo claro) e sol (modo escuro).

- Preferência salva no navegador e restaurada automaticamente.

- Layout responsivo para dispositivos móveis.

### 🧭 Tutoriais Interativos

- Antes de cada fase, o jogador acessa um tutorial com imagens e significados dos gestos.

### 🧩 Fases do Jogo

1. **Fase 1 – Alfabeto e Números**: Identificação de gestos de letras e números.

2. **Fase 2 – Saudações Básicas**: Jogo da forca com palavras de cumprimentos em Libras.

3. **Fase 3 – Frases Cotidianas**: Aprendizado de expressões comuns do dia a dia.

### 🗂️ Quadro de Fases

- Visualização das fases disponíveis.

- Fases desbloqueadas progressivamente conforme o desempenho.

- Cores fixas, independente do tema.

### ⚡ Feedback Imediato

- Respostas visuais e sonoras para acertos e erros.

---

## ▶️ Como Jogar

1. Abra o arquivo [index.html](index.html) em um navegador moderno.

2. Clique em **Iniciar** para começar.

3. Siga o tutorial da fase atual.

4. Complete os desafios propostos.

5. Receba feedbacks visuais e sonoros imediatos.

Ou jogue direto pelo navegador: **[tatafaucz.github.io/duolibras](https://tatafaucz.github.io/duolibras/)**

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Papel no projeto |

| :--- | :--- |

| **HTML5** | Estrutura semântica |

| **CSS3** | Design responsivo e alternância de temas |

| **JavaScript (Vanilla)** | Controle das fases, interações, lógica de jogo e salvamento de estado |

---

## 📈 Roadmap

### Melhorias Recentes

- Tema claro/escuro com persistência.

- Quadro de fases responsivo.

- Tutoriais visuais antes de cada fase.

- Feedback sonoro e visual para respostas.

- Imagens representativas nas seleções de fase.

### Melhorias Futuras

- Novas fases e categorias.

- Otimização para dispositivos móveis.

- Sistema de progressão do usuário.

- Tela de configurações (volume, reset de progresso).

- Animações para transições e feedbacks.

---

## 🏫 Sobre o Projeto

Projeto desenvolvido por **Thais Faucz Jasse** no **Projeto de Extensão Assistiva da UDESC CCT**. O DuoLibras busca facilitar o acesso à Libras de forma divertida, inclusiva e educacional.

Se você utilizar, adaptar ou citar este projeto em trabalhos acadêmicos, considere referenciar a publicação oficial citada acima — isso ajuda a dar visibilidade à pesquisa em tecnologia assistiva aplicada à educação inclusiva. 💙

---

## 📜 Licença

Projeto acadêmico, disponível para fins **educacionais e não comerciais**.

---

## 🔗 Acesso ao Jogo

Acesse o DuoLibras diretamente no navegador:

👉 **[https://tatafaucz.github.io/duolibras/](https://tatafaucz.github.io/duolibras/)**

---

Built with 💙 for inclusive education — feito para ensinar e incluir.






