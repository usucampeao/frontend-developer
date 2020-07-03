import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/Pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: Pokemon[] = [];
  lstPokemon = [];



  displayedColumns: string[] = ['id', 'name', 'sprite'];
  dataSource = new MatTableDataSource();

  buscarPoke(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private pokemonService: PokemonService) {

  }
  ngOnInit(): void {
    this.pokemonService.listaPokeAtt.subscribe((pokes) => {
      this.pokemons = pokes;
      this.dataSource = new MatTableDataSource(this.pokemons);
      console.log(this.pokemons);
    });

  }
}
