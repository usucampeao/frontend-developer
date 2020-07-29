import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'pokemon'
  },
  { path: 'pokemon', loadChildren: () => import('./pages/pokemon-list/pokemon-list.module').then(m => m.PokemonListModule) },
  {
    path: '**',
    redirectTo: 'pokemon'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
