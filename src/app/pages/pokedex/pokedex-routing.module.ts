import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { PokedexInfoComponent } from './pokedex-info/pokedex-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: PokedexInfoComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }