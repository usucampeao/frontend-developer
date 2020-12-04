import { PokemonFilter } from './../../models/pokemon-filter.model';
import { map } from 'rxjs/operators';
import { TypesService } from './../../services/types.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonsStore } from 'src/app/stores/pokemon.store';

/**
 * - TODO
 * - - caguei totalmente nos tipos meu deus, preciso arrumar com urgencia
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  /**
   * Propriedade para alterar qual lista está vendo, a páginada ou por tipo
   */
  viewList = 'Pokémon';

  /**
   * Array de pokémons para apresentar na view de paginação
   */
  public pokemonsPaginated: Partial<PokemonFilter>[];

  /**
   * Array de pokémons de um determinado tipo para apresentar na view
   */
  public pokemonsByType: Partial<PokemonFilter>[];

  /**
   * Todos os tipos de pokémons para serem utilizados na busca por tipos
   */
  public types: {
    name: string;
    color: string;
    contrast: string;
  }[];

  constructor(
    private _pokedex: PokedexService,
    private _pokemonsStore: PokemonsStore,
    private _types: TypesService,
    private _router: Router,
    private route: ActivatedRoute
  ) { }

  /**
   * Ao iniciar a home vai buscar os dados dos pokémons.
   * Como o endpoint de paginação da API retorna o nome e a url para acessar um certo pokémon,
   * o metodo getPokemonList faz uma junção de pokémons que estão salvos no indexedDB e
   * pokémons que devem ser pegos na API.
   * Depois que tem essa junção, salva os novos pokémons no indexedDB
   */
  async ngOnInit(): Promise<void> {
    await this._pokemonsStore.initializeStore();
    this.types = Array.from(this._types.pokemonTypes, (type) => type[1]);
    this._pokedex.getPokemonList()
      .pipe(
        map(this.pokemonListMap)
      )
      .subscribe((pokemons) => {
        this.pokemonsPaginated = pokemons;
        this._pokemonsStore.setPokemons = pokemons;
      });
  }

  /**
   * Ao clicar para buscar no componente de search vai disparar essa função que busca um
   * pokémon por nome e já direciona para a página de detalhes
   */
  onSearch(searchTerm: string): void {
    this._pokedex.getPokemonByName(searchTerm).subscribe(pokemon => {
      this._router.navigate([pokemon.id], {
        relativeTo: this.route,
        state: { pokemon }
      });
    });
  }

  /**
   * Carrega todos os pokémons de um determinado tipo
   */
  loadPokemonByType(id: number): void {
    this._pokedex.getPokemonListByType(id)
      .pipe(
        map(this.pokemonListMap)
      ).subscribe(pokemons => {
        this.pokemonsByType = pokemons;
        this._pokemonsStore.setPokemons = pokemons;
      });
  }

  /**
   * Filtra a lista de pokémon pegando apenas os dados importantes para a aplicação
   * Só deixo retornar se o pokemon tem foto oficial, não quero apresentar sprite de jogo
   */
  pokemonListMap = (pokemonList): PokemonFilter[] => {
    return pokemonList
      .filter(pokemon => {
        return pokemon.sprites.other || pokemon.sprites.official;
      })
      .map(pokemon => ({
        height: pokemon.height,
        id: pokemon.id,
        name: pokemon.name,
        sprites: {
          front: pokemon.sprites.front ? pokemon.sprites.front : pokemon.sprites.front_default,
          official: pokemon.sprites.official ? pokemon.sprites.official : pokemon.sprites.other['official-artwork'].front_default
        },
        stats: pokemon.stats,
        types: pokemon.types,
        weight: pokemon.weight,
      }));
  }

}
