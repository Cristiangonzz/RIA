import { IAreaDomain } from './IAreaDomain';
import { ISeasonDomain } from './ISeasonDomain';

export interface ICompetitionDomain {
  id: number;
  area?: IAreaDomain;
  name?: string;
  code?: string;
  type?: string;
  emblem?: string;
  currentSeason?: ISeasonDomain;
  seasons?: ISeasonDomain[];
}
