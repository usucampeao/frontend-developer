import { of } from "rxjs";
import { PokemonService } from "../pokemon.service";
import { PokemonListComponent } from "./pokemon-list.component";

describe( 'PokemonListComponent', () => {
	let fixture;
	let pokemonServiceMock;
	let ordenadorMock;
    let routerMock;

	beforeEach( () => {
        pokemonServiceMock = {
            buscarTodosPokemons: jest.fn(),
            buscarPokemon: jest.fn()
        };

        fixture = new PokemonListComponent(
            pokemonServiceMock,
            ordenadorMock,
            routerMock
        );
	});

    describe( 'Busca todos os pokemons', () => {
        it( 'deve chamar pokemonService.buscarTodosPokemons', () => {
            
            pokemonServiceMock.buscarTodosPokemons.mockReturnValue( of( true ) );
            fixture.buscarPokemons();
            
            expect( pokemonServiceMock.buscarTodosPokemons ).toBeCalled();
        });
    })
});