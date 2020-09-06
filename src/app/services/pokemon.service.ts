
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pokemon } from '../models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  // baseUrl = environment.baseUrl;

  constructor(private http: Http) { }

  // public getPkmn() :Observable<any> {
  //   return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1049`);
  // }
  
   /**
   * Method that fetches data from
   * the Pokémon API.
   */
  getPokemon(offset: number, limit: number) {
    
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      /**
       * The `get()` method returns
       * an Observable but we convert
       * it into a Promise.
       */
      .toPromise()
      .then(response => response.json().results)
      .then(items => items.map((item, idx) => {
        /**
         * Massage the data a bit to
         * create objects with the correct
         * structure.
         */
        const id: number = idx + offset + 1;
        return {
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id
        };
      }));
  }

  // getTypes() {
  //   fetch(this.baseUrl).then(function(response) {
  //     response.json().then(function(data){
  //       console.log(data);
  //     })
  //   })

  // }

  
}
// const idPokemon = 1;
// const url = `https://pokeapi.co/api/v2/pokemon/`;

// fetch(`${url}${idPokemon}`)
// .then(function(response) {
// response.json()
// .then(function(data){
//     console.log('Eu sou o teste',data);
//     return {
//       data
//     };
//   });
// }). catch(function(err) {
//   console.error(err); });
