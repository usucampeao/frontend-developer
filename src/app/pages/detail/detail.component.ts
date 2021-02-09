import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass']
})
export class DetailComponent implements OnInit {

  public pokemon: any;
  public species: any;
  public evolution_chain: any = new Array();

  constructor(private activatedRoute: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    var name = this.activatedRoute.snapshot.params['name'];
    this.getPokemon(name);
    this.getPokemonSpecies(name);
  }

  getPokemon(name: any) {
    // busca os dados principais do pokemon
    this.pokemonService.getPokemonByName(name)
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        this.pokemon.name = this.pokemon.name.replace(/-/g, " ");
      });
  }
  
  getPokemonSpecies(name: any) {
    // busca os dados de especie do pokemon
    this.pokemonService.getPokemonSpeciesByName(name)
      .subscribe(species => {
        this.species = species;

        // busca a cadeia de evolucao do pokemon
        this.pokemonService.getPokemonByUrl(species.evolution_chain.url)
          .subscribe(evolution_chain => {
            var evoData = evolution_chain.chain;
            do {
              
              var evoDetails = evoData['evolution_details'][0];
              var splittedUrl = evoData.species.url.split('/', 7);
              var idPokemon = splittedUrl[6];

              this.evolution_chain.push({
                "sprite": this.pokemonService.baseUrlSprite + '/' + idPokemon + '.png',
                "name": evoData.species.name,
                "min_level": !evoDetails ? 1 : evoDetails.min_level,
              });
            
              evoData = evoData['evolves_to'][0];
            } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
          });
          console.log(this.evolution_chain);
      });
  }
}
