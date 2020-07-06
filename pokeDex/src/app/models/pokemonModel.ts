import { Abilitie } from './pokemonAbilities';
import { Type } from './pokemonTypes';

export class Pokemon {
    id: number;
    name: string;
    weight: number; 
    types: Type;
    abilities: Abilitie;
    sprites: any;
}
