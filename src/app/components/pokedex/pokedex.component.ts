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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  dataSource = new MatTableDataSource();

  pokemons: Pokemon[] = [];
  nrPokesCarregados: number;
  pokemonListSubscription;
  nrPokesCarregadosSub;

  displayedColumns: string[] = ['id', 'name', 'sprite'];


  constructor(private pokemonService: PokemonService) {}
  ngOnInit(): void {
    this.pokemonListSubscription = this.pokemonService.listaPokeAtt.subscribe(
      (response) => {
        this.pokemons = response.slice(0, this.nrPokesCarregados);
        this.dataSource = new MatTableDataSource(this.pokemons);
        this.dataSource.paginator = this.paginator;
      }
    );
    this.nrPokesCarregadosSub = this.pokemonService.novosPokesCarregados.subscribe(
      (response) => {
        this.nrPokesCarregados = response;
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



  testinho(){
    console.log('PokemonService.Pokemons: ',this.pokemonService.pokemons);
    console.log('Pokemons', this.pokemons);
    // console.log('',this.pokemonService.pokemons);
  }
}
