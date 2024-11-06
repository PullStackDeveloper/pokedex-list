import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokemonListPageRoutingModule } from './pokemon-list-routing.module';

import { PokemonListPage } from './pokemon-list.page';
import {pokemonListReducer} from "./state/pokemon-list.reducer";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {PokemonListEffects} from "./state/pokemon-list.effects";
import {PokemonComponentsModule} from "../../shared/modules/pokemon/pokemon-components.module";
import {UiElementsModule} from "../../shared/modules/ui-elements/ui-elements.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StoreModule.forFeature('pokemonList', pokemonListReducer),
        EffectsModule.forFeature([PokemonListEffects]),
        PokemonListPageRoutingModule,
        PokemonComponentsModule,
        UiElementsModule
    ],
  declarations: [PokemonListPage]
})
export class PokemonListPageModule {}
