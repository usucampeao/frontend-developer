import { Type } from './Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
}

export function getPokemonImage(pokemon: Pokemon): string {
  return  `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif `
 
}

export function getPokemonNumber(pokemon: Pokemon): string {
  return leadingZero(pokemon.number);
}

 function leadingZero(str: string | number, size = 3): string {
  let s = String(str);

  while (s.length < (size || 2)) {
    s = '0' + s;
  }

  return s;
}