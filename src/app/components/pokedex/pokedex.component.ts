import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  DoCheck,
  Input,
} from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy, DoCheck {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  pokemons: Pokemon[] = [];
  nrPokesCarregados: number;
  // lista e carregados obs
  pokemonListSubscription;
  nrPokesCarregadosSub;

  // busca obs
  searchItemSubscription;
  searchItem = '';

  numbers = [];

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonService.searchItemSubject.subscribe((response) => {
      this.searchItem = response;
    });

    if (this.pokemonService.pokemons[0]) {
      this.pokemons = this.pokemonService.pokemons;
      this.nrPokesCarregados = this.pokemonService.totalCarregado;
    } else {
      this.pokemonListSubscription = this.pokemonService.listaPokeAtt.subscribe(
        (response) => {
          this.pokemons = response.slice(0, this.nrPokesCarregados);
        }
      );
      this.nrPokesCarregadosSub = this.pokemonService.novosPokesCarregados.subscribe(
        (response) => {
          this.nrPokesCarregados = response;
        }
      );
      this.searchItemSubscription = this.pokemonService.searchItemSubject.subscribe(
        (response) => {
          this.searchItem = response;
        }
      );
    }
  }

  ngDoCheck(): void {
    this.pokemonService.searchItemSubject.next(this.searchItem);
  }

  ngOnDestroy(): void {
    // n perder a lista carregada.
    // this.pokemonService.searchItemSubject.next('');
    // this.searchItemSubscription.unsubscribe();
  }
  
  testinho() {
    
    // await this.pokemonService.getIndexedDbItens(0);
    // console.log('PokemonService.Pokemons: ', this.pokemonService.pokemons);
    console.log('Pokemons', this.pokemons);
    // this.pokemonService.getIndexedDbItens(1);
    // console.log('',this.pokemonService.pokemons);
  }

}
