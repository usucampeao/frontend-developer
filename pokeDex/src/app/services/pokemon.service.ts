import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../models/pokemonModel';


@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  //readonly do endereço da API
  private readonly API = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  // GET na API para que quando a pokedex seja iniciada o pokemon sempre o pokemon da PokeDex
  getFirstPokemon() {
    return this.http.get<Pokemon>(`${this.API}/1`);
  }

  // POST na API passando o ID do pokemon para que o retorno seja o pokemon desejado 
  searchPokemonById(id: number) {
   return this.http.get<Pokemon>(`${this.API}/${id}`);
  }

}
