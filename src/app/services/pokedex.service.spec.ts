import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokedexService } from './pokedex.service';
import { environment } from 'src/environments/environment';
import { POKEMON } from 'src/assets/mock/pokemon.mock';

describe('PokedexService', () => {
  let service: PokedexService;
  /**
   * Para interceptar chamadas HTTP e mocka-las
   */
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokedexService]
    });
    service = TestBed.inject(PokedexService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of Pokemons', () => {
    const limit = 25;
    service.getPokemonList(limit).subscribe(pokemons => {
      expect(pokemons.length).toEqual(limit);
      expect(typeof pokemons[0].id).toBe('number');
      expect(pokemons[0].sprites.other['official-artwork']).toBeTruthy();
      expect(pokemons[0].types.length).toBeLessThanOrEqual(2);
    });

    const req = httpTesting.expectOne(`${environment}/pokemon?limit=${limit}&offset=0`);
    expect(req.request.method).toEqual('GET');
    req.flush(new Array(limit).fill(POKEMON));
  });
});
