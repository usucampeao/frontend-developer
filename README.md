### PokeDex - Uma Pokedex em AngularJS  

Olá Treinador, tudo certo? espero que sim. =) 

Hoje, vim te presentear com sua nova PokeDex. Mas você não sabe o que é uma PokeDex? Bem eu te explico. 

A PokeDex é uma enciclopédia virtual onde todos os treinadores Pokemon registram todos os Pokemons encontrados em sua jornada. 

Até a Próxima.

### Detalhes do projeto

O projeto foi desenvolvido com Angular CLI version 9.0.2.

## Servidor de desenvolvimento

Antes de iniciar o servidor de desenvolvimento, certifique-se de que todo o seu repositório está atualizado com o cógido mais recente disponibilizado. 

Em seguida, execute `npm install` dentro da pasta `\frontend-developer\pokeDex` para instalar as dependências do projeto em sua máquina. 

Após as intalações serem finalizadas, execute  `ng serve` para rodar a aplicação em um servidor de desenvolvimento. 

Visite a URL:  `http://localhost:4200/` para ver sua PokeDex funcionando. 

### Questionário

1. O que são ``components`` e ``directives`` e quais as difenças entre eles? Dê alguns exemplos de utilização.

R: Components são partes de códigos que podem ser reutilizados ao decorrer do projeto. Exemplo disso são alertas criados para dar o feedback para o usuário após alguma ação. 

Directives são usadas como extensão do HTML para uma manipulação simples do DOM. Exemplo disso é mudar a cor de background de uma tag DIV sem interferir nas demais TAGs

2. O que são ``services``? Dê alguns exemplos de utilização.

R: Services são objetos usados para organizar e compartilhar informações, facilitando a comunicação remota. Exemplo disso é fazer um Get na API da PokeAPI: 

 getFirstPokemon() {
    return this.http.get<Pokemon>(`${this.API}/1`);
  }

3. O que são ``pipes``? Dê alguns exemplos de utilização.

R: Pipes são um recurso que é utilizado para formatar valores corretamente. Exemplo disso é usa-lo para transformar e formatar seqüências de caracteres, valores de moeda, datas e outros dados de exibição.

4. O que é ``data-binding`` e quais os tipos que o Angular dá suporte?

Data-binding é um forma de associar informações que estão no component para o template. O angualar disponibiliza 4 formas de aplicar o data-binding: 

Interpolação: {{ valor }}
Property Binding: [propriedade]="valor"
Event Binding: (evento)="handler"
Two-Way Data Binding: [(ngModel)]="propriedade"

5. Como se adiciona um *listener* de eventos do usuário em um componente? Por exemplo, como adicionar uma função que responde a um clique de usuário?

R: 
HTML: 
<button (click)="Funcao()"></button>

TS: 

Funcao() {
    console.log('click');
}

6. Quais as diferenças entre ``constructor`` e ``ngOnInit``, e quando devemos usar cada um?

R: O constructor é um método default. Ele é usado para a injeção de dependências

ngOnInit faz parte do ciclo de vida do component, ele é usado para a inicialização lógica de um component.

Ambos podem ser usados juntos, pois cada um possuí um proposito diferente no código. 

7. Quais as diferenças entre ``Observables`` e ``Promises``? Como você o utilizaria cada um em um ``template``?

R: Observables é uma coleção que funciona de forma unidirecional, ele emite notificações sempre que ocorrer uma mudança. Já as Promises são nativas do ES6 e processa um unico evento quando uma operação assíncrona é concluída ou falha

8. Quais as diferenças entre ``template-driven forms`` e ``reactive forms``? Como fazer validação de dados de formulário em cada caso?

R: Template-driven forms a regra de validação fica no template, é muito mais rápido de se contruir mas como o template muda a todo momento, existe uma probabilidade de perca de regra. Já o reactive forms a validação é feita no componente ou seja, caso o template mude a validação não será afetada.


9.  Como se utiliza o ``angular router``? Quais são as formas de enviar parâmetros para uma rota?

R: O angular router é utilizado para fazer a ligação entre path e o component das páginas criadas. O angular fornece 3 tipos de parâmetros de rota: Parâmetros necessários, Parâmetros opcionais e Parâmetros de consulta. 

Parâmetros necessários: this.router.navigate(['game', width, height]);

Parâmetros opcionais: this.router.navigate(['game', {width:width,height:height}]);

Parâmetros de consulta: this.router.navigate(['game', { queryParams: {width:width, height:height}}])

10.  O que são *guards de rota* e para que são úteis?

R: Guards é um recurso que é utilizado para informar se um usuário pode ou não navegar para uma determinada rota.

11. O que é ``NgZone``? Em que momento deve ser utilizada?

R: NgZone é usado para otimizar o desempenho ao iniciar o trabalho que consiste em uma ou mais tarefas assíncronas que não exigem que as atualizações da interface do usuário sejam manipulados. 

12. O que é *injeção de dependências* e por que isso é útil? Como você realiza injeção de dependências entre módulos?

R: A injeção de dependências é um padrão de design de aplicativo, ela é usada para que os serviços ou objetos que uma classe precisa para desempenhar sua função. Quando programo, faço as injeções de dependências dentro do constructor

Ah, e a mais importante de todas: Bulbassauro, Charmander ou Squirtle? =)

Charmander, desde pequeno a paixão pelos Pokemons de fogo serão eternas. 