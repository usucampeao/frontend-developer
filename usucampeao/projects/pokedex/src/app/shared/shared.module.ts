import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    FlexLayoutModule,
  ]
})
export class SharedModule { }
