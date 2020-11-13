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
  optionsSort: string[] = ["A a Z", "Z a A"]
  sortSelected: string;

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
      pokemons.map(pokemon => {
        this.pokemonService.getPokemonById((pokemon.name)).subscribe((pokemon: Pokemon[]) => {
          this.pokemons.push({
            name: pokemon[`name`],
            image:  pokemon[`sprites`].other.dream_world.front_default,
            types: pokemon[`types`]
          });
        });
      });
    });
  }
}
