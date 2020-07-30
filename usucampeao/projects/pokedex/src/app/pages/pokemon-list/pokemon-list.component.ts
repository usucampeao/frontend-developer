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
  isLoading: boolean = true;

  // todo - implementar theme por serviço ou diretiva
  theme: string = 'red';

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
    // alterar limit caso seja preciso carregar os pokemons parcialmente
    this.requestParams = {
      limit: 800,
      offset: 0
    }
  }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    theme ? this.theme = theme : false

    let offList: any = localStorage.getItem('pokemonList');
    this.isLoading = true;
    if (offList) {
      setTimeout(()=> {
        this.pokemonList = JSON.parse(offList);
        this.isLoading = false;
      }, 200)
    } else {
      this.getPokemonPage();
    }
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

        let pokemonEntity = await this.pokemonService.getPokemonByUrl(pokemon.url).toPromise()

        let pokemonSimpleObj: any = {
          id: pokemonEntity.id,
          name: pokemonEntity.name,
          sprites: pokemonEntity.sprites,
          types: pokemonEntity.types
        }
        this.pokemonList.push(pokemonSimpleObj);
      })
      setTimeout(() => {
        this.sortList();
      }, 1500);
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
    this.isLoading = false;
    localStorage.setItem('pokemonList', JSON.stringify(this.pokemonList))
  }

  openDetails(pokemon: Pokemon) {
    this.router.navigate([`${pokemon.name}/${pokemon.id}`, { pokemon: pokemon }])
  }
}
