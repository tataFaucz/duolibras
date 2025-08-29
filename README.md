# ✋ DuoLibras

**DuoLibras** é uma aplicação web interativa voltada ao ensino e à aprendizagem da **Língua Brasileira de Sinais (Libras)** por meio de jogos educativos. Desenvolvido com foco em **acessibilidade**, o sistema proporciona uma experiência lúdica, com desafios progressivos, recursos visuais e feedbacks imediatos que facilitam a imersão no conteúdo. :contentReference[oaicite:0]{index=0}

---

##  Estrutura do Projeto

- `index.html` – Estrutura base da aplicação.  
- `style.css` – Estilização, suporte a tema claro/escuro e layout responsivo.  
- `script.js` – Lógica do jogo: controle de fases, interações, tutoriais, manipulação de DOM e tema. :contentReference[oaicite:1]{index=1}

### Recursos adicionais
- **Imagens**: Localizadas na pasta `images/`, organizadas por categorias (`alfabeto`, `apresentacao`, `saudacao`) e imagens representativas das fases (`fase1.jpg`, `fase2.jpg`, `fase3.jpg`).  
- **Áudios**: Sons de acerto (`correct.mp3`) e erro (`incorrect.mp3`) na pasta `sounds/`. :contentReference[oaicite:2]{index=2}

---

## ✨ Funcionalidades

###  Alternância de Tema (Claro/Escuro)
- Botão fixo no canto superior direito.  
- Ícones: lua (modo claro) e sol (modo escuro).  
- Apenas o fundo é alterado; demais elementos mantêm suas cores.  
- Preferência salva no navegador e restaurada automaticamente.  
- Layout responsivo para dispositivos móveis. :contentReference[oaicite:3]{index=3}

###  Tutoriais Interativos
- Antes de cada fase, o jogador acessa um tutorial com imagens e significados, auxiliando-o na preparação para os desafios seguintes. :contentReference[oaicite:4]{index=4}

###  Fases do Jogo
1. **Fase 1 – Alfabeto e Números**: Identificação de gestos correspondentes a letras e números.  
2. **Fase 2 – Saudações Básicas**: Jogo da forca com palavras relacionadas a cumprimentos em Libras.  
3. **Fase 3 – Frases Cotidianas**: Aprendizado de expressões comuns do dia a dia. :contentReference[oaicite:5]{index=5}

###  Quadro de Fases
- Interface fixa com visualização das fases disponíveis.  
- Fases desbloqueadas progressivamente conforme o desempenho.  
- Cores fixas, independentemente do tema selecionado. :contentReference[oaicite:6]{index=6}

###  Feedback Imediato
- Respostas visuais e sonoras para acertos e erros.  
- Estímulo contínuo ao aprendizado. :contentReference[oaicite:7]{index=7}

---

## ▶️ Como Jogar

1. Abra o arquivo `index.html` em um navegador moderno.  
2. Clique em **Iniciar** para começar.  
3. Siga o tutorial da fase atual.  
4. Complete os desafios propostos.  
5. Receba feedbacks visuais e sonoros imediatos. :contentReference[oaicite:8]{index=8}

---

##  Tecnologias Utilizadas

- **HTML5** – Estrutura semântica da aplicação.  
- **CSS3** – Design responsivo e alternância de temas.  
- **JavaScript (Vanilla)** – Controle das fases, interações, lógica de jogo e salvamento de estado. :contentReference[oaicite:9]{index=9}

---

##  Melhorias Recentes

- Implementação do tema claro/escuro com persistência de estado.  
- Quadro de fases com design fixo e responsivo.  
- Tutoriais visuais com gestos e significados antes de cada fase.  
- Feedback sonoro e visual para respostas corretas/incorretas.  
- Inclusão de imagens representativas nas seleções de fase. :contentReference[oaicite:10]{index=10}

---

##  Melhorias Futuras

- Novas fases e categorias de aprendizado.  
- Otimização completa para dispositivos móveis.  
- Sistema de pontuação para gamificação.  
- Tela de configurações (volume, reset de progresso, etc.).  
- Animações para transições e feedbacks visuais. :contentReference[oaicite:11]{index=11}

---

##  Sobre o Projeto

Este projeto foi desenvolvido por **Thais Faucz Jasse**, como parte do **Projeto de Extensão Assistiva da UDESC CCT**. O DuoLibras tem como missão facilitar o acesso à Libras por meio de uma ferramenta divertida, inclusiva e educacional. :contentReference[oaicite:12]{index=12}

---

##  Licença

Projeto de caráter acadêmico, disponível para fins educacionais e não comerciais. :contentReference[oaicite:13]{index=13}

---

##  Acesso ao Jogo

Acesse o DuoLibras diretamente no navegador:  
👉 https://tatafaucz.github.io/duolibras/ :contentReference[oaicite:14]{index=14}
