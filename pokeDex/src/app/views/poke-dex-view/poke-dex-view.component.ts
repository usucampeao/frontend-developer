import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from 'src/app/models/pokemonModel';


@Component({
  selector: 'app-poke-dex-view',
  templateUrl: './poke-dex-view.component.html',
  styleUrls: ['./poke-dex-view.component.scss']
})

export class PokeDexViewComponent implements OnInit {

  pokeInfo: Pokemon; 
  isOn: boolean = false;
  pokeDexState: string = 'On';
  pokemonPicture: string;
  pokemonType: string;
  pokemonRandom = [];
  pokemonVersion: string = 'Shiny';

  constructor(private http: HttpClient, private pokeService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonData();
    this.randomNumberPokemonData();
  }

  // botão de liga e desliga a pokedex
  turnOnPokedex() {
    this.isOn = !this.isOn;
    if(this.isOn && this.pokeDexState === 'On') {
      this.pokeDexState = 'Off'; 
    } else if (!this.isOn && this.pokeDexState === 'Off'){
      this.pokeDexState = 'On';
    }
  }

  //troca de pokemon shiny para pokemon normal, atibuindo o valor retonardo na imagem do pokemon atual mostrado na tela.
  shinyPokemon() {
    if(this.pokemonVersion === 'Shiny') {
      this.pokemonVersion = 'Normal'; 
      this.pokemonPicture = this.pokeInfo.sprites.front_shiny;
    } else if (this.pokemonVersion === 'Normal'){
      this.pokemonVersion = 'Shiny';
      this.pokemonPicture = this.pokeInfo.sprites.front_default;
    }
  }

  //retorna o data da requisição para que sempre tenha o pokemon de id = 1 na tela
  getPokemonData() {
    this.pokeService.getFirstPokemon().subscribe(data => {
      this.pokeInfo = data;
      this.pokemonPicture = data.sprites.front_default;
      this.pokemonType = data.types[0].type.name;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  //realiza a busca do pokemon pelo número do ID digitado no campo de busca
  searchPokemonData(pokeId: number) {
    this.pokeService.searchPokemonById(pokeId).subscribe(data => {
      this.pokeInfo = data;
      this.pokemonPicture = data.sprites.front_default;
      this.pokemonType = data.types[0].type.name;
    }, (error: HttpErrorResponse) => {
      console.log(error);
    });
  }

  // gera números randomicos em um array
  randomNumberPokemonData() {
    let randomNumber = [];
    let i;
    for (i = 0; i < 10; i++) {
      randomNumber.push(Math.floor(Math.random() * 100));
      this.pokemonRandom = randomNumber;
    }
  }

  //realiza a busca do pokemon pelos números randomicos gerados no array acima
  searchByRandom(pokemonRandom) {
      this.pokeService.searchPokemonById(pokemonRandom).subscribe(data => {
      this.pokeInfo = data;
      this.pokemonPicture = data.sprites.front_default;
      this.pokemonType = data.types[0].type.name;
      }, (error: HttpErrorResponse) => {
        console.log(error);
      });
  }

}
