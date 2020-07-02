import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {

  pokemons: Pokemon[] = new Array<Pokemon>(20);
  listaPoke = new Subject<Pokemon[]>();
  constructor(private http: HttpClient) {
    // this.getAllpokemons();
  }


  getAllPokemons() {
    this.http
      .get<{
        count: string;
        next: string;
        previous: string;
        results: { name: string; url: string }[];
      }>('https://pokeapi.co/api/v2/pokemon')
      .subscribe((response) => {
        const pokemons: { name: string; url: string }[] = response.results;
        console.log(pokemons); // dale i7 16GB RAM
      });
  }

}
