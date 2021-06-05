import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemons-list/pokemon-list.component';
import { PokemonService } from '../-service/pokemon.service';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';
import { QuestoesComponent } from './questoes/questoes.component';
import { AppRoutingModule } from './app-routing.module';






@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    QuestoesComponent,

  ],
  exports: [

    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,


  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    AppRoutingModule

  ],
  providers: [
    PokemonService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
export class DemoMaterialModule {
}