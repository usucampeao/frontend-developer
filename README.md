![MatinhoDex](matinhudexLogo.png)

# MATINHODÉX - Uma PokeDéx em Angular PWA!

1. Desenvolvido para retorno de processo seletivo para a empresa USUCAMPEÃO.
1. Não contavam com meu amor eterno por pokémons. ~~e com a minha astúcia!~~

### Questionário

###### ~~ainda googlando~~

#### Em andamento

> ###### 1. O que são `components` e `directives` e quais as difenças entre eles? Dê alguns exemplos de utilização.
>
> `Directives` adicionam comportamentos pra um elemento do html(DOM) ou à uma instância de componente existente. Um exemplo de caso de uso para uma diretiva pode ser exibir um log no console quando clicado em um elemento.

```
import {Directive} from '@angular/core';

@Directive({
    selector: "[logOnClick]",
    hostListeners: {
        'click': 'onClick()',
    },
})
class LogOnClick {
    constructor() {}
    onClick() { console.log('Elemento clicado!'); }
}
```

Podendo ser usado assim:

```
<button logOnClick>Vou exibir mensagem no log quando for clicado!</button>
```

`Components` Ao invés de adicionar/modificar comportamento, na verdade CRIA sua própria view (hierarquia de elementos DOM) com comportamentos anexados. Um exemplo de caso de uso para isso pode ser um componente de cartão de contato:

```
import {Component, View} from '@angular/core';

@Component({
  selector: 'contact-card',
  template: `
    <div>
      <h1>{{name}}</h1>
      <p>{{city}}</p>
    </div>
  `
})
class ContactCard {
  @Input() name: string
  @Input() city: string
  constructor() {}
}
```

Que para ser usado podemos fazer assim:

```
<contact-card [name]="'foo'" [city]="'bar'"></contact-card>
```

> ###### 2. O que são `services`? Dê alguns exemplos de utilização.

`Services`
Um serviço é uma classe com um propósito específico, e no framework Angular, usamos serviços para principalmente três propósitos:

1. Para implementar uma `Regra de Negócio` que é independente de qualquer `Componente`
2. Acessar `Dados Compartilhados`
3. `Interações Externas`

Exemplo:

```
Acessar um Web Service/API REST via http
```

> ###### 3. O que são `pipes`? Dê alguns exemplos de utilização.

1. Pipes em Angular: Um pipe recebe um dado como entrada e transforma esse dado na saída desejada.

Exemplo:

`component.ts`

```
const dinheiroInfinito = 9999
```

`component.html`

```
 <b> Eu tenho {{ dinheiroInfinito | currency:'BRL' }} na minha conta </b>
```

`` no navegador ```

```
Eu tenho R$9999,00 na minha conta;
```

2. função pipe() em RxJS: Você pode usar o pipe para usar operações juntas. Pipes deixa você combinar múltiplas funções em uma única função;

> ###### 4. O que é `data-binding` e quais os tipos que o Angular dá suporte?
>
> `data-binding` no Angular é a sincronização entre o modelo e a view/visualização.

O Angular dá suporte à 4 tipos:

### Interpolation.

```
{{ meuvalorzinho }};
```

### Property Binding.

```
 img [src]="imgSource";
