import {Pokemon} from "../../../core/models/pokemon.model";

export interface PokemonListState {
  pokemons: Pokemon[];
  loading: boolean;
  error: string | null;
}

export const initialPokemonListState: PokemonListState = {
  pokemons: [],
  loading: false,
  error: null,
};
