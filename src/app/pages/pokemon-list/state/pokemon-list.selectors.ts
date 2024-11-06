import {createFeatureSelector, createSelector} from "@ngrx/store";
import {PokemonListState} from "./pokemon-list.state";

export const selectPokemonListState =
  createFeatureSelector<PokemonListState>('pokemonList');

export const selectAllPokemons = createSelector(
  selectPokemonListState,
  (state) => state.pokemons
);

export const selectPokemonListLoading = createSelector(
  selectPokemonListState,
  (state) => state.loading
);

export const selectPokemonListError = createSelector(
  selectPokemonListState,
  (state) => state.error
);
