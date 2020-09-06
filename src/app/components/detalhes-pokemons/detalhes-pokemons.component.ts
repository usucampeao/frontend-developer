import { Pokemon } from './../../models/pokemon';
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
  // Cria a variável pública para implementar o id do Pokemon

  constructor(private typesService: TypesService, private route: ActivatedRoute) {
  }

  frentePokemon: boolean = true;
  shinyPokemon: boolean = true;
  // Booleano para fazer o giro dos detalhes do Pokemon

  pokemons: any = '';
  // Setagem da variável para pokemon

  ngOnInit(): void {
    // Inicia a 'getPokemon' assim que esta component é chamada pelo browser
    
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // Recupera o id passado pela Rota. Neste ponto é usado uma o route para 
    // mapear o id e apresentar na tela de detalhes
    
    this.pokemonId = id;
    // Transforma o id recuperado numa outra variável para ser usada dentro da 'getPokemon'

    this.pegarPokemons(id);
    // Inicia a 'getPokemon' com o id da route
  }


  pegarPokemons(id) {
    this.typesService.pegarPokemons(id).subscribe((pokemons: Pokemon[]) => {
      // Utiliza o typeService para fazer uma pesquisa dos pokemons com base na id recuperada ra route supracitada
      this.pokemons = pokemons;
      // Imprime o resultado em uma variável
    });
  }
}
