import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';


@NgModule({
  declarations: [PokemonListComponent],
  imports: [
    SharedModule,
    PokemonListRoutingModule
  ]
})
export class PokemonListModule { }
