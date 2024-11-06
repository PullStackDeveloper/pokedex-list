import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit, OnChanges {
  private _pokemons: Pokemon[] = [];

  @Input()
  set pokemons(value: Pokemon[] | null) {
    this._pokemons = value ?? []; // Transforma null em array vazio
    this.applyFilter();
  }

  get pokemons(): Pokemon[] {
    return this._pokemons;
  }

  @Output() loadMore = new EventEmitter<void>();
  @Output() selectPokemon = new EventEmitter<Pokemon>();
  @Output() searchChange = new EventEmitter<string>();

  searchTerm: string = '';
  filteredPokemons: Pokemon[] = [];

  ngOnInit() {
    this.applyFilter();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['pokemons']) {
      this.applyFilter();
    }
  }

  onSearchChange(event: any) {
    this.searchChange.emit(this.searchTerm);
    this.applyFilter();
  }

  applyFilter() {
    if (this.searchTerm && this.searchTerm.trim() !== '') {
      this.filteredPokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredPokemons = this.pokemons;
    }
  }

  loadMorePokemons(event: any) {
    this.loadMore.emit();
    event.target.complete();
  }

  onSelectPokemon(pokemon: Pokemon) {
    this.selectPokemon.emit(pokemon);
  }
}
