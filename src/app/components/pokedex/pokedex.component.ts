import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../models/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = [];
  lstPokemon = [];
  pokemonsCarregados: number;

  pokemonListSubscription;
  nrPokesCarregados;

  displayedColumns: string[] = ['id', 'name', 'sprite'];
  dataSource = new MatTableDataSource();


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonListSubscription = this.pokemonService.listaPokeAtt.subscribe(
      (response) => {
        this.pokemons = response;
        this.dataSource = new MatTableDataSource(this.pokemons);
        this.dataSource.paginator = this.paginator;
      }
    );
    this.nrPokesCarregados = this.pokemonService.novosPokesCarregados.subscribe(
      (response) => {
        this.pokemonsCarregados = response;
      }
    );
  }

  buscarPoke(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.pokemonListSubscription.unsubscribe();
  }
}
