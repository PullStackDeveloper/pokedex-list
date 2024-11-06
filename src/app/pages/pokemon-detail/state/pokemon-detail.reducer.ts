import { createReducer, on } from "@ngrx/store";
import * as PokemonDetailActions from './pokemon-detail.actions';
import { PokemonDetailState, initialPokemonDetailState } from './pokemon-detail.state';

// Reducer for handling state updates based on dispatched actions
export const pokemonDetailReducer = createReducer(
  initialPokemonDetailState,
  on(PokemonDetailActions.loadPokemonDetail, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PokemonDetailActions.loadPokemonDetailSuccess, (state, { pokemon }) => ({
    ...state,
    entities: {
      ...state.entities,
      [pokemon.id]: pokemon,
    },
    loading: false,
    error: null,
  })),
  on(PokemonDetailActions.loadPokemonDetailFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),
  on(PokemonDetailActions.clearPokemonDetail, () => initialPokemonDetailState)
);
