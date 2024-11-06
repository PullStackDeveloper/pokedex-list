import {Ability} from "./ability.model";
import {Move} from "./move.model";
import {Stat} from "./stat.model";
import {Type} from "./type.model";
import {Sprites} from "./sprites.model";

export interface Pokemon {
  id: number;
  name: string;
  image: string;
  abilities?: Ability[];
  moves?: Move[];
  stats?: Stat[];
  types?: Type[];
  sprites?: Sprites;
}
