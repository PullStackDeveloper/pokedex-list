import {NamedAPIResource} from "./named-api-resource.model";
import {VersionGroupDetail} from "./version-group-detail.model";

export interface Move {
  move: NamedAPIResource;
  version_group_details: VersionGroupDetail[];
}
