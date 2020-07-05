import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokedex/pokemon/pokemon.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pokedex'},
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokemon', component: PokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
