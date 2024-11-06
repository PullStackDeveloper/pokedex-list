import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonDetailState } from './pokemon-detail.state';

// Selector for accessing the Pokémon detail state
export const selectPokemonDetailState =
  createFeatureSelector<PokemonDetailState>('pokemonDetail');

// Selector for accessing Pokémon entities within the state
export const selectPokemonDetailEntities = createSelector(
  selectPokemonDetailState,
  (state) => state.entities
);

// Selector for finding a Pokémon by its ID
export const selectPokemonById = (id: number) =>
  createSelector(selectPokemonDetailEntities, (entities) => {
    return entities[id];
  });

// Selector for checking if Pokémon details are loading
export const selectPokemonDetailLoading = createSelector(
  selectPokemonDetailState,
  (state) => state.loading
);

// Selector for checking if there was an error in Pokémon details fetching
export const selectPokemonDetailError = createSelector(
  selectPokemonDetailState,
  (state) => state.error
);
