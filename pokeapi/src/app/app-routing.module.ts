import { chainedInstruction } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeedrilComponent } from './beedril/beedril.component';
import { BlastoiseComponent } from './blastoise/blastoise.component';
import { BulbasaurComponent } from './bulbasaur/bulbasaur.component';
import { ButterfreeComponent } from './butterfree/butterfree.component';
import { CaterpieComponent } from './caterpie/caterpie.component';
import { ChamanderComponent } from './chamander/chamander.component';
import { CharizardComponent } from './charizard/charizard.component';
import { CharmeleonComponent } from './charmeleon/charmeleon.component';
import { HomeComponent } from './home/home.component';
import { IvysaurComponent } from './ivysaur/ivysaur.component';
import { KakunaComponent } from './kakuna/kakuna.component';
import { MetapoidComponent } from './metapoid/metapoid.component';
import { PidgeotComponent } from './pidgeot/pidgeot.component';
import { PidgeottoComponent } from './pidgeotto/pidgeotto.component';
import { PidgeyComponent } from './pidgey/pidgey.component';
import { RaticateComponent } from './raticate/raticate.component';
import { RattataComponent } from './rattata/rattata.component';
import { SquitleComponent } from './squitle/squitle.component';
import { VenusaurComponent } from './venusaur/venusaur.component';
import { WatortleComponent } from './watortle/watortle.component';
import { WeedleComponent } from './weedle/weedle.component';


const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:HomeComponent},
  {path: 'bendril', component: BeedrilComponent},
  {path:'blastoise', component:BlastoiseComponent},
  {path:'bulbasaur', component:BulbasaurComponent},
  {path:'butterfree', component:ButterfreeComponent},
  {path: 'caterpie', component:CaterpieComponent},
  {path: 'chamander', component:ChamanderComponent},
  {path: 'charizard', component:CharizardComponent},
  {path: 'charmeleon', component:CharmeleonComponent},
  {path: 'ivysaur', component:IvysaurComponent},
  {path: 'kakuna', component:KakunaComponent},
  {path: 'metapoid', component: MetapoidComponent},
  {path: 'pidgey', component:PidgeyComponent},
  {path: 'squile', component:SquitleComponent},
  {path: 'venusaur', component:VenusaurComponent},
  {path: 'watortle', component: WatortleComponent},
  {path: 'weedle', component:WeedleComponent},
  {path: 'pidgeot', component: PidgeotComponent},
  {path: 'pidgeotto', component:PidgeottoComponent},
  {path: 'raticate', component:RaticateComponent},
  {path: 'rattata', component: RattataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
