import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { Location, DecimalPipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    DetailPokemonComponent,
    ListPokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Location, DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
