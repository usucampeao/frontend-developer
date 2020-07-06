import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './models/Pokemon';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(pokemons: Pokemon[], searchFor: any) {
    if (!pokemons) {
      return [];
    }
    if (searchFor === '' || !searchFor) {
      return pokemons;
    }
    // let result = [];
    return pokemons.filter(
      (pokemon) =>
        pokemon.name.indexOf(searchFor.toLowerCase()) > -1 ||
        pokemon.id.toString().indexOf(searchFor) > -1 ||
        pokemon.types[0]['type']['name'].indexOf(searchFor) > -1
    );

    // for (let pokemon of pokemons) {
    //   if (pokemons.name)
    //     }
  }
}
