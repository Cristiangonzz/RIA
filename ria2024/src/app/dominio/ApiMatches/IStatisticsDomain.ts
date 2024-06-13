import { IAreaDomain } from './IAreaDomain';
import { ICoachDomain } from './ICoachDomain';
import { ICompetitionDomain } from './ICompetitionDomain';
import { ISquadDomain, IStaffDomain } from './ISquadDomain';

export interface IStatisticsDomain {
  corner_kicks: number;
  free_kicks: number;
  goal_kicks: number;
  offsides: number;
  fouls: number;
  ball_possession: number;
  saves: number;
  throw_ins: number;
  shots: number;
  shots_on_goal: number;
  shots_off_goal: number;
  yellow_cards: number;
  yellow_red_cards: number;
  red_cards: number;
}
