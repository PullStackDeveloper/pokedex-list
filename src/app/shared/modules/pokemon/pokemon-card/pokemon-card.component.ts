import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../../../../core/models/pokemon.model";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent {

  constructor() { }
  @Input() pokemon!: Pokemon | null | undefined;
  @Input() loading!: boolean | null;

}
