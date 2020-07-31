import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './../../../../../models/pokemon';
import { PokemonService } from '../../../../services/pokemon.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'pokemon-type',
  templateUrl: './pokemon-type.component.html',
  styleUrls: ['./pokemon-type.component.scss']
})
export class PokemonTypeComponent {
  @Input('types') pokemonTypeList: any;

  constructor(
  ) {

  }
}
