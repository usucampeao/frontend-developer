import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDexViewComponent } from './views/poke-dex-view/poke-dex-view.component';

const routes: Routes = [{
  path: '', component: PokeDexViewComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
