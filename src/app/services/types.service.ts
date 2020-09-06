import { Pokemon } from './../models/pokemon';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  public baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

  constructor(private http: HttpClient) {}

  pegarPokemons(id): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${this.baseUrl}${id}`);
    // Serviço utilizado para recuperar os detalhes dos pokemons com base 
    // no id recebido com a rota detalhesPokemons:/id
  }
}
