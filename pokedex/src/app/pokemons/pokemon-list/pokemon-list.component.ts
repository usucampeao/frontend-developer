import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { from, Observable, forkJoin } from "rxjs";
import { map } from 'rxjs/operators';
import { Pokemon } from "src/app/model/Pokemon";
import { Ordenador } from "src/app/util/Ordenador.service";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: 'pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

    filtro = new FormControl(); //Filtro pelo nome do pokemon
    ordem = '0-99'; //Ordenação inicial - ver Ordenador.ordens para lista de ordenações possíveis

    listaTodosPokemons: Pokemon[];

    carregando: boolean = false; //booleano que indica se está carregando ou não
    
    datas$: Observable<Pokemon[]>; //Lista de pokemons como Observable (não utilizado)

    constructor (
        private pokemonService: PokemonService,
        private ordenador: Ordenador, //Service com funções de ordenação e lista de ordens
        private router: Router
    ) {}

    async ngOnInit() {
        await this.buscarPokemons(); //Busca a lista com o detalhe de todos os pokemons. (Essa busca só é feita uma vez)
    }

    async buscarPokemons() {
        this.carregando = true;
        this.pokemonService.buscarTodosPokemons().subscribe( pokemons => { //Busca por todos os pokemons da geração II
            this.listaTodosPokemons = new Array<Pokemon>();
            let contagem = 0; //Contagem de pokemons
            pokemons.results.forEach( (pokemon) => {
                this.pokemonService.buscarPokemon(pokemon.name).subscribe( //Busca informacoes detalhadas do pokemon
                    detalhesPokemon => {
                        contagem++;
                        this.listaTodosPokemons.push(detalhesPokemon) //Acrescenta pokemon com detalhes à lista de pokemons
                        if (contagem == pokemons.results.length) { //Quando tiver buscado o detalhe de todos os pokemons
                            this.ordenarListaPokemons();
                            this.carregando = false;
                        }
                    },
                    error => console.log(error)
                )
            })
        });
    }

    filtroPokemon(nomePokemon): Boolean {
        return (this.filtro.value == null) ? true : nomePokemon.startsWith(this.filtro.value); //Filtro usado no *ngIf do card pokemon
    }

    ordenarListaPokemons() {
        let funcaoDeOrdenacao = this.ordenador.buscarFuncaoDeOrdenacao(this.ordem); //Busca função de ordenaçào pela ordem escolhida
        this.listaTodosPokemons.sort(funcaoDeOrdenacao);
    }

    irParaDetalhes(pokemon: Pokemon) {
        this.router.navigate(['/pokemon', pokemon.id], {state: {data: pokemon}});
    }

    //Métodos para que lista de pokemons seja um Observable -----------------------------------------------------
    //Não foi usado, pois demora mais para a ordenação dos pokemons
    async buscarPokemonsObservable() {
        this.pokemonService.buscarTodosPokemons().subscribe(
            pokemons => {
                this.listaTodosPokemons = new Array<Pokemon>();
                let observablePokemons = new Array<Observable<Pokemon>>();
                pokemons.results.forEach( 
                    (pokemon) => {
                        let promisePokemon = this.pokemonService.buscarPokemonPromise(pokemon.name)
                        observablePokemons.push(from(promisePokemon));
                    }
                );
                this.datas$ = forkJoin(observablePokemons);
            }
        )
    }

    ordenarObservablePokemons() {
        let funcaoDeOrdenacao = this.ordenador.buscarFuncaoDeOrdenacao(this.ordem);
        this.datas$ = this.datas$.pipe(map(pokemons => pokemons.sort(funcaoDeOrdenacao)));
    }

}