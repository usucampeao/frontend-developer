import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, shareReplay, startWith, switchMap, tap } from 'rxjs/operators';
import { PokemonDetails } from '../../services/api-pokedex/interface/pokemon';
import { PokemonService } from '../../services/api-pokedex/pokedex.service';
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
	data: PokemonDetails[];
	loading = false;
	search: FormControl = new FormControl('');
	constructor(private service: PokemonService) {}

	ngOnInit(): void {
		this.searchFunction();
	}

	searchFunction() {
		this.search.valueChanges
			.pipe(
				startWith(''),
				debounceTime(500),
				distinctUntilChanged(),
				tap(() => (this.loading = false)),
				switchMap((search) => this.service.getPokemonDetails(search)),
				shareReplay({ bufferSize: 1, refCount: true }),
				map((result: PokemonDetails) => (result ? this.service.resultTransformation(result) : null)),
				tap((result: PokemonDetails[]) => {
					this.data = result;
					this.loading = true;
				})
			)
			.subscribe();
	}
}
