import {PokemonListState} from "../../pages/pokemon-list/state/pokemon-list.state";
import {PokemonDetailState} from "../../pages/pokemon-detail/state/pokemon-detail.state";

export interface AppState {
  pokemonList: PokemonListState;
  pokemonDetail: PokemonDetailState;
}
