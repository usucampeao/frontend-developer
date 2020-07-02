import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  
  pokemons: Pokemon[] = [];
  lstPokemon = [];
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor(private pokemonService: PokemonService) {}
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.lstPokemon.filter(pokemon => pokemon.name.toLowerCase().includes(filterValue));
  }
  ngOnInit(): void {

    this.pokemonService.getTest().subscribe((res) => {
      const list: any[] = [];

      list.push(res.results);
      this.lstPokemon = list[0];
      console.log(this.lstPokemon);

    });


    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

  }
}
