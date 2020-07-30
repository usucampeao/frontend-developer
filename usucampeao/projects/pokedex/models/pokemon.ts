export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string
    back_default: string
  };
  types?: {
    slot: number;
    type: {
      name: string;
      url: string;
    }
  }[];
  weight: number;
  height: number;
  abilities: {
    ability: {
      name: string;
      url: string;
    }
  }[]
}