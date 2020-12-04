import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {

  @Input() pokemon: Partial<Pokemon>;

  constructor() { }

  ngOnInit(): void {
  }

}
