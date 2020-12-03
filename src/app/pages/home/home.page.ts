import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokedexService } from 'src/app/services/pokedex.service';
import { PokemonsStore } from 'src/app/stores/pokemon.store';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  /**
   * Array de pokémons para apresentar na view
   */
  public pokemons: Pokemon[];

  constructor(
    private _pokedex: PokedexService,
    private _pokemonsStore: PokemonsStore
  ) { }

  /**
   * Ao iniciar a home vai buscar os dados dos pokémons.
   * Como o endpoint de paginação da API retorna o nome e a url para acessar um certo pokémon,
   * o metodo getPokemonList faz uma junção de pokémons que estão salvos no localStorage e
   * pokémons que devem ser pegos na API.
   * Depois que tem essa junção, salva os novos pokémons no localStorage
   */
  ngOnInit(): void {
    this._pokedex.getPokemonList().subscribe(list => {
      this.pokemons = list;
      // Converte a lista de pokemons para o formato que vai ficar no banco. Cada propriedade
      // no objeto é o id do pokemons e os dados dele.
      const newPokemons = list.reduce((acc, val) => {
        acc[val.id] = val;
        return acc;
      }, {});
      // atualiza o banco usando um setter/ acho que não deveria estar aqui, passar pro store
      this._pokemonsStore.setPokemons = newPokemons;
    });
  }

}
