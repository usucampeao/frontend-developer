import { Pokemon } from './../../models/pokemon';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss'],
})
export class PokeTableComponent implements OnInit {
  // Colunas da tabela do angular material
  displayedColumns: string[] = ['position', 'image', 'name'];
  data: any[] = [];
  dataSource = new MatTableDataSource<any>(this.data);
  pokemons: Pokemon[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(private pokedexService: PokedexService, private router: Router) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    let pokemonData;

    for (let i = 1; i <= 893; i++) {
      this.pokedexService.getPokemons(i).subscribe(
        (res) => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
          };
          // colocamos os dados que vêm do serviço em um arranjo
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);
          this.dataSource.paginator = this.paginator;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  // Filtro para o paginador
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // recebe o elemento selecionado
  getRow(row) {
    // console.log(row);
    this.router.navigateByUrl(`/pokeDetail/${row.position}`);
  }
}
