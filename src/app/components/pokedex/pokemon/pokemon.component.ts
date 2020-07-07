import { Component, OnInit, Input, Inject } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon';
import { PokemonService } from '../../../services/pokemon.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  @Input() pokemon: Pokemon;
  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {}

  openDialog(id) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.pokemon;
    dialogConfig.hasBackdrop = true;
    // dialogConfig.disableClose = true;
    let backdrop = '';
    const qtdTipos = this.pokemon.types.length;

    if (qtdTipos === 1 ) {
      backdrop = backdrop + this.pokemon.types[0]['type']['name'];
    } else if (qtdTipos >= 2) {
      for (const type of this.pokemon.types) {
        backdrop = backdrop + type['type']['name'];
      }
    }
    dialogConfig.backdropClass = backdrop;
    dialogConfig.width = '80%';
    dialogConfig.height = '80%';

    this.dialog.open(PokemonInfoComponent, dialogConfig);
    // this.router.navigate(['pokedex/', id]);
  }
}
