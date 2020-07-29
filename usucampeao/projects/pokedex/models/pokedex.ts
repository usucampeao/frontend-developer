export interface Pokedex {
  id: number;
  name: string;
  pokemon_entries: PokemonEntry[];
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: {
    name: string;
    url: string;
  };
}

