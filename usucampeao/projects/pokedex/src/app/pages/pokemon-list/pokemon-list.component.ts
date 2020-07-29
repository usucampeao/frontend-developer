import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service'
import { Pokedex, PokemonEntry } from 'projects/pokedex/models/pokedex';
import { Pokemon } from 'projects/pokedex/models/pokemon';
import { Page } from 'projects/pokedex/models/page';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemonLimit: number = 50;
  pokedex: Pokedex | undefined;
  pokemonEntry: PokemonEntry[] | undefined;
  pokemonList: Pokemon[] = [];
  page: Page | undefined;
  requestParams: {
    limit: number;
    offset: number;
  };
  results: {
    name: string;
    url: string;
  }[] = [];

  constructor(
    private pokemonService: PokemonService,
  ) {
    this.requestParams = {
      limit: 50,
      offset: 0
    }
  }

  ngOnInit(): void {
    this.getPokemonPage();
  }

  getPokemonPage(): void {
    this.pokemonService.getPokemon(this.requestParams).subscribe((page: Page) => {
      this.page = page;
      this.getPokemonList();
    })
  }

  requestPokemon() {
    if (this.page && this.page.next) {
      this.pokemonService.getNextPokemonPage(this.page.next).subscribe(async (page) => {
        this.page = page;
        await this.getPokemonList();
      })
    }
  }

  async getPokemonList() {
    if (this.page && this.page.results) {
      this.page.results.forEach(async (pokemon) => {
        this.pokemonList.push(await this.pokemonService.getPokemonByUrl(pokemon.url).toPromise())
      });
    }
  }

}