```

### Event Binding.

`html`

```
{{title}}
<button (click)="changeMyTitle()">Title is changed on click of this button.</button>
```

`ts`

```
changeMyTitle() {
  this.title = 'Learning Event Binding';
}
```

### Two-Way Data Binding. [(ngModel)]

```
<input type = "text" [(ngModel)]="userName"/>
<h4>Welcome: {{userName}}</h4>
```

> ###### 5. Como se adiciona um _listener_ de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?

### Exemplo JavaScript no angular

```
if (exemploObjDOM.matches('classeExemplo')) {
     elemento.addEventListener('click', () => {
       exemploObjDOM.removeAttribute('classExemplo');
     });
```
### Angular
```
<button (click)="fazerAlgo()>Faça algo!</button>
```

> ###### 6. Quais as diferenças entre `constructor` e `ngOnInit`, e quando devemos usar cada um?

Constructor: é um método default do TypeScript, ele é utilizado como membro uma class e nós possibilita trabalhar com Injeção de Dependência (DI).
ngOnInit: é carregado na inicialização de um componente.`
Quando um componente é criado, os dois métodos são chamados.

> ###### 7. Quais as diferenças entre `Observables` e `Promises`? Como você o utilizaria cada um em um `template`?

``Observables`` é uma coleção que funciona de forma unidirecional, ele emite notificações sempre que ocorrer uma mudança. Já as ``Promises`` são nativas do ES6 e processa um unico evento quando uma operação assíncrona é concluída ou falha.

> ###### 8. Quais as diferenças entre `template-driven forms` e `reactive forms`? Como fazer validação de dados de formulário em cada caso?
``Template-driven`` forma a regra de validação fica no template, é muito mais rápido de se contruir mas como o template muda a todo momento, existe uma probabilidade de perca de regra. Já o ``reactive forms`` a validação é feita no componente ou seja, caso o template mude a validação não será afetada.

> ###### 9. Como se utiliza o `angular router`? Quais são as formas de enviar parâmetros para uma rota?
O ``angular router`` é utilizado para fazer a ligação entre path e o component das páginas criadas. O angular fornece 3 tipos de parâmetros de rota: Parâmetros necessários, Parâmetros opcionais e Parâmetros de consulta.

``Parâmetros necessários``:
```
 this.router.navigate(['game', width, height]);
```
``Parâmetros opcionais``:
```
 this.router.navigate(['game', {width:width,height:height}]);
 ```
``Parâmetros de consulta``:
```
 this.router.navigate(['game', { queryParams: {width:width, height:height}}])
 ```

> ###### 10. O que são _guards de rota_ e para que são úteis?
``Guards`` é um recurso que é utilizado para informar se um usuário pode ou não navegar para uma determinada rota.
> ###### 11. O que é `NgZone`? Em que momento deve ser utilizada?
``NgZone`` é usado para otimizar o desempenho ao iniciar o trabalho que consiste em uma ou mais tarefas assíncronas que não exigem que as atualizações da interface do usuário sejam manipulados.

> ###### 12. O que é _injeção de dependências_ e por que isso é útil? Como você realiza injeção de dependências entre módulos?
A ``injeção de dependências`` é um padrão de design de aplicativo, ela é usada para que os serviços ou objetos que uma classe precisa para desempenhar sua função. Quando programo, faço as injeções de dependências dentro do constructor


# Ah, e a mais importante de todas: Bulbassauro, Charmander ou Squirtle? =)

```
 Que pergunta mais absurda...
```

![Que pergunta mais absurda...](naosoueu.png)

# Detalhes do projeto gerado: MatinhuPokedex

O projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) Versão 9.1.4.
#### [ ``Atualizado para Versão 10.0.1`` ]

## Servidor de desenvolvimento

> Primeiramente, boa noite.

 Segundamente, abra um prompt de comando em uma pasta de sua preferência e execute o comando abaixo para clonar o projeto em sua máquina;

```
git clone https://github.com/matinhu/frontend-developer.git
```

Logo após, ainda pelo prompt de comando, entre no diretório criado e execute o seguinte comando:

```
npm install
```

Após finalizada as instalações das dependências do projeto, execute o comando abaixo para rodar a aplicação em um servidor de desenvolvimento.

```
ng serve
```

Por padrão, navegue até a rota `http://localhost:4200/` Pronto! Você consegue me ajudar e melhorar essa belezinha.
A aplicação será recarregada automaticamente a cada alteração salva em quaisquer dos arquivos do projeto.

## Build

Execute o comando `ng build` para compilar o projeto. Os arquivos compilados serão armazenados no diretório `dist/`. Use o parâmetro `--prod` depois do `ng build` para uma compilação para produção.

## Rodar como PWA

Depois do `ng build`, entre na pasta dist/matinhu-pokedex e execute o comando `npx serve`. A aplicação será construída como PWA e poderá ser instalada no seu dispositivo navegando (por padrão) até `http://localhost:5000`.

A aplicação pode ser instalada também caso você acesse a versão publicada em `https://www.matinhu.com`.

> Primeira versão publicada; Críticas e sugestões e ajudas são bem vindas. Um salgado também
>
> Qualquer coisa ligue para 4002-8922 e peça um PlayStation;
