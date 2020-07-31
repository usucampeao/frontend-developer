import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { PokemonListRoutingModule } from './pokemon-list-routing.module';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonTypeComponent } from './pokemon-type/pokemon-type.component'
import { PokemonService } from 'projects/pokedex/src/services/pokemon.service';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PokemonListComponent, 
    PokemonDetailsComponent,
    PokemonTypeComponent
   
  ],
  imports: [
    SharedModule,
    PokemonListRoutingModule,
    RouterModule,
    FlexLayoutModule
  ],
  providers: [PokemonService]
})
export class PokemonListModule { }
