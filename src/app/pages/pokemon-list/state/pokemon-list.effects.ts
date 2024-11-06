import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import * as PokemonListActions from './pokemon-list.actions';
import {catchError, map, mergeMap, of} from "rxjs";
import {Pokemon} from "../../../core/models/pokemon.model";
import {PokemonService} from "../../../core/services/pokemon.service";
@Injectable()

export class PokemonListEffects {

  loadPokemons$ = createEffect(() =>
    {  return this.actions$.pipe(
      ofType(PokemonListActions.loadPokemons),
      mergeMap((action) =>
        this.pokemonService.getPokemons(action.offset, action.limit).pipe(
          map((pokemons: Pokemon[]) =>
            PokemonListActions.loadPokemonsSuccess({ pokemons })
          ),
          catchError((error) =>
            of(
              PokemonListActions.loadPokemonsFailure({
                error: error.message || 'Unknown error',
              })
            )
          )
        )
      )
    ) }
  );

  constructor(private actions$: Actions, private pokemonService: PokemonService) {}
}
