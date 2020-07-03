import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[] = new Array<Pokemon>(20);
  listaPokeAtt = new Subject<Pokemon[]>();
  contadorResponse = 0; // api só deixa 20

  constructor(private http: HttpClient) {
    this.getAllPokemons('https://pokeapi.co/api/v2/pokemon');
  }

  getTest() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getAllPokemons(url) {
    this.http.get<{ count: string, next: string, previous: string, results: { name: string, url: string }[] }>
    (url).subscribe(
      (response) => {
        const pokemons: { name: string, url: string }[] = response.results;
        for (const pokemon of pokemons) {
          this.getPokemon(pokemon.url);
        }
        if (response.next != null) {
          this.getAllPokemons(response.next); // pegando próxima lista;
        }
      });
  }

  getPokemon(url: string) {
    this.http.get<{ name: string; id: string }>(url).subscribe((response) => {
      this.pokemons[+response.id - 1] = new Pokemon(
        response.name,
        response.id,
        response['sprites']['front_default']
      );
      this.contadorResponse++;
      if (this.contadorResponse === 20) {
        this.contadorResponse = 0;
        this.listaPokeAtt.next(this.pokemons);
      }
    });
  }
}
