import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service'
import { SortEngineService } from '../../../services/sort-engine.service'
import { Pokedex, PokemonEntry } from 'projects/pokedex/models/pokedex';
import { Pokemon } from 'projects/pokedex/models/pokemon';
import { Page } from 'projects/pokedex/models/page';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokedex: Pokedex | undefined;

  pokemonList: Pokemon[] = [];
  filteredPokemonList: Pokemon[] = [];

  page: Page | undefined;
  requestParams: {
    limit: number;
    offset: number;
  };
  isLoading: boolean = true;

  // todo - implementar theme por serviço ou diretiva
  theme: string = 'orange';

  search: FormControl;
  searchMode: boolean = true;
  ascDirection: boolean = true;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
    this.search = new FormControl('');
    // alterar limit caso seja preciso carregar os pokemons parcialmente
    this.requestParams = {
      limit: 807,
      offset: 0
    }
  }

  ngOnInit(): void {
    let theme = localStorage.getItem('theme');
    theme ? this.theme = theme : false

    let offList: any = localStorage.getItem('pokemonList');
    this.isLoading = true;
    if (offList) {
      setTimeout(() => {
        this.pokemonList = JSON.parse(offList);
        this.filteredPokemonList = this.pokemonList;
        this.isLoading = false;
      }, 600)
    } else {
      this.getPokemonPage();
    }
    this.searchEngine();
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
      }, 3000);
    }
  }

  searchEngine() {
    this.search.valueChanges.subscribe(name => {
      if (name) {
        this.filteredPokemonList = this.pokemonList.filter((pokemon: Pokemon) =>
          pokemon.name.startsWith(name)
        )
      } else {
        this.filteredPokemonList = this.pokemonList;
      }
    })
  }

  sortList() {
    this.pokemonList = SortEngineService.sort(this.pokemonList);
    this.isLoading = false;
    localStorage.setItem('pokemonList', JSON.stringify(this.pokemonList))
  }

  sort() {
    this.filteredPokemonList = SortEngineService.sortDirection(this.pokemonList, this.ascDirection)
    if (this.search.value) {
      this.filteredPokemonList = this.filteredPokemonList.filter((pokemon: Pokemon) =>
        pokemon.name.startsWith(this.search.value)
      )
    }
    this.ascDirection = !this.ascDirection;
  }

  openDetails(pokemon: Pokemon) {
    this.router.navigate([pokemon.name])
  }
}
