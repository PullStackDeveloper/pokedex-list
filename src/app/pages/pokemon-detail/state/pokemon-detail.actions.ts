import { createAction, props } from "@ngrx/store";
import { Pokemon } from "../../../core/models/pokemon.model";

// Action to initiate loading Pokémon details by ID
export const loadPokemonDetail = createAction(
  '[Pokemon Detail] Load Pokemon Detail',
  props<{ id: number }>()
);

// Action triggered on successful load with Pokémon data payload
export const loadPokemonDetailSuccess = createAction(
  '[Pokemon Detail] Load Pokemon Detail Success',
  props<{ pokemon: Pokemon }>()
);

// Action for handling errors that occur while loading Pokémon details
export const loadPokemonDetailFailure = createAction(
  '[Pokemon Detail] Load Pokemon Detail Failure',
  props<{ error: string }>()
);

// Action to clear Pokémon details from the state
export const clearPokemonDetail = createAction(
  '[Pokemon Detail] Clear Pokemon Detail'
);
