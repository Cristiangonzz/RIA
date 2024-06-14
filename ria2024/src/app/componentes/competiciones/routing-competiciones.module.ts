import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeticionesComponent } from './competiciones.component';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';
import { CompetitionMatchesComponent } from './competition-matches/competition-matches.component';
import { CompetitionTeamsComponent } from './competition-teams/competition-teams.component';

const routes: Routes = [
  { path: '', component: CompeticionesComponent },
  { path: 'detail/:id', component: CompetitionDetailComponent },
  { path: 'matches/:id/:year', component: CompetitionMatchesComponent },
  { path: 'teams/:id', component: CompetitionTeamsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingCompeticionesModule {}
