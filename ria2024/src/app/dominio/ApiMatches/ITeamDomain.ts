import { ICompetitionDomain } from './ICompetitionDomain';
import { IStaffDomain } from './ISquadDomain';

export interface ITeamDomain {
  id: number;
  name?: string;
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
