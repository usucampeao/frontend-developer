import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Pokemon } from 'src/-model/Pokemon';
@Component({
  selector: 'app-pokemon-data',
  templateUrl: './pokemon-data.component.html',
  styleUrls: ['./pokemon-data.component.sass'],
})

export class PokemonDataComponent {

  pokemon: Pokemon;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.pokemon = data
  }

  getAbilities(): string {
    return this.pokemon.abilities ? this.pokemon?.abilities.map(x => x.ability.name).join(', ') : "";
  }
}