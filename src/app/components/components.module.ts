import { TypeBadgeComponent } from './type-badge/type-badge.component';
import { PokecardComponent } from './pokecard/pokecard.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTab, MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatPaginatorModule, MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const getRangeLabel = (page: number, pageSize: number, length: number) => {
  length = Math.max(length, 0);
  const startIndex = page * pageSize;
  const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;

  return `${startIndex + 1} - ${endIndex} de ${length}`;
}

/**
 * Traduz os textos do paginador
 */
const translatePaginator = () => {
  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = 'Pokémons por página';
  paginatorIntl.nextPageLabel = 'Próxima';
  paginatorIntl.lastPageLabel = 'Anterior';
  paginatorIntl.getRangeLabel = getRangeLabel;

  return paginatorIntl;
}

@NgModule({
  declarations: [
    SearchComponent,
    PokecardComponent,
    TypeBadgeComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MatTab,
    MatTabGroup,
    MatFormField,
    MatLabel,
    MatButton,
    MatPaginator,
    TypeBadgeComponent,
    SearchComponent,
    PokecardComponent
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: translatePaginator() }
  ]
})
export class ComponentsModule { }
