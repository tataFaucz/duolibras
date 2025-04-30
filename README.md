# DuoLibras

DuoLibras é um jogo educativo interativo para aprender Libras (Língua Brasileira de Sinais) de forma divertida e acessível.

---

### Arquivos Principais

- **`index.html`**: Estrutura principal do jogo.
- **`style.css`**: Estilos visuais do jogo, incluindo animações, layout e suporte a temas claro/escuro.
- **`script.js`**: Lógica do jogo, incluindo fases, interações, tutoriais, manipulação de DOM e alternância de temas.

---

### Recursos

- **Imagens**: Localizadas na pasta `images/`, organizadas por categorias como `alfabeto`, `apresentacao` e `saudacao`.
- **Sons**: Sons de feedback (`correct.mp3` e `incorrect.mp3`) na pasta `sounds/`.

---

## Funcionalidades

1. **Alternância de Tema (Claro/Escuro)**

   - Um botão fixo no canto superior direito permite alternar entre os modos claro e escuro.
   - O botão exibe uma lua no modo claro e um sol no modo escuro.
   - O tema selecionado é salvo no navegador e restaurado ao recarregar a página.

2. **Tutorial Antes de Cada Fase**

   - Antes de cada fase, o jogador visualiza um tutorial com todas as imagens e seus significados.
   - O tutorial ajuda o jogador a se familiarizar com os gestos antes de começar.

3. **Fase 1: Alfabeto e Números**

   - O jogador deve identificar o significado de gestos representando letras e números.

4. **Fase 2: Saudações Básicas**

   - Inclui um jogo de forca onde o jogador deve adivinhar palavras relacionadas a saudações.

5. **Fase 3: Falas Cotidianas**

   - O jogador aprende frases comuns em Libras.

6. **Feedback Visual e Sonoro**

   - Feedback imediato para respostas corretas ou incorretas, com sons e mensagens visuais.

7. **Reinício do Jogo**

   - Após concluir todas as fases, o jogador pode reiniciar o jogo, começando novamente pelo tutorial da primeira fase.

8. **Quadro de Fases**

   - Um quadro fixo exibe as fases disponíveis.
   - As fases bloqueadas são exibidas com um estilo diferenciado.
   - O quadro permanece com um fundo cinza fixo, independentemente do tema selecionado.

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
- **Reinício com Tutorial**: O jogo reinicia exibindo o tutorial da primeira fase.

---

## Melhorias Futuras

- Adicionar mais fases e categorias de gestos.
- Implementar suporte a dispositivos móveis.
- Adicionar um sistema de pontuação para incentivar o aprendizado.

---

## Créditos

Este projeto foi desenvolvido para promover o aprendizado de Libras de forma interativa e divertida. Visa ser uma ferramenta assistiva de letramento da Língua de Sinais Brasileira, desenvolvido pela aluna Thais Faucz Jasse dentro do Projeto de Extensão Assistiva da UDESC CCT.

---

## Licença

Este projeto ainda não tem a devida licença necessária.
