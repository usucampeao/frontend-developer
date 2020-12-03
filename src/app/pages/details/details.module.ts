import { DetailsPage } from './details.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';


@NgModule({
  declarations: [DetailsPage],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ]
})
export class DetailsPageModule { }
