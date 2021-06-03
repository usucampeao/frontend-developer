import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonModule } from './pokemons/pokemon.module';
import { TopBarComponent } from './core/topbar/topbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SidebarComponent } from './core/sidebar/sidebar..component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    PokemonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
