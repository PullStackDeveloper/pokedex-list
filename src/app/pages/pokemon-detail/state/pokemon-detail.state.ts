import { Pokemon } from 'src/app/core/models/pokemon.model';

// Interface defining Pokémon detail state structure
export interface PokemonDetailState {
  entities: { [id: number]: Pokemon };
  loading: boolean;
  error: string | null;
}

// Initial state for the Pokémon detail feature
export const initialPokemonDetailState: PokemonDetailState = {
  entities: {},
  loading: false,
  error: null,
};
