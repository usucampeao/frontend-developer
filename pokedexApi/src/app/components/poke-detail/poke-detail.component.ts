import { Ability } from './../../models/ability';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})

export class PokeDetailComponent implements OnInit {

  pokemon: any = '';
  pokemonImg = '';
  pokemonType = [];
  pokemonAbility = [];

  constructor(
    private activatedRouter: ActivatedRoute,
    private pokedexService: PokedexService)
    {

    this.activatedRouter.params.subscribe(
      params => {
        this.getPokemon(params['id']);
      }
    )
  }

  ngOnInit(): void {
  }

  getPokemon(id) {
    this.pokedexService.getPokemons(id).subscribe(
      res => {
        this.pokemon = res;
        this.pokemonImg = this.pokemon.sprites.front_default;
        this.pokemonType = res.types[0].type.name;
        this.pokemonAbility = res.abilities[0].ability.name;
      },
      err => {
        console.log(err);
      }
    );
  }

}
