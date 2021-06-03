import { ActivatedRoute, Router } from "@angular/router";
import { from, Observable, of } from "rxjs";
import { PokemonViewComponent } from "./pokemon-view.component";
import {TestBed, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { BrowserDynamicTestingModule,
    platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

describe( 'PokemonViewComponent', () => {
	let fixture;
	let pokemonServiceMock;
	let activatedRouteMock;
    let locationMock;
    let routerMock;

	beforeEach( async() => {
        pokemonServiceMock = {
            buscarTodosPokemons: jest.fn(),
            buscarPokemon: jest.fn()
        };

        fixture = new PokemonViewComponent(
            pokemonServiceMock,
            activatedRouteMock,
            locationMock,
            routerMock
        );

	});
    
    describe( 'Busca pokemon', () => {
        it( 'caso chamando pokemonService.buscarPokemon com id, retorna pokemon', () => {

            pokemonServiceMock.buscarPokemon.mockReturnValue( of( true ) );
            fixture.buscaPokemon(1);
            
            expect( pokemonServiceMock.buscarPokemon ).toBeCalled();
        });
    });
});
