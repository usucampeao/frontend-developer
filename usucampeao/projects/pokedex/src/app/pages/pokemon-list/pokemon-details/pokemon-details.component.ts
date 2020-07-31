import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../../../../models/pokemon';
import { PokemonService } from '../../../../services/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon!: Pokemon;
  isLoading: boolean = true;
  viewFront: boolean = true;

  pokemonEvolution: any[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {

  }

  async ngOnInit(): Promise<void> {
    window.scroll(0,0);
    this.route.params.subscribe(async (params: Params) => {
      let pokemonName = params.name;
      this.pokemon = await this.pokemonService.getPokemonByName(pokemonName).toPromise();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000)
      this.getEvolutions();
    })
  }

  getEvolutions() {
    this.route.params.subscribe(async (params: Params) => {
      let pokemonName = params.name;
      let pokemonSpecies = await this.pokemonService.getEntityByName(pokemonName, 'pokemon-species').toPromise();
      if (pokemonSpecies.evolution_chain) {
        let evolutionChain = await this.pokemonService.getEntityByUrl(pokemonSpecies.evolution_chain.url).toPromise();
        if (evolutionChain) {
          this.formatPokemonEvolution(evolutionChain)
        }
      }
    })
  }

  // implementar recurssão
  async formatPokemonEvolution(evolutionChain: any) {
    let pokemonEvolutionList = new Array();
    let first = evolutionChain.chain;
    let second, thirth: any

    pokemonEvolutionList.push(first.species)
    if (first.evolves_to[0]) {
      second = first.evolves_to[0];
      pokemonEvolutionList.push(second.species)
    }
    if (second.evolves_to[0]) {
      thirth = second.evolves_to[0];
      pokemonEvolutionList.push(thirth.species)
    }

    let pokemonList: any = (localStorage.getItem('pokemonList'));
    if (pokemonList) {
      pokemonList = JSON.parse(pokemonList)

      this.pokemonEvolution = pokemonList.filter((itemX: Pokemon) => pokemonEvolutionList.map(itemY => { return itemY.name; }).includes(itemX.name));
    }
  }

  // metodo para realizar uma proporção nos status
  getStat(stat: any): number {
    return stat / 1.25;
  }
}
