import { Pokemon } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Serviço responsável por buscar os dados dos pokémons na PokéAPI
 */
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  /**
   * Busca uma lista de pokemons para páginação
   * @param limit Quantidade de resultados para buscar
   * @param offset Numero do item para se buscar a partir dele
   */
  getPokemonList(limit: number = 25, offset: number = 0): Observable<Pokemon[]> {
    return null;
  }

  /**
   * Busca um pokémon por ID
   * @param id ID do pokémon que está buscando
   */
  getPokemonByID(id: number): Observable<Pokemon> {
    return null;
  }

  /**
   * Busca uma lista de pokémons pelo tipo deles (como grama, eletrico, fogo, etc...)
   * @param type ID do tipo de pokémon
   */
  getPokemonListByType(type: number): Observable<Pokemon[]> {
    return null;
  }
}
