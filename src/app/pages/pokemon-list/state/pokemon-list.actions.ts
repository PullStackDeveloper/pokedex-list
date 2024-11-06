import {createAction, props} from "@ngrx/store";
import {Pokemon} from "../../../core/models/pokemon.model";

export const loadPokemons = createAction(
  '[Pokemon List] Load Pokemons',
  props<{ offset: number; limit: number }>()
);

export const loadPokemonsSuccess = createAction(
  '[Pokemon List] Load Pokemons Success',
  props<{ pokemons: Pokemon[] }>()
);

export const loadPokemonsFailure = createAction(
  '[Pokemon List] Load Pokemons Failure',
  props<{ error: string }>()
);
