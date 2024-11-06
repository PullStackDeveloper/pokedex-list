import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from '../../core/models/pokemon.model';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as PokemonDetailActions from './state/pokemon-detail.actions';
import * as PokemonDetailSelectors from './state/pokemon-detail.selectors';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
})
export class PokemonDetailPage implements OnInit, OnDestroy {
  pokemon$!: Observable<Pokemon | undefined>;
  loading$!: Observable<boolean>;
  private id!: number;
  private unsubscribe$ = new Subject<void>();

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemon$ = this.store.select(PokemonDetailSelectors.selectPokemonById(this.id));

    this.pokemon$.pipe(takeUntil(this.unsubscribe$)).subscribe((pokemon) => {
      if (!pokemon) {
        this.store.dispatch(PokemonDetailActions.loadPokemonDetail({ id: this.id }));
      }
    });

    this.loading$ = this.store.select(PokemonDetailSelectors.selectPokemonDetailLoading);
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
