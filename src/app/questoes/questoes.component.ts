import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.sass']
})
export class QuestoesComponent {

  panelOpenState = false;
  questoes = [
    {
      question: "O que são components e directives e quais as difenças entre eles? Dê alguns exemplos de utilização.",
      answer: `O Component é uma Directive especial, ele foi criado para suprir e corrigir problemas que a directive possui quando voce quer criar um componente html que possui um controller e um html proprio, esses problemas seriam: nao possui bindings, nao
    possui scope isolado e ambiguidades geradas pelas especificações das directives do tipo link e atributo. Voce deve usar um Component: Sempre que quiser criar um componente html de scopo isolado (substitui a criação de um html com binding via
    ng-controller de um controller). Voce deve usar uma Directive: Apenas quando voce quiser criar um atributo que executa algum javascript de manipulação de DOM ou manipulação simples de informação.`
    },
    {
      question: "O que são services? Dê alguns exemplos de utilização.",
      answer: `Service é o objeto usado para organizar e/ou compartilhar estados de objetos e as regras de negócio da aplicação. Ele é singleton, ou seja, há apenas uma instância disponível durante a vida útil da aplicação. Outra característica importante é
      a inicialização tardia (lazily instantiated), que só é efetuada quando o Angular identifica que tem algum componente dependente.`
    },
    {
      question: " O que são pipes? Dê alguns exemplos de utilização.",
      answer: `Para exibir corretamente os dados o Angular desenvolveu o que chamamos de pipe, os quais permitem transformar os dados antes de ser exibido diretamente ao usuário.`
    },
    {
      question: "  O que é ``data-binding`` e quais os tipos que o Angular dá suporte?",
      answer: `Data Binding é uma técnica geral que une duas fontes de dados/informações e as mantém em sincronia em um processo que estabelece uma conexão entre UI (interface de usuário) da aplicação e a lógica de negócio.`
    },
    {
      question: "Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?",
      answer: `Seguindo o exemplo comentado um Listener para adicionar uma função é só usar o Listener (click) com função desejada, Exemplo no component , pokemon-data.component.ts  `
    },
    {
      question: "Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?.",
      answer: `constructor é pricipalmente utilizado para injetar as dependências e o ngOnInit faz parte do ciclo de vida do component e acionando ao inicia-lo  `
    },
    {
      question: "Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?",
      answer: `Tanto as  Promeses quanto os Observables ​​nos ajudarão a trabalhar com as funcionalidades assíncronas em JavaScript. Eles são muito semelhantes em muitos casos, no entanto, ainda existem algumas diferenças entre os dois, promeses são valores que serão resolvidos de maneiras assíncronas como chamadas http. Por outro lado, os observáveis ​​lidam com uma sequência de eventos assíncronos. As principais diferenças entre eles estão listadas abaixo:

      Promeses:

      tendo um pipeline
      normalmente só use com retorno de dados assíncrono
      não é fácil cancelar
      Observables:

      são canceláveis
      são rastreáveis ​​por natureza, como repetir e repetir quando
      transmitir dados em vários pipelines
      tendo operações semelhantes a matriz, como map, filter, etc.
      pode ser criado a partir de outras fontes, como eventos
      são funções que podem ser subscritas mais tarde`
    },
    {
      question: "Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?",
      answer: `O ReactiveForms você realiza a validação no seu componente, ou seja, se mudarem o template (que muda toda hora) a regra continua no componente, sem risco de perdê-la.

      Já o template form a regra de validação fica no template. É mais rápido de fazer, mas como o template muda toda hora é bem provável que você perca a regra de validação que adicionou.`
    },
    {
      question: " Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?",
      answer: `No Angular, muita coisa é modularizada, e as rotas não são diferentes. Ao criar uma aplicação Angular, somos indagados sobre o uso das mesmas (Would you like to add Angular Routing?), e ao responder “Yes”, já temos tudo que precisamos para o roteamento.

      Na verdade, tudo que precisamos para ter rotas em nossa aplicação é um arquivo de módulo das rotas e importá-lo posteriormente no Root Module.

      Este arquivo de rotas, normalmente chamado app-routing.module.ts.ts
      Exemplos no component app-routing.module.ts, app.components.html`
    },
    {
      question: "O que são *guards de rota* e para que são úteis?",
      answer: `Um guard é um recurso utilizado para informar se um usuário pode navegar para uma determinada rota ou não. Ele pode ser criado através do comando ng generate guard`
    },
    {
      question: "O que é ``NgZone``? Em que momento deve ser utilizada?",
      answer: `O uso mais comum desse serviço é otimizar o desempenho ao iniciar um trabalho que consiste em uma ou mais tarefas assíncronas que não requerem atualizações de IU ou tratamento de erros para serem tratadas pelo Angular. Essas tarefas podem ser iniciadas por meio de runOutsideAngular e, se necessário, essas tarefas podem entrar novamente na zona Angular por meio de execução.
      `
    },
    {
      question: "O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?",
      answer: `Injeção de Dependências é um tipo de Inversão de Controle e significa que uma classe não mais é responsável por criar ou buscar os objetos dos quais depende.

      Isso serve para desacoplar as classes, evitando dependência direta entre elas.

      Os resultados são:

      Maior índice de reaproveitamento
      Permite incluir novas funcionalidades sem alterar as já existentes
      Possibilidade de criar mocks em testes unitários.

      angular.module('app.services',[]);

      var appServices = angular.module('app.services');

      appServices.factory('usuarioService', ['$rootScope', 'renderService',
        function($rootScope, renderService){
            // logica do factory
        }]);

        appServices.factory('renderService', ['$http', function($http){
            // logica do factory
         }]);`
    },

  ]
}

