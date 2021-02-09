import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  url = 'https://pokeapi.co/api/v2';
  public baseUrlSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Obtem a lista de pokemons
  getPokemons(offset: number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/pokemon?offset='+offset+'&limit=100')
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Obtem um pokemon pelo id
  getPokemonByUrl(url: string): Observable<any> {
    return this.httpClient.get<any>(url)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  // Obtem um pokemon pelo nome
  getPokemonByName(name: string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/pokemon/' + name)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  // Obtem a espécie de um pokemon pelo nome
  getPokemonSpeciesByName(name: string): Observable<any> {
    return this.httpClient.get<any>(this.url + '/pokemon-species/' + name)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  // Obtem a cadeia de evolucoes de um pokemon pelo nome
  getPokemonEvolutionById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.url + '/evolution-chain/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Tratamento de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro no client
      errorMessage = error.error.message;
    } else {
      // Erro no server
      errorMessage = `Erro: ${error.status}, ` + `mensagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };
}
