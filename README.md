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
    Compoments é uma classe dentro do aplicativo. Ele é composto por HTML (template), CSS e TypeScript. Podemos criar um component para criar uma lista de produtos dentro de um aplicativo, ele é resposável por capturar os dados de uma API REST, tratar e enviar para o template renderizado para o usuário.

    Com Directives podemos criar um elemento que será utilizado repetidas vezes em diferentes locais da aplicação. 
    Vamos supor que temos um select de usuários, que pode ser utilizado como filtro em diversos lugares diferentes. Para não repetir o código do select completo em todas os templates, usamos apenas a directive desse select de usuários. Assim quando for necessário alguma alteração no select, essa alteração só ocorre na directive e a mudança é refletida em todo o aplicativo.
2. O que são ``services``? Dê alguns exemplos de utilização.
    Service é a camada de comunicação com uma fonte de dados. Posso criar uma service para a comunicação de uma API REST, e centralizar nela os endpoints necessários para a aplicação
3. O que são ``pipes``? Dê alguns exemplos de utilização.
    Pipe é um recurso utilizado para formatar exibição de valores. Exemplo: Temos uma data no seguinte formato '2021-02-05 14:00:00' e queremos mostra-lá assim: '05/02/2021 14:00'. Podemos utilizar o pipe para formatar a data da seguinte forma: {{ dataCadastro | date:'dd/MM/yyyy HH::mm' }}
4. O que é ``data-binding`` e quais os tipos que o Angular dá suporte?
    - Quando inserimos algum texto num input e esse texto já reflete em algum lugar do template
    - Podemos associar informação do component para o template. Ex.: [propriedade]="valor" ou {{ valor }}
    - Podemos associar informacao do template para o component. Ex. (event)="handle"
5. Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?
6. Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?
    ngOnInit é carregado na inicialização do component. Deve ser usado para buscar uma lista de registros ao carregar uma listagem de produtos, por exemplo.
    Contructor é um método default de qualquer classe. Utilizamos quando precisamos injetar alguma dependencia num component, por exemplo.
7. Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?
8. Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?
9.  Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?
    Se utiliza por meio do AppRoutingModule. Nesse módulo colocamos todas as rotas do aplicativo e qual component a rota utilizará. 
    
    Para enviar um parametro para uma rota, primeiro devemos definir o parametro no array de rotas dentro do módulo. Ex.: { path: 'home/:param', component: HomeComponent }. Para enviar esses parametros para a rota, podemos utilizar o routerLink direto no link dentro do nosso template ou usar TypeScript usando o metodo navigate do Router

10.  O que são *guards de rota* e para que são úteis?
    Permitem ou não o acesso as rotas definidas. Pode ser utilizado para impedir um usuário comum acessar uma área destinada somente a administradores.
11. O que é ``NgZone``? Em que momento deve ser utilizada?
12. O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?

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

### Executando a aplicação

Após fazer o clone do repositório e basta rodar os seguintes comandos
`cd frontend-developer`
`npm install`
`ng serve --open`