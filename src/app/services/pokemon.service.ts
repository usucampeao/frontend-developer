import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon[] = new Array<Pokemon>(100);
  listaPokeAtt = new Subject<Pokemon[]>();
  contadorResponse = 0;
  totalCarregado = 0;
  novosPokesCarregados = new Subject<number>();
  contadorTotal = 0;

  constructor(private http: HttpClient) {
    this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100?');
  }

  getTest() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getAllPokemons(url: string) {
    this.http
      .get<{
        count: string;
        next: string;
        previous: string;
        results: { name: string; url: string }[];
      }>(url)
      .subscribe((response) => {
        const pokemons: { name: string; url: string }[] = response.results;
        for (const pokemon of pokemons) {
          if (pokemon.url === 'https://pokeapi.co/api/v2/pokemon/807/') {
            this.getPokemon(pokemon.url, null);
            return;
          } else {
            this.getPokemon(pokemon.url, response.next);
          }
        }
      });
  }

  getPokemon(url: string, proximosPokes) {
    this.http.get<{ name: string; id: string }>(url).subscribe((response) => {
      this.pokemons[+response.id - 1] = new Pokemon(
        response.name,
        response.id,
        response['sprites']['front_default']
      );
      this.contadorResponse++;
      this.contadorTotal++;
      console.log(this.contadorTotal);
      if (this.contadorTotal === 807) {
        return;
      }
      if (this.contadorResponse === 100) {
        this.totalCarregado = this.totalCarregado + 100;
        this.novosPokesCarregados.next(this.totalCarregado);
        this.contadorResponse = 0;

        this.listaPokeAtt.next(this.pokemons);
        if (proximosPokes != null) {
          this.getAllPokemons(proximosPokes);
        }
      }
    });
  }
}
