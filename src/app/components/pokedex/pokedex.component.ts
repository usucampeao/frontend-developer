import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  DoCheck,
} from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
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

  displayedColumns: string[] = ['id', 'name', 'sprite'];

  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
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

  ngDoCheck(): void {
    this.pokemonService.searchItemSubject.next(this.searchItem);
  }

  ngOnDestroy(): void {
    this.pokemonListSubscription.unsubscribe();
    this.searchItemSubscription.unsubscribe();
  }

  testinho() {
    console.log('PokemonService.Pokemons: ', this.pokemonService.pokemons);
    console.log('Pokemons', this.pokemons);
    // console.log('',this.pokemonService.pokemons);
  }
}
