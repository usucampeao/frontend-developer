import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonService } from 'projects/pokedex/src/services/pokemon.service';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    SharedModule,
    PokemonListRoutingModule,
  ],
  providers: [PokemonService]
})
export class PokemonListModule { }
