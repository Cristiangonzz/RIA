import { IAreaDomain } from './IAreaDomain';
import { ICompetitionDomain } from './ICompetitionDomain';
import { IOddsDomain } from './IOddsDomain';
import { IRefereesDomain } from './IRefereesDomain';
import { IScoreDomain } from './IScoreDomain';
import { ISeasonDomain } from './ISeasonDomain';
import { ITeamDomain } from './ITeamDomain';

export interface IMatchDomain {
  id: number;
  utcDate?: string;
  status?: string;
  matchday?: number;
  stage?: string;
  group?: string;
  lastUpdated?: string;
  area: IAreaDomain;
  competition: ICompetitionDomain;
  season: ISeasonDomain;
  homeTeam: ITeamDomain;
  awayTeam: ITeamDomain;
  score: IScoreDomain;
  odds: IOddsDomain;
  referees: IRefereesDomain[];
}
