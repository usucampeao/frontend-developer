import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  // URL base para o uso da API

  private baseSpriteUrl: string =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  // ULR para as imagens na lista principal

  constructor(private http: Http) {}

  // Metodo abaixo recupera os dados da API
  pegaPokemon(offset: number, limit: number) {
    return (
      this.http
        .get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
        // 'get()' retorna uma Observable convertida numa Promise e prepara
        // para usar uma filtragem da API com os valores offset
        .toPromise()
        .then(response => response.json().results)
        // Transforma o resultado num arquivo json
        .then(items =>
          items.map((item, idx) => {
            // Mapeia os objetos para facilitar o uso
            const id: number = idx + offset + 1;
            // Transforma o index no array no id que será utilizado na aplicação
            return {
              name: item.name,
              sprite: `${this.baseSpriteUrl}${id}.png`,
              // Recupera o sprite para apresentar na home
              id
            };
          })
        )
    );
}