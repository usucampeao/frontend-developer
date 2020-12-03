import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokedexService } from 'src/app/services/pokedex.service';

import { HomePage } from './home.page';
import { POKEMON } from 'src/assets/mock/pokemon.mock';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let el: DebugElement;
  let _pokedex: any;


  beforeEach(async () => {
    const pokedexSpy = jasmine.createSpyObj(PokedexService, ['getPokemonList', 'getPokemonByID']);

    await TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [{ provide: PokedexService, useValue: pokedexSpy }],
      imports: [HttpClientTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    _pokedex = TestBed.inject(PokedexService);
    _pokedex.getPokemonList.and.returnValue(of(new Array(25).fill(POKEMON)));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load a pokemon list', () => {
    expect(component.pokemons.length).toBe(25);
  });
});
