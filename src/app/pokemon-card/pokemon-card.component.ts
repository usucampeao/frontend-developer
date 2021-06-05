import { Component, Input } from '@angular/core';
import { getPokemonImage, getPokemonNumber, Pokemon } from '../../-model/Pokemon';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { PokemonDataComponent } from '../pokemon-data/pokemon-data.component';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass'],
})
export class PokemonCardComponent {
  @Input()
  public pokemon!: Pokemon;

  public getPokemonImage = getPokemonImage;

  public getPokemonNumber = getPokemonNumber;

  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(PokemonDataComponent);
  }
}
