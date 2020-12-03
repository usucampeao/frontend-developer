import { Pokemon } from '../models/pokemon.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

/**
 * Store que lida com os pokémons salvos no localStorage e salva eses pokemons em um subject.
 * Ao inicializar a aplicação carrega eles, caso seja feita uma chamada para pegar um pokemon por
 * id, primeiro verifica se ele não existe no localStorage
 *
 * Ia fazer um store com BehavourSubject, mas seria complexidade de mais a toa. Farei se sentir
 * necessidade mais pra frente
 */
@Injectable({
  providedIn: 'root'
})
export class PokemonsStore {

  /**
   * BehaviourSubject privado para fazer a comunicação e disparar novos cursos e aquela coisa toda
   */
  private pokemonsDB: { [key: string]: Pokemon } = JSON.parse(localStorage.getItem(environment.POKEMON_DB)) ?? {};

  constructor() {}

  /**
   * getter que apenas retorna os pokémons que estão no DB
   */
  get getPokemon(): { [key: string]: Pokemon } {
    return this.pokemonsDB;
  }

  /**
   * Atualiza os pokemons no localStorage e no store
   */
  set setPokemons(pokemons: { [key: string]: Pokemon }) {
    const newPokemons = { ...this.pokemonsDB, ...pokemons };
    localStorage.setItem(environment.POKEMON_DB, JSON.stringify(newPokemons));
    this.pokemonsDB = newPokemons;
  }

}
