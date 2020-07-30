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
      console.log("PokemonDetailsComponent ->  this.pokemon ", this.pokemon)
      this.getEvolutions();
    })
  }

  getEvolutions() {
    this.route.params.subscribe(async (params: Params) => {
      let pokemonId = params.id;
      console.log("PokemonDetailsComponent -> getEvolutions -> pokemonId", pokemonId)
      let pokemonSpecies = await this.pokemonService.getEntityById(pokemonId, 'pokemon-species').toPromise();
      if (pokemonSpecies.evolution_chain) {
        let evolutionChain = await this.pokemonService.getEntityByUrl(pokemonSpecies.evolution_chain.url).toPromise();
        if (evolutionChain) {
          console.log("PokemonDetailsComponent ->  this.pokemon ", evolutionChain)
          this.formatPokemonEvolution(evolutionChain)
        }
      }
    })
  }

  // implementar recurssão
  formatPokemonEvolution(evolutionChain: any) {
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
  }


  // metodo para realizar uma proporção nos status
  getStat(stat: any): number {
    return stat / 1.25;
  }
}
