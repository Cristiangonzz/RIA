import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompeticionesComponent } from './competiciones.component';
import { RoutingCompeticionesModule } from './routing-competiciones.module';
import { MatButtonModule } from '@angular/material/button';
import { CompetitionDetailComponent } from './competition-detail/competition-detail.component';
import { CompetitionMatchesComponent } from './competition-matches/competition-matches.component';
import { CompetitionTeamsComponent } from './competition-teams/competition-teams.component';

@NgModule({
  declarations: [
    CompeticionesComponent,
    CompetitionDetailComponent,
    CompetitionMatchesComponent,
    CompetitionTeamsComponent,
  ],
  imports: [
    CommonModule,
    RoutingCompeticionesModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    CompeticionesComponent,
    CompetitionDetailComponent,
    CompetitionMatchesComponent,
    CompetitionTeamsComponent,
  ],
})
export class CompeticionesModule {}
