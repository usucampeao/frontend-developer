import { Pokemon } from './../../models/pokemon';
import { Http } from '@angular/http';
import { TypesService } from './../../services/types.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-pokemons',
  templateUrl: './detalhes-pokemons.component.html',
  styleUrls: ['./detalhes-pokemons.component.scss']
})
export class DetalhesPokemonsComponent implements OnInit {
  public pokemonId: number;
  constructor(
    private typesService: TypesService,
    private route: ActivatedRoute,
    private http: Http
  ) {}

  pokemon = {} as Pokemon;
  pokemons: any;

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.pokemonId = id;
    this.getPokemons(id);
  }

  // public baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

  getPokemons(id) {
    this.typesService.getPokemons(id).subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
      console.log('Oie',pokemons);
    });
  }
  
}
