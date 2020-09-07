import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { PokedexInfoComponent } from './pokedex-info/pokedex-info.component';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokedexItemComponent } from './pokedex-item/pokedex-item.component';


@NgModule({
  declarations: [
    PokedexInfoComponent,
    PokedexItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PokedexRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class PokedexModule { }
