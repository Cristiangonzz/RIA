export interface ICoachDomain {
  id: number;
  firstName: string;
  lastName?: string;
  name?: string;
  dateOfBirth?: string;
  nationality?: string;
  contract?: IContractDomain;
}

export interface IContractDomain {
  start: string;
  until: string;
}
