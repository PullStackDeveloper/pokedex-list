import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { Pokemon } from '../../core/models/pokemon.model';
import { Store } from '@ngrx/store';
import * as PokemonListActions from './state/pokemon-list.actions';
import * as PokemonListSelectors from './state/pokemon-list.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list-page',
  templateUrl: './pokemon-list.page.html',
  styleUrls: ['./pokemon-list.page.scss'],
})
export class PokemonListPage implements OnInit, OnDestroy {
  pokemons$!: Observable<Pokemon[]>;
  filteredPokemons$!: Observable<Pokemon[]>;
  searchTerm: string = '';
  offset: number = 0;
  limit: number = 20;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
    this.pokemons$ = this.store.select(PokemonListSelectors.selectAllPokemons);
    this.applyFilter();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  loadPokemons() {
    this.store.dispatch(
      PokemonListActions.loadPokemons({ offset: this.offset, limit: this.limit })
    );
  }

  onSearchChange(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.applyFilter();
  }

  applyFilter() {
    this.filteredPokemons$ = this.pokemons$.pipe(
      map((pokemons) => {
        const list = pokemons ?? [];
        if (this.searchTerm && this.searchTerm.trim() !== '') {
          return list.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase())
          );
        } else {
          return list;
        }
      })
    );
  }

  loadMorePokemons() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  openPokemonDetail(pokemon: Pokemon) {
    this.router.navigate(['/pokemon-detail', pokemon.id]);
  }
}
