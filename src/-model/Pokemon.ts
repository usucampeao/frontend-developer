import { Type } from './Type';

export interface Pokemon {
  image: string;
  number: number;
  name: string;
  types: Type[];
  abilities?: Ability[];
  base_experience?: number;
  height?: number;
  location_area_encounters?: string;
  moves?: Move[];
  species?: Species;
  stats?: Stat[];
  weight?: number;


}
export interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}
export interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Species;
  version_group:     Species;
}
export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export function getPokemonImage(pokemon: Pokemon): string {
  return `https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif `

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