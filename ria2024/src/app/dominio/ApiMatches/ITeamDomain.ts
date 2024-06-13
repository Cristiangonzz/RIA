import { IAreaDomain } from './IAreaDomain';
import { ICoachDomain, IContractDomain } from './ICoachDomain';
import { ICompetitionDomain } from './ICompetitionDomain';
import { ISquadDomain, IStaffDomain } from './ISquadDomain';
import { IStatisticsDomain } from './IStatisticsDomain';

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
  contract?: IContractDomain;
}
