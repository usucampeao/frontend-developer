import { Location } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { Pokemon } from "src/app/model/Pokemon";
import { PokemonService } from "../pokemon.service";

@Component({
    selector: 'pokemon-view',
    templateUrl: './pokemon-view.component.html',
    styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

    pokemon: Pokemon;

    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute,
        private location: Location,
        private router: Router
    ) {}

    ngOnInit() {
        this.pokemon = history.state.data; //Recebe pokemon vindo da navegação da última rota
        if (this.pokemon == null) {
            let id = this.route.snapshot.paramMap.get('id');
            this.buscaPokemon(id);
        }
    };

    buscaPokemon(id) {

        if (id == null) //Caso parâmetro de id é nulo
            this.router.navigate(['/']); //Navega para página principal

        this.pokemonService.buscarPokemon(id).subscribe( //Busca detalhe do pokemon
            pokemon => this.pokemon = pokemon,
            error => console.log(`Erro ao buscar pokemon com id ${id}`)
        );
    }

    voltarParaListagem() {
        this.location.back(); //Retorna para última rota
    }
}