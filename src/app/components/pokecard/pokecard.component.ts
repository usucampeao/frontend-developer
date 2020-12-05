import { TypesService } from './../../services/types.service';
import { Pokemon } from './../../models/pokemon.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.scss']
})
export class PokecardComponent implements OnInit {

  /**
   * Dados do pokémon para serem exibidos
   */
  @Input() pokemon: Partial<Pokemon>;

  /**
   * O número do pokémon
   */
  public number: string;

  constructor(
    private _types: TypesService
  ) { }

  ngOnInit(): void {
    this.number = String(this.pokemon.id).padStart(3, '0');
  }

  /**
   * Vai gerar a string do background do card dependendo de quantos tipos o pokémon tem
   * @param types o array de tipos do pokémon
   */
  generateCardBackground(types): string {
    if (types.length === 1) {
      const typeID = +types[0].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      return `${this._types.pokemonTypes.get(typeID).color}e3`;
    } else {
      const firstTypeID = +types[0].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      const secondTypeID = +types[1].type.url.split('type/')[1].replace(/[^0-9]/g, '');
      return `linear-gradient(130deg, ${this._types.pokemonTypes.get(firstTypeID).color} 0%,
      ${this._types.pokemonTypes.get(secondTypeID).color} 100%)`;
    }
  }

}
