import { PokemonsStore } from '../stores/pokemon.store';
import { PokemonList } from './../models/pokemon-list.model';
import { Pokemon } from './../models/pokemon.model';
import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, BehaviorSubject } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Serviço responsável por buscar os dados dos pokémons na PokéAPI
 */
@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  /**
   * Subject para emitir e guardar o total de itens existentes na lista de pokémons
   */
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(null);
  /**
   * Observavel para replicar o valor do subject de tamanho da lista de pokemons
   */
  public length$: Observable<number> = this.lengthSubject.asObservable();

  constructor(
    private http: HttpClient,
    private _pokemonStore: PokemonsStore
  ) { }

  /**
   * Busca uma lista de pokemons para páginação
   * @param limit Quantidade de resultados para buscar
   * @param offset Numero do item para se buscar a partir dele
   */
  getPokemonList(limit: number = 25, offset: number = 0): Observable<any[]> {
    // retorno a busca de pokémons
    return this.http.get(`${environment.api_url}/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        tap((res: any) => this.lengthSubject.next(res.count)),
        map((res: PokemonList) => res.results), // map para pegar apenas os resultados
        mergeMap(this.loadPokemonsFromApiOrDB)
      );
  }

  /**
   * Busca um pokémon por ID
   * @param id ID do pokémon que está buscando
   */
  getPokemonByID(id: number | string): Observable<Pokemon> {
    return this.http.get(`${environment.api_url}/pokemon/${id}`) as Observable<Pokemon>;
  }

  /**
   * Busca um pokémon por nome, vai ser usado no search
   * @param name Nome do pokémon para buscar
   *
   * TODO: Tratar quando não vem um pokémon na busca, se buscar por qualquer coisa nada a ve
   */
  getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get(`${environment.api_url}/pokemon/${name}`) as Observable<Pokemon>;
  }

  /**
   * Busca uma lista de pokémons pelo tipo deles (como grama, eletrico, fogo, etc...)
   * @param type ID do tipo de pokémon
   */
  getPokemonListByType(type: number): Observable<any[]> {
    return this.http.get(`${environment.api_url}/type/${type}`)
      .pipe(
        // map para pegar apenas os resultados; Para type tem um objeto a mais dentro
        map((res: any) => res.pokemon.map(p => p.pokemon)),
        mergeMap(this.loadPokemonsFromApiOrDB)
      );
  }

  /**
   * Metodo que faz o carregamento dos pokémons de duas formas:
   * - Se está presente no localStorage, pega do localStorage
   * - Se não está presente, então carrega da API
   * É uma arrow function pelo contexto do this em mergeMap. Poderia ser feito um .bind() também
   * @param pokemons Array com os dados dos pokemons, como nome e URL para pegar ID
   */
  private loadPokemonsFromApiOrDB = (pokemons: { name: string, url: string }[]): Observable<any> => {
    // pego os pokemons salvos no localStorage
    const pokemonsDB = this._pokemonStore.getPokemon || {};
    // crio um array que observaqveis de pokemon iterando os resultados da primeira busca
    const details = pokemons.map(pokemon  => {
      // pego o id do pokemon na URL
      const id = pokemon.url.split('pokemon/')[1].replace(/[^0-9]/g, '');
      // se tem o pokemon desse id no storage devolve ele num observavel, se não devolve a chamada
      return pokemonsDB[id] ? of(pokemonsDB[id]) : this.getPokemonByID(id);
    });
    // espera todos os observaveis completarem para retornar o array
    return forkJoin(details);
  }
}
