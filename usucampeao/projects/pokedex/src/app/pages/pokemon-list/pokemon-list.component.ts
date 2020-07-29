import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service'
import { Pokedex, PokemonEntry } from 'projects/pokedex/models/pokedex';
import { Pokemon } from 'projects/pokedex/models/pokemon';
import { Page } from 'projects/pokedex/models/page';
import { Router } from '@angular/router';

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
    private router: Router
  ) {
    this.requestParams = {
      limit: 200,
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
      this.pokemonService.getNextPokemonPage(this.page.next).subscribe((page) => {
        this.page = page;
        this.getPokemonList();
      })
    }
  }

  async getPokemonList() {
    if (this.page && this.page.results) {
      await this.page.results.forEach(async (pokemon) => {
        this.pokemonList.push(await this.pokemonService.getPokemonByUrl(pokemon.url).toPromise());
      })
      setTimeout(() => {
        this.sortList();
      }, 2000);
    }
  }

  sortList() {
    this.pokemonList = [...this.pokemonList].sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      return 0;
    })
  }

  openDetails(pokemon: Pokemon){
  console.log("PokemonListComponent -> openDetails -> pokemon", pokemon)

    this.router.navigate([`${pokemon.name}/${pokemon.id}`,  {pokemon: pokemon}])
  }
}
