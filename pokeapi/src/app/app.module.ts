import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BulbasaurComponent } from './bulbasaur/bulbasaur.component';
import { IvysaurComponent } from './ivysaur/ivysaur.component';
import { VenusaurComponent } from './venusaur/venusaur.component';
import { ChamanderComponent } from './chamander/chamander.component';
import { CharmeleonComponent } from './charmeleon/charmeleon.component';
import { CharizardComponent } from './charizard/charizard.component';
import { SquitleComponent } from './squitle/squitle.component';
import { WatortleComponent } from './watortle/watortle.component';
import { BlastoiseComponent } from './blastoise/blastoise.component';
import { CaterpieComponent } from './caterpie/caterpie.component';
import { MetapoidComponent } from './metapoid/metapoid.component';
import { ButterfreeComponent } from './butterfree/butterfree.component';
import { WeedleComponent } from './weedle/weedle.component';
import { KakunaComponent } from './kakuna/kakuna.component';
import { PidgeyComponent } from './pidgey/pidgey.component';
import { BeedrilComponent } from './beedril/beedril.component';
import { PidgeottoComponent } from './pidgeotto/pidgeotto.component';
import { PidgeotComponent } from './pidgeot/pidgeot.component';
import { RattataComponent } from './rattata/rattata.component';
import { RaticateComponent } from './raticate/raticate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BulbasaurComponent,
    IvysaurComponent,
    VenusaurComponent,
    ChamanderComponent,
    CharmeleonComponent,
    CharizardComponent,
    SquitleComponent,
    WatortleComponent,
    BlastoiseComponent,
    CaterpieComponent,
    MetapoidComponent,
    ButterfreeComponent,
    WeedleComponent,
    KakunaComponent,
    PidgeyComponent,
    BeedrilComponent,
    PidgeottoComponent,
    PidgeotComponent,
    RattataComponent,
    RaticateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
