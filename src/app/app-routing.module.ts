import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';

const routes: Routes = [
  {
    path: '',
    component: ListPokemonComponent
  },
  {
    path: 'detail',
    component: DetailPokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
