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
  hp;
  attack;
  defence;
  spAttack;
  spDefence;
  speed;

  moves = [];
  abilitySelected = 0;
  allAbilitiesReceived = false;

  pokemonStats;
  maxPokemonStats = [];
  minPokemonStats = [];
  statsToShow = [];
  maxStat;
  selectedStat = 'base';
  stats: string[] = ['0%', '0%', '0%', '0%', '0%', '0%'];
  response = [
    'name',
    'id',
    'sprites',
    'front_default',
    'types',
    'abilities',
    'height',
    'weight',
    'base_experience',
    'forms',
    'held_items',
    'game_indices',
    'is_default',
    'location',
    'moves',
    'order',
    'stats',
    'species',
  ];

  ngOnInit(): void {
    const id = 'id';
    this.activatedRoute.params.subscribe((params) => {
      this.pokemonId = params[id];
    });
    this.loadMoves();
    this.loadStats();
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
    const ability = 'ability';
    const url = 'url';
    for (const ability of this.pokemon.abilities) {
      requests.push(this.pokemonService.getAbility(ability[ability][url]));
    }
    forkJoin(...requests).subscribe((responses) => {
      for (let i = 0; i < responses.length; i++) {
        this.moves[i] = responses[i];
      }
      this.allAbilitiesReceived = true;
    });
  }
  loadStats() {
    const basestat = 'basestat';
    if (this.pokemonService.pokemons[0]) {
      this.pokemon = this.pokemonService.pokemons[this.pokemonId - 1];
      this.height = (this.pokemon.height * 0.1).toFixed(1);
      this.weight = (this.pokemon.weight * 0.1).toFixed(1);
      this.height = (this.pokemon.height * 0.1).toFixed(1);
      this.weight = (this.pokemon.weight * 0.1).toFixed(1);

      this.pokemonStats = [
        this.pokemon.stats[5][basestat],
        this.pokemon.stats[4][basestat],
        this.pokemon.stats[3][basestat],
        this.pokemon.stats[2][basestat],
        this.pokemon.stats[1][basestat],
        this.pokemon.stats[0][basestat],
      ];
      this.maxStat = Math.max(...this.pokemonStats);

      this.hp = (this.pokemon.stats[5][basestat] / this.maxStat) * 100;
      this.attack = (this.pokemon.stats[4][basestat] / this.maxStat) * 100;
      this.defence = (this.pokemon.stats[3][basestat] / this.maxStat) * 100;
      this.spAttack = (this.pokemon.stats[2][basestat] / this.maxStat) * 100;
      this.spDefence = (this.pokemon.stats[1][basestat] / this.maxStat) * 100;
      this.speed = (this.pokemon.stats[0][basestat] / this.maxStat) * 100;
      this.pokemonService.activePokemon.next(this.pokemon);
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
          this.height = (this.pokemon.height * 0.1).toFixed(1);
          this.weight = (this.pokemon.weight * 0.1).toFixed(1);

          this.pokemonStats = [
            this.pokemon.stats[5][basestat],
            this.pokemon.stats[4][basestat],
            this.pokemon.stats[3][basestat],
            this.pokemon.stats[2][basestat],
            this.pokemon.stats[1][basestat],
            this.pokemon.stats[0][basestat],
          ];
          this.maxStat = Math.max(...this.pokemonStats);

          this.hp = (this.pokemon.stats[5][basestat] / this.maxStat) * 100;
          this.attack = (this.pokemon.stats[4][basestat] / this.maxStat) * 100;
          this.defence = (this.pokemon.stats[3][basestat] / this.maxStat) * 100;
          this.spAttack =
            (this.pokemon.stats[2][basestat] / this.maxStat) * 100;
          this.spDefence =
            (this.pokemon.stats[1][basestat] / this.maxStat) * 100;
          this.speed = (this.pokemon.stats[0][basestat] / this.maxStat) * 100;
          this.pokemonService.activePokemon.next(this.pokemon);
        });
    }
  }
  abilitySelect(no: number) {
    console.log(this.moves);
    this.abilitySelected = no;
  }
  close() {
    this.router.navigate(['pokedex']);
  }
}
