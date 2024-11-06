import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as PokemonDetailActions from './pokemon-detail.actions';
import * as PokemonDetailSelectors from './pokemon-detail.selectors';
import { catchError, map, mergeMap, of } from 'rxjs';
import { PokemonService } from '../../../core/services/pokemon.service';
import { Store } from '@ngrx/store';
import { concatLatestFrom } from "@ngrx/operators";

// Effect to load Pokémon details, checking cache first, then fetching if necessary
@Injectable()
export class PokemonDetailEffects {
  loadPokemonDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PokemonDetailActions.loadPokemonDetail),
      concatLatestFrom(() =>
        this.store.select(PokemonDetailSelectors.selectPokemonDetailEntities)
      ),
      mergeMap(([action, entities]) => {
        const pokemon = entities[action.id];
        if (pokemon) {
          return of(PokemonDetailActions.loadPokemonDetailSuccess({ pokemon }));
        } else {
          return this.pokemonService.getPokemonById(action.id).pipe(
            map((pokemon) =>
              PokemonDetailActions.loadPokemonDetailSuccess({ pokemon })
            ),
            catchError((error) =>
              of(
                PokemonDetailActions.loadPokemonDetailFailure({
                  error: error.message || 'Unknown error',
                })
              )
            )
          );
        }
      })
    );
  });

  constructor(
    private actions$: Actions,
    private store: Store,
    private pokemonService: PokemonService
  ) {}
}
