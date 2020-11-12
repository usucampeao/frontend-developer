
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { retry, catchError } from 'rxjs/operators';
import { POKEMON_API } from '../../app.api';
import { PokemonList } from '../models/pokemonList.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  url = POKEMON_API;

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  // GET
  getPokemonList(limit): Observable<PokemonList[]> {
    return  this.httpClient.get<PokemonList[]>(`${this.url}/pokemon?&limit=${limit}`)
    .pipe(
      map(response => response[`results`]),
      retry(2),
      catchError(this.handleError)
    );
  }
  // GET BY ID
  getPokemonById(nameID: string): Observable<Pokemon[]> {
    return this.httpClient.get<Pokemon[]>(`${this.url}/pokemon/${nameID}`)
    .pipe(
      map(response => response),
      retry(2),
      catchError(this.handleError)
    );
  }
  // ERRORS
  handleError(error: HttpErrorResponse): Observable<[]>  {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status}, ` + `message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
