import { IAreaDomain } from './IAreaDomain';
import { ICompetitionDomain } from './ICompetitionDomain';
import { IOddsDomain } from './IOddsDomain';
import { IRefereesDomain } from './IRefereesDomain';
import { IScoreDomain } from './IScoreDomain';
import { ISesionDomain } from './ISesionDomain';
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
  season: ISesionDomain;
  homeTeam: ITeamDomain;
  awayTeam: ITeamDomain;
  score: IScoreDomain;
  odds: IOddsDomain;
  referees: IRefereesDomain[];
}
