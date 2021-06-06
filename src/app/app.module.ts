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
import { SearchPipe } from './pipe/search.pipe';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatBottomSheet  } from '@angular/material/bottom-sheet';
import { PokemonDataComponent } from './pokemon-data/pokemon-data.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';




@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonCardComponent,
    QuestoesComponent,
    SearchPipe,
    PokemonDataComponent,
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
    OverlayModule


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
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatExpansionModule,
    MatTableModule,
    MatTabsModule




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