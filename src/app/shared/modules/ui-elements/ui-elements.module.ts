import {NgModule} from "@angular/core";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";
import {PokedexFooterComponent} from "./pokedex-footer/pokedex-footer.component";
import {PokedexHeaderComponent} from "./pokedex-header/pokedex-header.component";

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [PokedexFooterComponent, PokedexHeaderComponent],
  declarations: [PokedexFooterComponent, PokedexHeaderComponent]
})

export class UiElementsModule {}
