![UsuCampeão](logo.png)

# USUCAMPEÃO Tecnologia em Regularização Imobiliária

Somos mais que uma Startup de regularização de imóveis, nascemos para resolver um problema social que atinge mais de 50% da população brasileira.

Através da inovação, execução de qualidade e baixo custo realizamos o sonho da propriedade regularizada.

Nosso propósito é gerar segurança jurídica e #prosperidade a todas as pessoas.

*Venha fazer parte deste time CAMPEÃO!!!*

## Desenvolvedor Front-End

Então, quer dizer que você gosta de desafios e quer se tornar um desenvolvedor front-end na UsuCampeão? Está no lugar certo!

Este teste faz parte do nosso processo de seleção e é a sua chance de nos mostrar todo o seu conhecimento como desenvolvedor front-end com angular. Este teste está dividido em duas etapas:

1. Responder um questionário sobre HTML, CSS, JavaScript e Angular
1. Desenvolver uma aplicação simples, demonstrando seu conhecimento na prática

Daremos um feedback a todos os que fizerem o Pull Request.

O questionário e a especificação da aplicação estão logo abaixo.

A sua entrega será feita através de um Pull Request nesse repositório. Faça um fork do repositório, implemente o seu código, responda as questões no README.md e faça um pull request. Sinta-se a vontade para colocar quaisquer outras informações que você considere pertinente no README.

### Instruções:

1. Faça um fork deste repositório;
1. Responda as questões no README.md - caso prefira, podemos conversar sobre elas na entrevista;
1. Construa uma aplicação conforme solicitado, utilizando HTML, CSS e Angular;
1. Adicione quaisquer informações adicionais para executar sua aplicação no README.md;
1. Após terminar, submeta um pull request e aguarde seu feedback.

**PS:** Utilizamos este mesmo testes para os níveis (**júnior**, **pleno** ou **sênior**), apenas adequando o nível de exigência na avaliação de acordo com o perfil da vaga.

### Questionário

1. O que são ``components`` e ``directives`` e quais as difenças entre eles? Dê alguns exemplos de utilização.
 O Component é uma Directive especial, ele foi criado para suprir e corrigir problemas que a directive possui quando voce quer criar um componente html que possui um controller e um html proprio, esses problemas seriam: nao possui bindings, nao possui scope isolado e ambiguidades geradas pelas especificações das directives do tipo link e atributo. Voce deve usar um Component: Sempre que quiser criar um componente html de scopo isolado (substitui a criação de um html com binding via ng-controller de um controller). Voce deve usar uma Directive: Apenas quando voce quiser criar um atributo que executa algum javascript de manipulação de DOM ou manipulação simples de informação.
2. O que são ``services``? Dê alguns exemplos de utilização.
   Service é o objeto usado para organizar e/ou compartilhar estados de objetos e as regras de negócio da aplicação. Ele é singleton, ou seja, há apenas uma instância disponível durante a vida útil da aplicação. Outra característica importante é a inicialização tardia (lazily instantiated), que só é efetuada quando o Angular identifica que tem algum componente dependente.
3. O que são ``pipes``? Dê alguns exemplos de utilização.
   Para exibir corretamente os dados o Angular desenvolveu o que chamamos de pipe, os quais permitem transformar os dados antes de ser exibido diretamente ao usuário.
4. O que é ``data-binding`` e quais os tipos que o Angular dá suporte?
    Data Binding é uma técnica geral que une duas fontes de dados/informações e as mantém em sincronia em um processo que estabelece uma conexão entre UI (interface de usuário) da aplicação e a lógica de negócio.
5. Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?
    Seguindo o exemplo comentado um Listener para adicionar uma função é só usar o Listener (click) com função desejada, Exemplo no component , pokemon-data.component.ts
6. Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?
    constructor é pricipalmente utilizado para injetar as dependências e o ngOnInit faz parte do ciclo de vida do component e acionando ao inicia-lo
7. Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?
    Tanto as Promeses quanto os Observables ​​nos ajudarão a trabalhar com as funcionalidades assíncronas em JavaScript. Eles são muito semelhantes em muitos casos, no entanto, ainda existem algumas diferenças entre os dois, promeses são valores que serão resolvidos de maneiras assíncronas como chamadas http. Por outro lado, os observáveis ​​lidam com uma sequência de eventos assíncronos. As principais diferenças entre eles estão listadas abaixo: Promeses: tendo um pipeline normalmente só use com retorno de dados assíncrono não é fácil cancelar Observables: são canceláveis são rastreáveis ​​por natureza, como repetir e repetir quando transmitir dados em vários pipelines tendo operações semelhantes a matriz, como map, filter, etc. pode ser criado a partir de outras fontes, como eventos são funções que podem ser subscritas mais tarde
8.  Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?
    O ReactiveForms você realiza a validação no seu componente, ou seja, se mudarem o template (que muda toda hora) a regra continua no componente, sem risco de perdê-la. Já o template form a regra de validação fica no template. É mais rápido de fazer, mas como o template muda toda hora é bem provável que você perca a regra de validação que adicionou.
