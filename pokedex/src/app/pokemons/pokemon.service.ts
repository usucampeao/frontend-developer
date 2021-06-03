import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pokemon } from "../model/Pokemon";
import { ResponsePokemon } from "../model/ResponsePokemon";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {

    private apiUrl = "https://pokeapi.co/api/v2/pokemon";

    constructor(protected http: HttpClient) { }
    
    buscarTodosPokemons() {
        return this.http.get<ResponsePokemon>(`${this.apiUrl}/?limit=251`); //Busca por todos os pokemons da geração II
    }

    buscarPokemon(nome) {
        return this.http.get<Pokemon>(`${this.apiUrl}/${nome}`); //Busca detalhes do pokemon
    }

    buscarPokemonPromise(nome): Promise<Pokemon>{
        return this.http.get<Pokemon>(`${this.apiUrl}/${nome}`).toPromise(); //Busca detalhes do pokemon e retorna um Promise
    }

}