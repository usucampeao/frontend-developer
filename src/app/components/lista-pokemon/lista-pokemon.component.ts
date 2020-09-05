import { Router } from '@angular/router';
import { Pokemons } from './../../models/placeholder.model';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {
  pokemons = new Pokemons;
  erro: any;


  constructor(private pokeService: PokemonService, private router: Router) {
    this.getter();
  }

  ngOnInit(): void {}

  getter() {
    this.pokeService.getPkmn().subscribe(
      (data: Pokemons) => {
        this.pokemons = data;
        // console.log('Varável recebida',data);
        console.log('Varável preenchida',this.pokemons);
        console.log(this.pokemons.results.length);
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  getRow(row) {
    this.router.navigateByUrl(`pokeDetail/${row.position}`);
  }

}
