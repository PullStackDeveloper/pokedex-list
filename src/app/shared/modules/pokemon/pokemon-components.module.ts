import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {PokemonCardComponent} from "./pokemon-card/pokemon-card.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule],
  exports: [PokemonCardComponent, PokemonListComponent],
  declarations: [PokemonCardComponent, PokemonListComponent]
})

export class PokemonComponentsModule {}
