import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';
import { IAllCompetitionTeamsDomain } from '../../../dominio/ApiMatches/IAllCompetitionTeamsDomain';

@Component({
  selector: 'app-competition-teams',
  templateUrl: './competition-teams.component.html',
  styleUrls: ['./competition-teams.component.css'],
})
export class CompetitionTeamsComponent implements OnInit {
  teams: IAllCompetitionTeamsDomain = {
    competition: {
      id: 0,
    },
    resultSet: {
      count: 0,
      competitions: '',
      first: '',
      last: '',
      played: 0,
    },
    teams: [],
  };
  id: number = 0;

  public constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
  }

  ngOnInit(): void {
    this.apiService
      .ObtenerEquiposCompeticion(this.id)
      .subscribe((teams: IAllCompetitionTeamsDomain) => {
        if (teams != null) {
          this.teams = teams;
          console.log('Mis equipos:' + JSON.stringify(this.teams, null, 2));
        } else {
          console.log('Fallo la consulta a la api');
        }
      });
  }
}
