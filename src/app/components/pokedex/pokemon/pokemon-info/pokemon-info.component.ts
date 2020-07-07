import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../../services/pokemon.service';
import { Pokemon } from '../../../../models/Pokemon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
  pokemonId;
  pokemon;
  sprite;
  weight;
  height;
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
  maxMaxStat;
  maxMinStat;
  selectedStat = 'base';
  stats: string[] = ['0%', '0%', '0%', '0%', '0%', '0%'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
    private dialogRef: MatDialogRef<PokemonInfoComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.pokemon = data;
  }
  abilitySelect(no: number) {
    console.log(this.moves);
    this.abilitySelected = no;
  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params) => {
    //   this.pokemonId = params['id'];
    //   this.pokemon = this.pokemonService.pokemons[this.pokemonId - 1];
    // });
    this.loadMoves();

    this.height = (this.pokemon.height * 0.1).toFixed(1);
    this.weight = (this.pokemon.weight * 0.1).toFixed(1);
    console.log(this.pokemon.stats)
    this.pokemonStats = [
      this.pokemon.stats[0]['base_stat'],
      this.pokemon.stats[1]['base_stat'],
      this.pokemon.stats[2]['base_stat'],
      this.pokemon.stats[3]['base_stat'],
      this.pokemon.stats[4]['base_stat'],
      this.pokemon.stats[5]['base_stat'],
    ];
    this.maxStat = Math.max(...this.pokemonStats);

    this.pokemonService.getPokemonSpeciesById(this.pokemon.id).subscribe(
      response => {
        this.pokemon.color = response['color']['name'];
        console.log(this.pokemon)
        this.pokemonService.activePokemon.next(this.pokemon);
        this.pokemon.genera = response['genera'];
      }
    );


  }

  loadMoves() {
    const requests = [];
    for (const ability of this.pokemon.abilities) {
      requests.push(this.pokemonService.getAbility(ability['ability']['url']));
    }
    forkJoin(...requests).subscribe((responses) => {
      for (let i = 0; i < responses.length; i++) {
        this.moves[i] = responses[i];
      }
      this.allAbilitiesReceived = true;
    });
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

  close() {
    this.dialogRef.close();
    // this.router.navigate(['pokedex']);
  }
}
