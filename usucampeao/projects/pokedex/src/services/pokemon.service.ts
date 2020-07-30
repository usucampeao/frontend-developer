import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Pokedex } from 'projects/pokedex/models/pokedex';
import { Pokemon } from 'projects/pokedex/models/pokemon';
import { Page } from 'projects/pokedex/models/page';

@Injectable()
export class PokemonService {

  api_url = environment.apiEndpoint;

  constructor(
    private httpClient: HttpClient,
  ) { }

  getPokedex(pokedexId: number): Observable<Pokedex> {
    const options = {
      params: new HttpParams({
        fromObject: {
        }
      })
    };
    const pokedexPath = `${this.api_url}/pokedex/${pokedexId}`
    return this.httpClient.get<Pokedex>(pokedexPath)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPokemon(page: any): Observable<Page> {
    const options = {
      params: new HttpParams({
        fromObject: {
          limit: page.limit,
          offset: page.offset
        }
      })
    };
    const pokemonPath = `${this.api_url}/pokemon`
    return this.httpClient.get<Page>(pokemonPath, options)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  
  getPokemonById(pokemonId: number): Observable<Pokemon> {
    
    const pokemonPath = `${this.api_url}/pokemon/${pokemonId}`
    return this.httpClient.get<Pokemon>(pokemonPath)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getEntityById(pokemonId: number, entity: string): Observable<any> {
    
    const pokemonPath = `${this.api_url}/${entity}/${pokemonId}`
    return this.httpClient.get<any>(pokemonPath)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getNextPokemonPage(nextPageUrl: string) {
    return this.httpClient.get<Page>(nextPageUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPokemonByUrl(pokemonUrl: string): Observable<Pokemon> {
    const options = {
      params: new HttpParams({
        fromObject: {
        }
      })
    };
    return this.httpClient.get<Pokemon>(pokemonUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getEntityByUrl(entityUrl: string): Observable<any> {
    const options = {
      params: new HttpParams({
        fromObject: {
        }
      })
    };
    return this.httpClient.get<any>(entityUrl)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Erro: ${error.status}, ` + `Message: ${error.message}`;
      if (error.status === 404)
        window.location.href = 'herois';
    }
    return throwError(errorMessage);
  };
}
