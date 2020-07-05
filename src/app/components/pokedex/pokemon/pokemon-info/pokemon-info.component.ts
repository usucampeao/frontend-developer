import { Component, OnInit, Inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../../../services/pokemon.service';
import { Pokemon } from '../../../../models/Pokemon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.scss'],
})
export class PokemonInfoComponent implements OnInit {
  pokemonId;
  pokemon;
  sprite;
  weight;
  height;
  constructor(
    private activatedRoute: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router,
    private dialogRef: MatDialogRef<PokemonInfoComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.pokemon = data;
  }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe((params) => {
    //   this.pokemonId = params['id'];
    //   this.pokemon = this.pokemonService.pokemons[this.pokemonId - 1];
    // });

    this.height = (this.pokemon.height * 0.1).toFixed(1);
    this.weight = (this.pokemon.weight * 0.1).toFixed(1);
  }
  close() {
    this.dialogRef.close();
    // this.router.navigate(['pokedex']);
  }
}
