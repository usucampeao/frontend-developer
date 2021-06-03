import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule, MatCardModule, MatDividerModule, MatGridListModule, MatInputModule, MatOptionModule, MatProgressSpinnerModule, MatSelectModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { PokemonViewComponent } from "./pokemon-view/pokemon-view.component";
import { PokemonService } from "./pokemon.service";

@NgModule({
    declarations: [
        PokemonListComponent,
        PokemonViewComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatDividerModule,
        MatGridListModule,
        MatOptionModule,
        MatSelectModule,
        MatProgressSpinnerModule
    ],
    providers: [
        PokemonService
    ]
})
export class PokemonModule {}