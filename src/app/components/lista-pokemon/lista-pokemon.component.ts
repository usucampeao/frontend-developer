import { Router } from '@angular/router';
import { Pokemon } from './../../models/pokemon';
import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-pokemon',
  templateUrl: './lista-pokemon.component.html',
  styleUrls: ['./lista-pokemon.component.scss']
})
export class ListaPokemonComponent implements OnInit {
  
  pokemon: Pokemon[] = [];
  // Iniciar a variável 'pokemon' vazia baseada na model Pokemon
  carregando: boolean = false;
  // Permite saber o ciclo de carregamento de novos pokemons
  error: boolean = false;
  // Imprimir erros

  constructor(private pokeService: PokemonService, private router: Router) {
  }

  ngOnInit(): void {
    // Inicia o componente carregando os pokemons
    this.carregaMais();
  }

  onSelect(id) {
    this.router.navigate(['/detalhesPokemon', id]);
  }

  carregaMais() {
    let quantidadePokemons = 151;
    //  Passa a quantidade de requests que serão feixos à API a cada iteração, neste caso todos os de Kanto
    // Chama o serviço para carregar novos pokemons com um valor total
    this.carregando = true;

    this.pokeService.pegaPokemon(this.pokemon.length, quantidadePokemons)
      .then(pokemon => {pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          return p;
        });
        // Caso tudo funcione corretamente aplicação segue normal, e arrumamos os dados

        this.pokemon = this.pokemon.concat(pokemon);
        this.carregando = false;
        this.error = false;
      })
      .catch(() => {
        // Caso algum erro ocorra durante o processo, este ponto irá recupera-lo
        this.error = true;
        this.carregando = false;
      });
  }
}
