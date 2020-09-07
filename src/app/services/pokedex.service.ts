import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { PokemonDetails } from './interface/pokemon';

@Injectable({
	providedIn: 'root',
})
export class PokemonService {
	pokeAPI: string;
	pokeSpeciesAPI: string;
	pokemonImage: string;

	constructor(private http: HttpClient) {
		this.pokeAPI = environment.pokemonURL;
		this.pokeSpeciesAPI = environment.pokemonSpeciesURL;
		this.pokemonImage = environment.pokemonImage;
	}

	getPokemonDetails(name: string | number): Observable<PokemonDetails> {
		return this.http.get<PokemonDetails>(`${this.pokeAPI}/${name}`).pipe(catchError(this.handleError));
	}

	getImage(url, fn): string {
		return `${this.pokemonImage}${fn(url)}.png`;
	}

	setNewObjectForResult(result): any {
		return {
			id: this.numberFromString(result.url),
			name: result.name,
			url: result.url,
			image: this.getImage(result.url, this.numberFromString),
		};
	}

	private numberFromString(value: string): number {
		return Number(value.substring(34, 50).replace(/\D/g, '')) || 1;
	}

	resultTransformation(result: PokemonDetails) {
		return result.results ? result.results.map((pokemon) => this.setNewObjectForResult(pokemon)) : [this.setNewObjectForResult(result.species)];
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			console.error('An error occurred:', error.error.message);
		} else {
			console.error(`Backend returned code ${error.status}, ` + `body was: ${error.error}`);
		}
		return of(null);
	}
}
