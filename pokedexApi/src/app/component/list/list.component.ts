import { Pokemon } from './../../models/pokemon';
import { Component, OnInit } from '@angular/core';
import { PokedexService } from './../../services/pokedex.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons: any[];
  pokemonsInfos: Pokemon[] = [];

  constructor(private _pokedexService: PokedexService) { }

  ngOnInit(): void {
    this._pokedexService.getAll().subscribe((result) => {
        console.log(result);
        this.pokemons = Array.from(Object.keys(result), k => result [k]);
        this.pokemons = this.pokemons[3];
        console.log(this.pokemons[3]);
        for (let i = 0; i < this.pokemons.length; i++) {
          this.getById(i + 1);
        }
      });
  }

  getById(id): any {
    this._pokedexService.get(id).subscribe((result) => {
      console.log(result);
      this.pokemonsInfos.push(result);
      console.log(result.sprites.front_default);
  });
}}
