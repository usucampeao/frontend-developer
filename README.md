![UsuCampeão](logo.png)

# INICIALIZANDO A APLICAÇÃO POKEDEX

Navegar até a pasta pokedex, utlizando o comando "cd" no terminal.
Executar o comando "npm install" e logo após a instalação do node_modules, executar o comando "ng serve" ou "npm start".

# USUCAMPEÃO Tecnologia em Regularização Imobiliária

Somos mais que uma Startup de regularização de imóveis, nascemos para resolver um problema social que atinge mais de 50% da população brasileira.

Através da inovação, execução de qualidade e baixo custo realizamos o sonho da propriedade regularizada.

Nosso propósito é gerar segurança jurídica e #prosperidade a todas as pessoas.

_Venha fazer parte deste time CAMPEÃO!!!_

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

1. O que são `components` e `directives` e quais as difenças entre eles? Dê alguns exemplos de utilização.

Componentes são elementos personalizados, separados em pequenas partes reaproveitáveis de código, compostos por classe, template e selector. Diretivas servem também para adicionar comportamento ao elemento DOM, mas não possui um template como os componentes. AS diretivas estruturais que mudam o template e a estrutura do DOM (as principas são ngFor e ngIf) e a de atributos servem para associar atributos a um elemento do DOM podendo realizar comportamentos ao elemento. ngIf é uma diretiva condicional e funciona com uma variável ou operação ternária, o ngFor é um laço que faz o loop do array com a quantidade de posições contidas, repetindo o conteúdo html que estiver dentr o da tag contida ngFor. Além disso, tem a ngSwich e ngSwitchCase que fazem o mesmo que o método ECMA.

2. O que são `services`? Dê alguns exemplos de utilização.

São classes comuns que podem ser injetados em componentes ou em outros serviços. Geralmente são tulizados para encapsular a API do backend. Eles podem ser declarados como módulo, sendo aplicados na lista de serviços do módulo raíz, como um "provider", ficando disponível para todas as classes do módulo . Mais comumente esse tipo de utlização seria para criar um SINGLETON, que é um grupo de serviçõs geralmente compartilhados por diversos componentes da aplicação. Podem ainda ser chamados somente em um componente, como "viewProviders". Para receber os serviços deve-se declarar o decorator "@Injetable", importado do angular core.

3. O que são `pipes`? Dê alguns exemplos de utilização.

São filtros que transformam os dados para modificar a apresentação dos conteúdos. São muito utlizados para formatar arrays, conteúdo JSON, além ser possível criar novos pipes para predefinir máscaras de carácteres, tornar toda a escrita em caixa alta ou baixa. A utlização se aplica geralmente no "binding interpolation", após informar a variável a ser iterada, utlizar o sinal "|" seguido do nome do pipe (Ex.: uppercase, lowercase, currency: 'MOEDA/PAÍS', 'FORMATO', date: 'MASCARA, slice: "NUM":"NUM"...).

4. O que é `data-binding` e quais os tipos que o Angular dá suporte?

São vinculações de atributos para componentes aplicadas diretamente nas tags html.
atualmente, os tipos mais utlizado que conheço são o Property binding, Event Binding e Two Way Data Binding, Interpolation, Class, Style e Attributes(Ex.: disabled, value...).

5. Como se adiciona um _listener_ de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?

Utlizado em programação reativa (rxjs) para listar alguma resposta ou alteração, permitindo executar alguma ação dependente do evento. Um retorno de um observable, gera um "listner".

6. Quais as diferenças entre `constructor` e `ngOnInit`, e quando devemos usar cada um?

O constructor muito comum em programação orientada a objeto, sendo utilizado em uma classe, sendo método responsavel pela criação do DOM, no caso do angular é bastante utilizado para injeções dependencia, enquanto o ngOnInit é o método do ciclo de vida do componente que executa ao ser iniciado.

7. Quais as diferenças entre `Observables` e `Promises`? Como você o utilizaria cada um em um `template`?

Observable é um evento da biblioteca (rxjs), que serve para ouvir alterações de varios eventos sendo a tratativa realizada depois que método é disparado e a promisse para um único evento e são resolvidas somente após esse evento.

8. Quais as diferenças entre `template-driven forms` e `reactive forms`? Como fazer validação de dados de formulário em cada caso?

FormsModule é orientado por um template e tem a maior parte da lógica na estrutura do formulário, enquanto o ReactiveFormsModule são reativos e não concentra a lógica de validação no template, tornando o código mais limpo e organizado.

9. Como se utiliza o `angular router`? Quais são as formas de enviar parâmetros para uma rota?

Inserindo a tag "router-outlet" na região dinâmica (no template) e criando o arquivo, indicando os componentes importados no arquivo de Rotas (com o import @angular/router) e setando no objeto das rotas, também o "path" com URLS de navegação.
Os parâmetros podem ser enviados a partir do "router. Os parânetros são passados na property routerLink ou derivados (ex. routerLinkActive), para criar os links no template, podendo ainda receber um id. A melhor forma de obter os parameros é com o "subscribe".

10. O que são _guards de rota_ e para que são úteis?

São interfaces que permitem receber uma lógica, geralmente de autenticação ou outros requerimentos de determinado usuário, retornando sempre um valor booleano, quer permitiria ou não o acesso ao conteúdo indicado.
São muito úteis para sistemas que sejam autenticados ou separados por grupos de usuários.

11. O que é `NgZone`? Em que momento deve ser utilizada?

É um serviço bastante utilizado para otimizar o desempenho ao iniciar um trabalho que consiste em uma ou mais tarefas assíncronas que não requerem atualizações de IU ou tratamento de erros para serem tratadas pelo Angular. Podem ser utlizados dentro ou até mesmo fora da "zona" angular (ambientes fechados que permitem monitorar, controlar e reagir a todos os eventos, desde tarefas assíncronas até erros lançados).

12. O que é _injeção de dependências_ e por que isso é útil? Como você realiza injeção de dependências entre módulos?

Injeção de dependencia é um padrão de gerenciamento de dependencias definido pelo framework, através da injeção de serviços de um módulo em um componente. A vantagem de ser utlizar é que o componente recebe o objeto pronto no constuctor, sem precisar importar os outros objetos contidos no módulo injetado.

Ah, e a mais importante de todas: Bulbassauro, Charmander ou Squirtle? =)

