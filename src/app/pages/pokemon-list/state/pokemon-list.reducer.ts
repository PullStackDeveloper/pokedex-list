import {createReducer, on} from "@ngrx/store";
import {initialPokemonListState} from "./pokemon-list.state";
import * as PokemonListActions from './pokemon-list.actions';
export const pokemonListReducer = createReducer(
  initialPokemonListState,
  on(PokemonListActions.loadPokemons, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(PokemonListActions.loadPokemonsSuccess, (state, { pokemons }) => ({
    ...state,
    pokemons: [...state.pokemons, ...pokemons],
    loading: false,
    error: null,
  })),
  on(PokemonListActions.loadPokemonsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
