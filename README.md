Resumo

  Este documento apresenta o DuoLibras, um jogo educativo interativo desenvolvido para ensinar o alfabeto, números e frases básicas em Libras (Língua Brasileira de Sinais). O projeto utiliza tecnologias web como HTML, CSS e JavaScript para criar uma experiência de aprendizado gamificada. O objetivo principal é promover a inclusão e o aprendizado de Libras de forma acessível e divertida.

1. Introdução

  A Língua Brasileira de Sinais (Libras) é essencial para a comunicação da comunidade surda no Brasil. No entanto, o ensino de Libras ainda enfrenta desafios, como a falta de materiais didáticos acessíveis e métodos interativos. Este trabalho apresenta o DuoLibras, um jogo educativo que combina aprendizado e diversão para ensinar conceitos básicos de Libras. O jogo é dividido em fases que abordam o alfabeto, números, saudações e frases cotidianas.

2. Estrutura do Projeto

  2.1 Organização dos Arquivos
    O projeto está estruturado da seguinte forma:
    
    index.html: Estrutura principal do jogo.
    style.css: Estilos visuais do jogo, incluindo animações e layout.
    script.js: Lógica do jogo, incluindo fases, interações e manipulação de DOM.

3. Metodologia

  3.1 Desenvolvimento do Jogo
    O DuoLibras foi desenvolvido utilizando tecnologias web:
    
    HTML5: Estrutura do jogo.
    CSS3: Estilização e animações.
    JavaScript: Lógica do jogo e manipulação de elementos.

  3.2 Estrutura das Fases
    O jogo é dividido em três fases principais:
    
    Fase 1: Alfabeto e Números
    O jogador identifica gestos que representam letras e números.
    
    Função: generateAlphabetNumbers()
    Imagens: Localizadas em alfabeto.
    Fase 2: Saudações Básicas
    Um jogo de forca onde o jogador adivinha palavras relacionadas a saudações.
    
    Função: generateGreetings()
    Imagens: Localizadas em saudacao.
    Fase 3: Falas Cotidianas
    O jogador aprende frases comuns em Libras.
    
    Função: generateIntroduction()
    Imagens: Localizadas em apresentacao.

  3.3 Lógica do Jogo

    O arquivo script.js contém as funções principais para o funcionamento do jogo. Algumas das funções mais importantes incluem:
    
    shuffleArray(array): Embaralha os elementos de um array para garantir que os desafios sejam apresentados em ordem aleatória.
    startPhase(phaseIndex): Inicia uma fase específica com base no índice fornecido.
    startStandardPhase(phase, phaseIndex): Gerencia as fases padrão, onde o jogador deve identificar o significado de um gesto.
    startHangmanPhase(phase, phaseIndex): Gerencia a fase de forca, onde o jogador adivinha letras para formar palavras.

4. Resultados Esperados

  O DuoLibras busca alcançar os seguintes resultados:
  
  Inclusão: Promover o aprendizado de Libras para ouvintes e não ouvintes.
  Engajamento: Tornar o aprendizado mais interativo e divertido.
  Acessibilidade: Disponibilizar um recurso gratuito e acessível para o ensino de Libras.

5. Como Jogar

  Abra o arquivo index.html em um navegador.
  Clique no botão "Iniciar" para começar o jogo.
  Complete as fases respondendo corretamente aos desafios apresentados.
  Receba feedback visual e sonoro para cada resposta.

6. Melhorias Futuras

  Adicionar mais fases e categorias de gestos.
  Implementar suporte a dispositivos móveis.
  Adicionar um sistema de pontuação e ranking.

7. Referências

Brasil. Lei nº 10.436, de 24 de abril de 2002. Dispõe sobre a Língua Brasileira de Sinais - Libras.
Felder, R. M., & Silverman, L. K. (1988). Learning and Teaching Styles in Engineering Education.
W3C. HTML5 Specification. Disponível em: https://www.w3.org/TR/html5/.
Mozilla Developer Network. JavaScript Guide. Disponível em: https://developer.mozilla.org/.
