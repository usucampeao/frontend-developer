import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemons-list/pokemon-list.component';
import { QuestoesComponent } from './questoes/questoes.component';



const routes: Routes = [
  {  path: '', component: PokemonListComponent },
  {  path: 'questoes', component: QuestoesComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
