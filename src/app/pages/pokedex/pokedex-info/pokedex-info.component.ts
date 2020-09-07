import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from 'src/app/services/interface/pokemon';
import { PokemonService } from '../../../services/pokedex.service';

@Component({
	selector: 'app-pokedex-info',
	templateUrl: './pokedex-info.component.html',
	styleUrls: ['./pokedex-info.component.scss'],
})
export class PokedexInfoComponent implements OnInit {
	data: PokemonDetails;
	constructor(private route: ActivatedRoute, private location: Location, private service: PokemonService) {}

	ngOnInit(): void {
		this.getProfle();
	}

	get Id(): string | number {
		return this.route.snapshot.paramMap.get('id');
	}

	getProfle(): void {
		this.service.getPokemonDetails(this.Id).subscribe(
			(result) => {
				this.data = result;
			},
			() => {
				this.location.back();
			}
		);
	}
}
