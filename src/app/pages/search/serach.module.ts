import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import { CardsModule } from 'src/app/components/cards/cards.module';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';
@NgModule({
	declarations: [SearchComponent],
	imports: [CommonModule, RouterModule, FormsModule, MatProgressBarModule, ReactiveFormsModule, CardsModule, SearchRoutingModule, MatInputModule, MatIconModule, MatButtonModule],
})
export class SearchModule {}