### Projeto: Criando uma Pokédex usando a PokéAPI

Pokémon é uma enorme franquia com jogos, desenhos, filmes, brinquedos e diversos produtos mundialmente conhecidos. Da [Wikipédia](<https://pt.wikipedia.org/wiki/Pokémon_(série_de_jogos_eletrônicos)>):

> Pokémon é uma série de jogos eletrônicos desenvolvidos pela Game Freak e publicados pela Nintendo como parte da franquia de mídia Pokémon. Lançado pela primeira vez em 1996 no Japão para o console Game Boy, a principal série de jogos de RPGs, que continuou em cada geração em portáteis da Nintendo.
>
> Os jogos são geralmente lançados em pares - cada um com pequenas variações - com uma recriação aprimorado dos usados jogos lançados em alguns anos depois das versões originais. Enquanto a série principal consiste em RPGs, os spin-off abrangem outros gêneros, como RPG de ação, quebra-cabeça e jogos virtuais para animais de estimação.
>
> A partir de 24 de novembro de 2017, mais de 300 milhões de jogos de Pokémon foram vendidos em todo o mundo, em 76 títulos. Isso faz de Pokémon a segunda franquia de jogos eletrônicos mais vendidas, atrás da própria franquia da Nintendo Mario.

Em 2016, a Nintendo lançou o jogo Pokémon Go, para Android e iOS, que permitia aos jogadores "caçar" Pokémons no "mundo real" através de realidade aumentada, utilizando o GPS e a câmera dos celulares dos jogadores. Seus monstrinhos capturados ficavam listados na chamada Pokédex, um acervo de Pokémons que já existia desde o primeiro jogo.

Seu objetivo, neste projeto, é criar uma Pokédex em Angular usando a PokéAPI.

A [PokéAPI](https://pokeapi.co/) é uma API aberta, sem necessidade de disponibiliza uma API REST com, entre outras coisas, informações de todos os Pokémons até a geração 7. Você pode consultar a documentação da API [aqui](https://pokeapi.co/docs/v2).

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
- Ah, e não se esqueça de mostrar os sprites (as imagens) de cada Pokémon!

Além disso, vamos avaliar como você organiza e documenta o projeto, e a estrutura de módulos, componentes, serviços e rotas que você criou.

Ganhe pontos extras por:

- Uso de Angular Material;
- Layout diferenciado e animações;
- Mecanismo de pesquisa;
- Cache e persistência dos dados no `localStorage` ou `IndexedDB`;
- Funcionamento offline com os dados cacheados - melhor ainda se for um PWA!;
- Testes unitários e end to end;
- Scripts de deploy;
- Organização e mensagens dos commits.

E não se esqueça, bugs e exceções são como Pokémons: _Gotta catch 'em all!_

**Boa sorte! =)**
