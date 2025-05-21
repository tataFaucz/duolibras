# DuoLibras

DuoLibras é uma aplicação web interativa desenvolvida com o objetivo de promover o ensino e a aprendizagem da Língua Brasileira de Sinais (Libras) por meio de jogos educativos. O sistema foi projetado para proporcionar uma experiência lúdica e acessível, utilizando recursos visuais, desafios progressivos e feedback imediato ao usuário.

---

### Arquivos Principais

- **`index.html`**: Estrutura principal do jogo.
- **`style.css`**: Estilos visuais do jogo, incluindo layout, suporte a temas claro/escuro e design responsivo.
- **`script.js`**: Lógica do jogo, incluindo fases, interações, tutoriais, manipulação de DOM e alternância de temas.

---

### Recursos

- **Imagens**: Localizadas na pasta `images/`, organizadas por categorias como `alfabeto`, `apresentacao` e `saudacao`. As imagens das fases (`fase1.jpg`, `fase2.jpg`, `fase3.jpg`) também estão nesta pasta.
- **Sons**: Sons de feedback (`correct.mp3` e `incorrect.mp3`) na pasta `sounds/`.

---

## Funcionalidades

1. **Alternância de Tema (Claro/Escuro)**

   - Um botão fixo no canto superior direito permite alternar entre os modos claro e escuro.
   - O botão exibe uma lua no modo claro e um sol no modo escuro.
   - Apenas o fundo do jogo muda de cor, enquanto os demais elementos mantêm suas cores originais.
   - O tema selecionado é salvo no navegador e restaurado ao recarregar a página.
   - Interface Responsiva: Layout adaptável para diferentes dispositivos, garantindo acessibilidade e usabilidade.

2. **Tutorial Antes de Cada Fase**

   - Antes de cada fase, o jogador visualiza um tutorial com todas as imagens e seus significados.
   - O tutorial ajuda o jogador a se familiarizar com os gestos antes de começar.

3. **Fase 1: Alfabeto e Números**

   - O jogador deve identificar o significado de gestos representando letras e números.

4. **Fase 2: Saudações Básicas**

   - Inclui um jogo de forca onde o jogador deve adivinhar palavras relacionadas a saudações.

5. **Fase 3: Falas Cotidianas**

   - O jogador aprende frases comuns em Libras.

6. **Quadro de Fases**

   - Um quadro fixo exibe as fases disponíveis.
   - Progressão e Desbloqueio: Fases são desbloqueadas conforme o progresso do usuário, promovendo engajamento.
   - O quadro permanece com um fundo cinza fixo, independentemente do tema selecionado.
   - Seleção de Fases: O jogo é estruturado em fases temáticas, abordando o alfabeto, números, saudações e frases cotidianas em Libras.

7. **Feedback Visual e Sonoro**

   - Feedback imediato para respostas corretas ou incorretas, com sons e mensagens visuais.
   - Feedback Imediato: O sistema fornece respostas auditivas e visuais para acertos e erros, incentivando o aprendizado contínuo.

8. **Reinício do Jogo**

   - Após concluir todas as fases, o jogador pode reiniciar o jogo, começando novamente pelo tutorial da primeira fase.
  
---

## Como Jogar

1. Abra o arquivo `index.html` em um navegador.
2. Clique no botão "Iniciar" para começar o jogo.
3. Visualize o tutorial da fase atual e clique em "Iniciar Fase" para começar.
4. Complete as fases respondendo corretamente aos desafios apresentados.
5. Receba feedback visual e sonoro para cada resposta.
6. Após concluir todas as fases, clique em "Jogar Novamente" para reiniciar o jogo.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura do jogo.
- **CSS3**: Estilização, suporte a temas claro/escuro e animações.
- **JavaScript**: Lógica do jogo, manipulação de elementos e persistência de tema.

---

## Melhorias Recentes

- **Adição de Alternância de Tema**: Botão fixo para alternar entre os modos claro e escuro, com persistência no navegador.
- **Fixação de Estilos no Quadro de Fases**: O quadro das fases e seu conteúdo permanecem com cores fixas, independentemente do tema.
- **Adição de Tutoriais**: Cada fase agora possui um tutorial com imagens e significados.
- **Feedback Aprimorado**: Mensagens visuais e sons para respostas corretas e incorretas.
- **Imagens das Fases**: Cada fase possui uma imagem representativa no quadro de seleção.

---

## Melhorias Futuras

- Adicionar mais fases e categorias de gestos.
- Implementar suporte a dispositivos móveis.
- Adicionar um sistema de pontuação para incentivar o aprendizado.
- Criar uma tela de configurações para personalizar o jogo (ex.: volume, redefinir progresso).
- Adicionar animações para transições entre telas e feedback visual.

---

## Créditos

Este projeto foi desenvolvido para promover o aprendizado de Libras de forma interativa e divertida. Visa ser uma ferramenta assistiva de letramento da Língua de Sinais Brasileira, desenvolvido pela aluna Thais Faucz Jasse dentro do Projeto de Extensão Assistiva da UDESC CCT.

---

## Licença

Este projeto é de caráter acadêmico e está disponível para fins educacionais.

---

## Acesso ao Jogo
O DuoLibras está disponível para acesso público no seguinte endereço:

https://tatafaucz.github.io/duolibras/

