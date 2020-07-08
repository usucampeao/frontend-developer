import { Component, OnDestroy, OnInit, DoCheck } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, DoCheck {
  pokemons: Pokemon[] = [];
  nrPokesCarregados: number;
  // lista e carregados obs
  pokemonListSubscription;
  nrPokesCarregadosSub;

  // busca obs
  searchItemSubscription;
  searchItem = '';

  scrolled = true;

  constructor(
    private pokemonService: PokemonService,
    private http: HttpClient
  ) {}
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

  public myTrackByFunction(index: number, pokemon: Pokemon): number {
    return pokemon.id;
  }
}
