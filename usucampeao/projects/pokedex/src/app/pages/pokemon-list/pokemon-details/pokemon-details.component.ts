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
  pokemonId: number | undefined;
  isLoading: boolean = true;
  viewFront: boolean = true;
  canLoad: boolean = true;

  pokemonEvolution: any[] = [];

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {

  }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (params: Params) => {
      let pokemonId = params.id;
      this.pokemon = await this.pokemonService.getPokemonById(pokemonId).toPromise();
      setTimeout(() => {
        this.isLoading = false;
      }, 1000)
      this.getEvolutions();
    })
  }

  getEvolutions() {
    this.route.params.subscribe(async (params: Params) => {
      let pokemonId = params.id;
      let pokemonSpecies = await this.pokemonService.getEntityById(pokemonId, 'pokemon-species').toPromise();
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
    console.log("PokemonDetailsComponent -> formatPokemonEvolution -> pokemonEvolutionList", pokemonEvolutionList)


    let pokemonList: any = (localStorage.getItem('pokemonList'));
    if (pokemonList) {
      pokemonList = JSON.parse(pokemonList)
      console.log("PokemonDetailsComponent -> formatPokemonEvolution -> pokemonList", pokemonList)


      var filteredArray = pokemonList.filter(function (pokemon: any) {
        return pokemonEvolutionList.filter(function (pokemonEvolution) {
          return pokemon.name == pokemonEvolution.name;
        }).length == 0
      });
      console.log("PokemonDetailsComponent -> formatPokemonEvolution -> pokemonInfo", filteredArray)


      // let yFilter = pokemonEvolutionList.map(itemY => { return itemY.name; });
      this.pokemonEvolution = pokemonList.filter((itemX: Pokemon) => pokemonEvolutionList.map(itemY => { return itemY.name; }).includes(itemX.name));
      console.log("PokemonDetailsComponent -> formatPokemonEvolution -> filteredX", this.pokemonEvolution)
    }
  }


  // metodo para realizar uma proporção nos status
  getStat(stat: any): number {
    return stat / 1.25;
  }
}
