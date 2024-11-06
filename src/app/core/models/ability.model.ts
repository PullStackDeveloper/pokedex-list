import {NamedAPIResource} from "./named-api-resource.model";

export interface Ability {
  ability: NamedAPIResource;
  is_hidden: boolean;
  slot: number;
}
