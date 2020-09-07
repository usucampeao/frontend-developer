import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { CardsItemComponent } from './cards-item/cards-item.component';

@NgModule({
	declarations: [CardsItemComponent],
	exports: [CardsItemComponent],
	imports: [CommonModule, RouterModule, MatInputModule, MatIconModule, MatButtonModule],
})
export class CardsModule {}