9.  Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?
    No Angular, muita coisa é modularizada, e as rotas não são diferentes. Ao criar uma aplicação Angular, somos indagados sobre o uso das mesmas (Would you like to add Angular Routing?), e ao responder “Yes”, já temos tudo que precisamos para o roteamento. Na verdade, tudo que precisamos para ter rotas em nossa aplicação é um arquivo de módulo das rotas e importá-lo posteriormente no Root Module. Este arquivo de rotas, normalmente chamado app-routing.module.ts.ts Exemplos no component app-routing.module.ts, app.components.html
10.  O que são *guards de rota* e para que são úteis?
    Um guard é um recurso utilizado para informar se um usuário pode navegar para uma determinada rota ou não. Ele pode ser criado através do comando ng generate guard
11. O que é ``NgZone``? Em que momento deve ser utilizada?
    O uso mais comum desse serviço é otimizar o desempenho ao iniciar um trabalho que consiste em uma ou mais tarefas assíncronas que não requerem atualizações de IU ou tratamento de erros para serem tratadas pelo Angular. Essas tarefas podem ser iniciadas por meio de runOutsideAngular e, se necessário, essas tarefas podem entrar novamente na zona Angular por meio de execução.
12. O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?
    Injeção de Dependências é um tipo de Inversão de Controle e significa que uma classe não mais é responsável por criar ou buscar os objetos dos quais depende. Isso serve para desacoplar as classes, evitando dependência direta entre elas. Os resultados são: Maior índice de reaproveitamento Permite incluir novas funcionalidades sem alterar as já existentes Possibilidade de criar mocks em testes unitários. angular.module('app.services',[]); var appServices = angular.module('app.services'); appServices.factory('usuarioService', ['$rootScope', 'renderService', function($rootScope, renderService){ // logica do factory }]); appServices.factory('renderService', ['$http', function($http){ // logica do factory }]);

Ah, e a mais importante de todas: Bulbassauro, Charmander ou Squirtle? =)

### Projeto: Criando uma Pokédex usando a PokéAPI

Pokémon é uma enorme franquia com jogos, desenhos, filmes, brinquedos e diversos produtos mundialmente conhecidos. Da [Wikipédia](https://pt.wikipedia.org/wiki/Pokémon_(série_de_jogos_eletrônicos)):

> Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.
> 
> Os jogos são geralmente lançados em pares - cada um com pequenas variações - com uma recriação aprimorado dos usados jogos lançados em alguns anos depois das versões originais. Enquanto a série principal consiste em RPGs, os spin-off abrangem outros gêneros, como RPG de ação, quebra-cabeça e jogos virtuais para animais de estimação.
> 
> A partir de 24 de novembro de 2017, mais de 300 milhões de jogos de Pokémon foram vendidos em todo o mundo, em 76 títulos. Isso faz de Pokémon a segunda franquia de jogos eletrônicos mais vendidas, atrás da própria franquia da Nintendo Mario.

Em 2016, a Nintendo lançou o jogo Pokémon Go, para Android e iOS, que permitia aos jogadores "caçar" Pokémons no "mundo real" através de realidade aumentada, utilizando o GPS e a câmera dos celulares dos jogadores. Seus monstrinhos capturados ficavam listados na chamada Pokédex, um acervo de Pokémons que já existia desde o primeiro jogo.

Seu objetivo, neste projeto, é criar uma Pokédex em Angular usando a PokéAPI.

A [PokéAPI](https://pokeapi.co/) é uma API aberta, sem necessidade de  disponibiliza uma API REST com, entre outras coisas, informações de todos os Pokémons até a geração 7. Você pode consultar a documentação da API [aqui](https://pokeapi.co/docs/v2).

Você é livre para montar a aplicação como quiser, mas gostaríamos de ver a listagem de todos o Pokémons, com informações básicas, em uma página inicial e detalhes do Pokémon selecionado em outra página. Como referência de layout, recomendamos que utilize as seguintes Pokédex como exemplo:

- [Pokédex oficial](https://www.pokemon.com/br/pokedex/)

(link: [https://www.pokemon.com/br/pokedex/](https://www.pokemon.com/br/pokedex/))

![Pokédex oficial](pokemon.com.png)

- [Pokedex.org](https://pokedex.org/)

(link: [https://pokedex.org/](https://pokedex.org/))

![Podedex.org](pokedex.org.png)

Temos alguns pré-requisitos:
- Utilização de Angular 8+;
- Uso de SASS/SCSS para CSS da aplicação;
- Design responsivo;
- Testes usando JEST serao obrigatorios !!!!
- Ah, e não se esqueça de mostrar os sprites (as imagens) de cada Pokémon!

Além disso, vamos avaliar como você organiza e documenta o projeto, e a estrutura de módulos, componentes, serviços e rotas que você criou.

Ganhe pontos extras por:
- Uso de Angular Material;
- Layout diferenciado e animações;
- Mecanismo de pesquisa;
- Cache e persistência dos dados no ``localStorage`` ou ``IndexedDB``;
- Funcionamento offline com os dados cacheados - melhor ainda se for um PWA!;
- Testes unitários e end to end;
- Scripts de deploy;
- Organização e mensagens dos commits.

E não se esqueça, bugs e exceções são como Pokémons: *Gotta catch 'em all!*

**Boa sorte! =)**
