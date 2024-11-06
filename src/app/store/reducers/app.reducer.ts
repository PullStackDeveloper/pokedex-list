import {pokemonListReducer} from "../../pages/pokemon-list/state/pokemon-list.reducer";
import {pokemonDetailReducer} from "../../pages/pokemon-detail/state/pokemon-detail.reducer";
import {ActionReducerMap} from "@ngrx/store";
import { AppState } from '../state/app.state';

export const appReducers: ActionReducerMap<AppState> = {
  pokemonList: pokemonListReducer,
  pokemonDetail: pokemonDetailReducer,
};
