import {NamedAPIResource} from "./named-api-resource.model";

export interface Stat {
  base_stat: number;
  effort: number;
  stat: NamedAPIResource;
}
