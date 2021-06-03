import { Injectable } from "@angular/core";
import { Pokemon } from "../model/Pokemon";

@Injectable({
    providedIn: 'root'
})
export class Ordenador {

    ordens = [ '0-99', '99-0', 'a-z', 'z-a' ] //Lista com ordenações possíveis para pokemons
    ordenacao = {
        '0-99': 'Menor número primeiro',
        '99-0': 'Maior número primeiro',
        'a-z': 'A-Z',
        'z-a': 'Z-A'
    }

    buscarFuncaoDeOrdenacao(ordem) {
        switch(this.ordenacao[ordem]) {
            case this.ordenacao["0-99"]: 
                return this.ordenarPeloNumeroCresc;
            case this.ordenacao["99-0"]: 
                return this.ordenarPeloNumeroDesc;
            case this.ordenacao["a-z"]: 
                return this.ordenarPeloNomeCresc;
            case this.ordenacao["z-a"]: 
                return this.ordenarPeloNomeDesc;
        }
    }

    //Funcoes de sort() ---------------------------------------------------------------------
    ordenarPeloNomeCresc(a: Pokemon, b: Pokemon) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;   
    }
    ordenarPeloNomeDesc(a: Pokemon, b: Pokemon) {
        if (b.name < a.name) return -1;
        if (b.name > a.name) return 1;
        return 0;   
    }
    ordenarPeloNumeroCresc(a: Pokemon, b: Pokemon) {
        return a.id - b.id;
    }
    ordenarPeloNumeroDesc(a: Pokemon, b: Pokemon) {
        return b.id - a.id;
    }
}