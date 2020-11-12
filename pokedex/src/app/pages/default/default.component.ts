import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonList } from '../../models/pokemonList.model';
import { Pokemon } from '../../models/pokemon.model';


@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {
  pokemonList: PokemonList[];
  pokemons = [];
  limit = 156;
  optionsPaginate: number[] = [24, 48, 64]
  optionsSort: string[] = ["A a Z", "Z a A"]
  sortSelected: string;

  searchPokemon(term): void {
    this.pokemons = this.pokemons.filter(it => {
      return it.toLocaleLowerCase().inde(term);
    });
  }

  selectOrder(option): void {
    this.sortSelected = option;
  }

  sortBy(name: string): PokemonList[] {
    if (this.sortSelected === this.optionsSort[0]) {
      return this.pokemons.sort((a, b) => a[name] > b[name] ? 1 : -1);
    } else if(this.sortSelected === this.optionsSort[1]) {
      return this.pokemons.sort((a, b) => a[name] > b[name] ? -1 : 1);
    } else {
      return this.pokemons;
    }
  }

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonList(this.limit).subscribe((pokemons: PokemonList[]) => {
      this.pokemonList = pokemons;

      for (let i = 0; i < this.limit; i++){
        this.pokemonService.getPokemonById((this.pokemonList[i].name)).subscribe((pokemon: Pokemon[]) => {
          this.pokemons.push({
            name: this.pokemonList[i].name,
            image:  pokemon[`sprites`].other.dream_world.front_default,
            types: pokemon[`types`]
          });
        });
      }
    });
  }

}

