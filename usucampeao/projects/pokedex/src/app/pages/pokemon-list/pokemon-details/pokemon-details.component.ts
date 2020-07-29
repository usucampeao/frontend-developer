import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../../../../models/pokemon';
import { PokemonService } from '../../../../services/pokemon.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemon!: Pokemon;


  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }
}
