import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/search',
	},
	{
		path: 'search',
		loadChildren: () => import('./pages/search/serach.module').then((m) => m.SearchModule),
	},
	{
		path: 'profile/:id',
		loadChildren: () => import('./pages/pokedex/pokedex.module').then((m) => m.PokedexModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
