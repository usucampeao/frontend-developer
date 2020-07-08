import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../../services/pokemon.service';
import { Pokemon } from '../../../../models/Pokemon';
import { forkJoin } from 'rxjs';

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

  moves = [];
  abilitySelected = 0;
  allAbilitiesReceived = false;

  pokemonStats;
  maxStat;
  stats: string[] = ['0%', '0%', '0%', '0%', '0%', '0%'];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params['id'];
    });
    if (this.pokemonService.pokemons[0]) {
      this.pokemon = this.pokemonService.pokemons[this.pokemonId - 1];
      this.loadMoves();
      this.loadStats();
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
            response['species'],
            null
          );
          this.loadStats();
          this.loadMoves();
        });
    }
  }
  loadStats() {
    this.height = (this.pokemon.height * 0.1).toFixed(1);
    this.weight = (this.pokemon.weight * 0.1).toFixed(1);
    this.pokemonStats = [
      this.pokemon.stats[0]['base_stat'],
      this.pokemon.stats[1]['base_stat'],
      this.pokemon.stats[2]['base_stat'],
      this.pokemon.stats[3]['base_stat'],
      this.pokemon.stats[4]['base_stat'],
      this.pokemon.stats[5]['base_stat'],
    ];
    this.maxStat = Math.max(...this.pokemonStats);
  }

  totalBaseStats() {
    return (
      this.pokemonStats[0] +
      this.pokemonStats[1] +
      this.pokemonStats[2] +
      this.pokemonStats[3] +
      this.pokemonStats[4] +
      this.pokemonStats[5]
    );
  }

  loadMoves() {
    const requests = [];
    for (const ability of this.pokemon.abilities) {
      requests.push(this.pokemonService.getAbility(ability['ability']['url']));
    }
    forkJoin(requests).subscribe((responses) => {
      for (let i = 0; i < responses.length; i++) {
        this.moves[i] = responses[i];
      }
      this.allAbilitiesReceived = true;
    });
  }


  abilitySelect(no: number) {
    this.abilitySelected = no;
  }
  close() {
    this.router.navigate(['pokedex']);
  }
}
