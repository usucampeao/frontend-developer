import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { PokemonComponent } from './components/pokedex/pokemon/pokemon.component';
import { PokemonInfoComponent } from './components/pokedex/pokemon/pokemon-info/pokemon-info.component';
import { InfoComponent } from './components/pokedex/pokemon/info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/pokedex' },
  { path: 'pokedex', component: PokedexComponent },
  { path: 'pokedex/:id', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
