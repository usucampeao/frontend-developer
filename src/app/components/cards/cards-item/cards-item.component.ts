import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-cards-item',
	templateUrl: './cards-item.component.html',
	styleUrls: ['./cards-item.component.scss'],
})
export class CardsItemComponent implements OnInit {
	@Input() value: { id: number; name: string; image: string; url: string };

	constructor() {}

	ngOnInit(): void {}
}
