import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonDetailPageRoutingModule } from './pokemon-detail-routing.module';
import { PokemonDetailPage } from './pokemon-detail.page';
import {StoreModule} from "@ngrx/store";
import {pokemonDetailReducer} from "./state/pokemon-detail.reducer";
import {PokemonDetailEffects} from "./state/pokemon-detail.effects";
import {EffectsModule} from "@ngrx/effects";
import {UiElementsModule} from "../../shared/modules/ui-elements/ui-elements.module";
import {PokemonComponentsModule} from "../../shared/modules/pokemon/pokemon-components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreModule.forFeature('pokemonDetail', pokemonDetailReducer),
    EffectsModule.forFeature([PokemonDetailEffects]),
    PokemonDetailPageRoutingModule,
    UiElementsModule,
    PokemonComponentsModule
  ],
  declarations: [PokemonDetailPage]
})
export class PokemonDetailPageModule {}
