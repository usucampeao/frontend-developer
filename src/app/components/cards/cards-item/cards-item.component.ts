import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/services/api-pokedex/interface/pokemon';

@Component({
	selector: 'app-cards-item',
	templateUrl: './cards-item.component.html',
	styleUrls: ['./cards-item.component.scss'],
})
export class CardsItemComponent implements OnInit {
	@Input() value: PokemonDetails = { id: null, name: null, image: null, url: null };

	constructor() {}

	ngOnInit(): void {}
}
