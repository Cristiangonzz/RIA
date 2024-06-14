import { ICompetitionDomain } from './ICompetitionDomain';
import { IResultSetDomain } from './IResultSet';

export interface IAllCompetitionsDomain {
  resultSet: IResultSetDomain;
  competitions: ICompetitionDomain[];
}
