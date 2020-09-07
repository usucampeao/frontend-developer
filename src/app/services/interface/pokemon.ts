export interface PokemonDetails {
	name?: string;
	id?: number;
	sprites?: Sprites;
	abilities?: Array<any>;
	types?: Array<any>;
	count?: number;
	species: Results;
	base_experience?: any;
	stats: any;
	next?: string;
	results?: Results[];
	weight?: number;
	height?: number;
	url?: string;
	image?: string;
}
export interface Results {
	name: string;
	url: string;
	id?: string;
	details?: PokemonDetails;
	description?: string;
}

export interface Sprites {
	front_default?: string;
	back_default?: string;
	back_shiny?: string;
	front_shiny?: string;
	other: any;
}
