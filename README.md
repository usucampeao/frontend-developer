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
2. O que são ``services``? Dê alguns exemplos de utilização.
3. O que são ``pipes``? Dê alguns exemplos de utilização.
4. O que é ``data-binding`` e quais os tipos que o Angular dá suporte?
5. Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?
6. Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?
7. Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?
8. Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?
9.  Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?
10.  O que são *guards de rota* e para que são úteis?
11. O que é ``NgZone``? Em que momento deve ser utilizada?
12. O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?

### Respostas
1)
    - Components
    É também um tipo de diretiva com template, estilos e parte lógica que é o tipo de diretiva mais famoso entre todos no Angular2. Nesse tipo de diretiva, você pode usar outras diretivas, sejam elas personalizadas ou integradas na @Component
    anotação
    Ex: 
    @Component({
        selector: "my-app"
        directives: [custom_directive_here]
    })

    - Diretivas estruturais
    Usado para alterar o layout DOM adicionando e removendo elementos DOM.
    Ex: 
    *ngFor
    <li *ngFor="let itens of objPokemon?.abilities">
        <span class="attribute-list">{{itens?.ability?.name}}</span>
    </li>

    *ngIf
    <span *ngIf="!hoverPokemon">
        <img src="{{objPokemon?.sprites?.front_default}}" style="width: 50%;">
    </span>

    - Diretivas de atributo
    Eles são usados ​​para dar comportamento ou estilo personalizado aos elementos existentes, aplicando algumas funções / lógica. Like ngStyleé uma diretiva de atributo para dar estilo dinamicamente aos elementos. Podemos criar nossa própria diretiva e usá-la como atributo de alguns elementos predefinidos ou personalizados
    Ex:
    import {Directive, ElementRef, Renderer, Input} from '@angular/core';

    @Directive({
    selector: '[Icheck]',
    })
    export class RadioCheckbox {
    // code here
    }


2)
    Service é o objeto usado para organizar e/ou compartilhar estados de objetos e as regras de negócio da aplicação. Ele é singleton, ou seja, há apenas uma instância disponível durante a vida útil da aplicação. Outra característica importante é a inicialização tardia (lazily instantiated), que só é efetuada quando o AngularJS identifica que tem algum componente dependente.
    Ex:
    export class pokeApiService{
        constructor(private http: HttpClient) { }

        listAllPokemons(){
            return this.http.get('https://pokeapi.co/api/v2/pokemon/');
        }
    }

3)
    Para quem ainda não conhece as pipes do Angular, elas são uma maneira elegante de realizarmos transformações no nosso front-end. Com ela nos podemos criar funções ou filtros (como ela é chamado no inglês), que podem ser utilizadas em qualquer parte do template do nosso projeto.
    Ex:
    <p><span class="attribute-list">{{ objPokemon?.height| number : '.1-3' }} m</span></p>

4)
    O Angular fornece de duas vias de vinculação de dados para lidar com a sincronização de dados entre o model e a view.
    Ex:
    <h5 class="card-title namePokemon">Nº {{ objPokemon?.id}} - {{ objPokemon?.name }}</h5>

5)
    No exemplo abaixo tem o exemplo de como adicionar o listener "(click)" e após isso incluir o método que será executado ao realizar o clique
    <div class="content-block content-block-full">
        <a id="loadMore" (click)="onClickLoadMore()">
                <span class="buttonLightBlue">Carregar mais Pokémon</span>
            </a>
    </div>

6)
    O "constructor" é o método default da classe. No Angular ele é usado principalmente para injetar dependências no componente

    O "ngOnInit" faz parte do ciclo de vida do componente. Uma prática comum é usar ele para inicialização da lógica do componente.

7)
    A Promise lida com um único evento quando uma operação assíncrona é concluída ou falha.
    Observable é como um Stream e permite passar zero ou mais eventos nos quais o retorno de chamada é chamado para cada evento.
    Promisse
    listaTodos() {
        let agendamentos: Agendamento[] = [];

        this._storage.forEach((agendamento: Agendamento) => {
        agendamentos.push(agendamento);
        });

        return agendamentos;
    }

    Observable
    return Observable.fromPromise(promise);

8)
    No caso dos Template-Driven a lógica é implementada no template do componente (HTML)
    Template-Driven Forms funcionam de forma assíncrona
    Para usar o Template-Driven Forms é necessário importar o módulo FormsModule
    No caso dos Reactive Forms a lógica fica, geralmente, no componente e as suas validações são feitas programaticamente com TypeScript.
    Reactive Forms funciona de forma síncrona
    Para usar Reactive Forms deverá ser importado o módulo ReactiveFormsModule

    Template-Driven 
    <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
    <p><label>Nome: </label><input type="text" name="nome" ngModel required></p>
    <p><label>Cidade: </label><input type="text" name="cidade" ngModel maxlength="30"></p>
    <p><label>CEP: </label><input type="text" name="cep" ngModel pattern="[0-9]{8}"></p>
    <p><button type="submit" [disabled]="!f.valid">Submit</button></p>
    </form>

    Reactive Forms
    .html
    <form [formGroup]="registerForm">
    <label>Primeiro Nome: </label>
    <input type="text" formControlName="primeironome">
    <button type="submit" [disabled]="registerForm.invalid">Enviar</button>
    </form>

    .ts
    registerForm = new FormGroup({
        primeironome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });

9)
    Utilizando o método "Navigate". Porém antes é necessário injetar no Router o componente.
    Para utilizar parametros, precisamos primeiro definir o nome dele nas constantes do módulo de rotas
    Ex: { path: 'home/:parametro', component: HomeComponent }

    Depois podemos recuperar o valor pelo ActiveRoute
    const par = this.activatedRoute.snapshot.paramMap.get('parametro');

10)
    Guardas de rotas, são o que permitem ou não o acesso a determinadas rotas. As guardas são cumulativas.
    Possuem o método CanActivate retornando um true ou false para poder ou não acessar a rota.

11)
    O Zone lida com a maioria das APIs assíncronas, como setTimeout (), Promise.then () e addEventListenner. Portanto, você não precisa acionar a detecção de alterações para eles manualmente.
    Ainda existem algumas APIs de terceiros que o Zone não controla. Nesses casos, o serviço NgZone fornece um método run () que permite que você execute uma função dentro da zona angular.
    Deve ser utilizada quando algum método, função depende de algum retorno de API, ou de algum outro serviço. Desta forma é possivel garantir que todas as variáveis,objetos estarão preenchidas conforme a lógica escrita.

12)
    Injeção de Dependências é um tipo de Inversão de Controle e significa que uma classe não mais é responsável por criar ou buscar os objetos dos quais depende.
    Isso serve para desacoplar as classes, evitando dependência direta entre elas.
    Essa injeção pode ser feita pelo construtor
    Como por exemplo abaixo:
    constructor(private pokeapiservice: pokeApiService) { }



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
