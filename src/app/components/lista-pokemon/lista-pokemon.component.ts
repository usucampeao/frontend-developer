import { Router } from '@angular/router';
import { Pokemon } from './../../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {
  
  /**
   * The component maintains
   * a list of Pokemon objects
   * that will be rendered.
   *
   * We initialize it to an empty
   * list.
   */
  pokemon: Pokemon[] = [];

  /**
   * A boolean that represents
   * if we are currently loading data.
   */
  isLoading: boolean = false;

  /**
   * This boolean will be set
   * to true if an error occurred.
   */
  error: boolean = false;

  constructor(private pokeService: PokemonService, private router: Router) {
  }

  ngOnInit(): void {
    /**
     * Load the initial data.
     */
    this.loadMore();
  }

  onSelect(id) {
    this.router.navigate(['/detalhesPokemon',id])
  }
  
  loadMore() {
    this.isLoading = true;
    
    /**
     * Use the Pokedex service
     * to load the next 9 Pokemon.
     */
    this.pokeService.getPokemon(this.pokemon.length, 151)
    .then(pokemon => {
      pokemon = pokemon.map(p => {
        p.imageLoaded = false;
        return p;
      });
      /**
       * If loading was successful
       * we append the result to the list.
       */
      this.pokemon = this.pokemon.concat(pokemon);
      this.isLoading = false;
      this.error = false;
    })
    .catch(() => {
      this.error = true;
      this.isLoading = false;
    });
  }  

  // getter() {
  //   this.pokeService.getPkmn().subscribe(
  //     (data: Pokemons) => {
  //       this.pokemons = data;
  //       // console.log('Varável recebida',data);
  //       console.log('Varável preenchida',this.pokemons);
  //       console.log(this.pokemons.results.length);
  //     },
  //     (error: any) => {
  //       this.erro = error;
  //     }
  //   );
  // }

  // getRow(row) {
  //   this.router.navigateByUrl(`pokeDetail/${row.position}`);
  // }

}
