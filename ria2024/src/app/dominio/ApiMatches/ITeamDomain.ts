import { IAreaDomain } from './IAreaDomain';
import { ICoachDomain } from './ICoachDomain';
import { ICompetitionDomain } from './ICompetitionDomain';
import { ISquadDomain, IStaffDomain } from './ISquadDomain';

export interface ITeamDomain {
  id: number;
  area: IAreaDomain;
  squad: ISquadDomain[];
  name?: string;
  coach: ICoachDomain;
  shortName?: string;
  tla?: string;
  crest?: string;
  address?: string;
  website?: string;
  founded?: string;
  clubColors?: string;
  venue?: string;
  runningCompetitions?: ICompetitionDomain[];
  staff?: IStaffDomain;
  lastUpdated?: string;
}
