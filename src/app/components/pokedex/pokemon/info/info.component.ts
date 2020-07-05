import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../../services/pokemon.service';
import { Pokemon } from '../../../../models/Pokemon';

@Component({
  selector: 'app-info',
  templateUrl: '../pokemon-info/pokemon-info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router
  ) {}
  pokemonId;
  pokemon;
  height;
  weight;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params['id'];
    });

    if (this.pokemonService.pokemons[0]) {
      this.pokemon = this.pokemonService.pokemons[this.pokemonId - 1];
      this.height = (this.pokemon.height * 0.1).toFixed(1);
      this.weight = (this.pokemon.weight * 0.1).toFixed(1);
    } else {
      this.pokemon = this.pokemonService
        .getPokemonById(this.pokemonId)
        .subscribe((response) => {
          this.pokemon = new Pokemon(
            response['name'],
            response['id'],
            response['sprites']['front_default'],
            response['types'],
            response['abilities'],
            response['height'],
            response['weight'],
            response['base_experience'],
            response['forms'],
            response['held_items'],
            response['game_indices'],
            response['is_default'],
            response['location'],
            response['moves'],
            response['order'],
            response['stats'],
            response['species']
          );
          this.height = (this.pokemon.height * 0.1).toFixed(1);
          this.weight = (this.pokemon.weight * 0.1).toFixed(1);
        });
    }
  }
  close() {
    this.router.navigate(['pokedex']);
  }
}
