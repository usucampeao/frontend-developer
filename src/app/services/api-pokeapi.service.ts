import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';

@Injectable({    
    providedIn: 'root'
})
export class pokeApiService{
    constructor(private http: HttpClient) { }

    listAllPokemons(){
        return this.http.get('https://pokeapi.co/api/v2/pokemon/');
    }

    searchPokemon(urlSearch: string){
        return this.http.get(urlSearch);
    }

    searchIdPokemon(id: string){
        return this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }
}