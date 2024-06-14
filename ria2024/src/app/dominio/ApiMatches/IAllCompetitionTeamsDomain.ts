import { ICompetitionDomain } from './ICompetitionDomain';
import { IResultSetDomain } from './IResultSet';
import { ITeamDomain } from './ITeamDomain';

export interface IAllCompetitionTeamsDomain {
  resultSet: IResultSetDomain;
  competition: ICompetitionDomain;
  teams: ITeamDomain[];
}
