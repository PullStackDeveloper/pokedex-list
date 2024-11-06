import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokedex-header',
  templateUrl: './pokedex-header.component.html',
  styleUrls: ['./pokedex-header.component.scss'],
})
export class PokedexHeaderComponent  implements OnInit {
  @Input() title: string = 'Default Title';
  constructor() { }

  ngOnInit() {}

}
