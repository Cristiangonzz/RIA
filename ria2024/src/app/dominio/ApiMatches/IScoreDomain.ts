import { IFullTimeDomain } from "./IFullTimeDomain";
import { IHalfTimeDomain } from "./IHalfTimeDomain";

export interface IScoreDomain {
  winner?: string;
  duration?: string;
  fullTime?: IFullTimeDomain;
  halfTime?: IHalfTimeDomain;
}
