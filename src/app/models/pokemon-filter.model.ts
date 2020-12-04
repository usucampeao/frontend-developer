export interface PokemonFilter {
  height: number;
  id: number;
  name: string;
  sprites: {
    front: string;
    official: string;
  };
  stats: any;
  types: any;
  weight: number;
}
