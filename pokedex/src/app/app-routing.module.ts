import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PokemonViewComponent } from './pokemons/pokemon-view/pokemon-view.component';


const routes: Routes = [
  { path: '', component: PokemonListComponent},
  { path: 'pokemon/:id', component: PokemonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
