import { TypesService } from './../../services/types.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.scss']
})
export class TypeBadgeComponent implements OnInit {

  /**
   * ID para buscar os dados do type
   */
  @Input() id: number;

  /**
   * Dados de um tipo de pokémon
   * TODO: passar para uma interface
   */
  public type: { name: string, color: string, contrast: string };

  constructor(
    private _types: TypesService
  ) { }

  /**
   * Apo inicializar pega os dados de um tipo, como nome e cores para a badge
   */
  ngOnInit(): void {
    this.type = this._types.pokemonTypes.get(this.id);
  }

}
