import { IfilterDomain } from "./IFilterDomain";
import { IMatcheDomain } from "./IMatcheDomain";
import { IResultSetDomain } from "./IResultSet";

export interface IAllMatchesDomain {
  filters: IfilterDomain;
  resultSet: IResultSetDomain;
  matches: IMatcheDomain[];
}
