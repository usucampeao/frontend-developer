import { Injectable } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

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

  constructor(private http: HttpClient,private spinner: NgxSpinnerService) {
    this.getAllPokemons('https://pokeapi.co/api/v2/pokemon/?limit=100?');
    
  }

  getTest() {
    return this.http.get<any>('https://pokeapi.co/api/v2/pokemon');
  }

  getAllPokemons(url: string) {
    this.spinner.show();
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
    this.http.get<{ name: string; id: number }>(url).subscribe((response) => {
      this.pokemons[+response.id - 1] = new Pokemon(
        response.name,
        response.id,
        response['sprites']['front_default'],
        response['types']
      );
      this.contadorResponse++;
      this.contadorTotal++;
      if (this.contadorTotal === 807) {
        this.totalCarregado = this.totalCarregado + 7;
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        this.spinner.hide();
        return;
      }
      if (this.contadorResponse === 100) {
        this.totalCarregado = this.totalCarregado + 100;
        this.novosPokesCarregados.next(this.totalCarregado);
        this.listaPokeAtt.next(this.pokemons);
        this.contadorResponse = 0;

        this.listaPokeAtt.next(this.pokemons);
        if (proximosPokes != null) {
          this.getAllPokemons(proximosPokes);
        }
      }
    });
  }
}
