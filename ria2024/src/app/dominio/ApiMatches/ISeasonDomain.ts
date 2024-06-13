export interface ISeasonDomain {
  id: number;
  startDate?: string;
  endDate?: string;
  currentMatchday?: number;
  winner?: ISeasonWinnerDomain;
}

export interface ISeasonWinnerDomain {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;
  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
  lastUpdated: string;
}
