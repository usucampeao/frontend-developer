import { TypeBadgeComponent } from './type-badge/type-badge.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PokecardComponent } from './pokecard/pokecard.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchComponent,
    PokecardComponent,
    PaginationComponent,
    TypeBadgeComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatTab,
    MatTabGroup,
    MatFormField,
    MatLabel,
    MatButton,
    TypeBadgeComponent,
    SearchComponent,
    PokecardComponent,
    PaginationComponent,

  ]
})
export class ComponentsModule { }
