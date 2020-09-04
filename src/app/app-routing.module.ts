import { DetalhesPokemonsComponent } from './components/detalhes-pokemons/detalhes-pokemons.component';
import { ListaPokemonComponent } from './components/lista-pokemon/lista-pokemon.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: ListaPokemonComponent},
  {path: 'detalhesPokemon/:id', component: DetalhesPokemonsComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
