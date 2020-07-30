export interface Evolutions{
    id: number;
    chain: {
        species: {
            name: string;
            url: string;
        };
        envolves_to: EnvolvesTo[]
    }
}

export interface EnvolvesTo{
    species: {
        name: string;
        url: string;
    };
    evolves_to: {
        species: {
            name: string;
            url: string;
        };
        envolves_to: EnvolvesTo[]
    }[]
}