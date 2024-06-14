import { ICompetitionDomain } from './ICompetitionDomain';
import { IfilterDomain } from './IFilterDomain';
import { IMatchDomain } from './IMatchDomain';
import { IResultSetDomain } from './IResultSet';

export interface IAllMatchesDomain {
  filters: IfilterDomain;
  resultSet: IResultSetDomain;
  matches: IMatchDomain[];
  competition?: ICompetitionDomain;
}
