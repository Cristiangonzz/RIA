import { Component, OnInit } from '@angular/core';
import { IAllMatchesDomain } from '../../../dominio/ApiMatches/IAllMatches';
import { ApiService } from '../../../servicios/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-competition-matches',
  templateUrl: './competition-matches.component.html',
  styleUrls: ['./competition-matches.component.css'],
})
export class CompetitionMatchesComponent implements OnInit {
  matches: IAllMatchesDomain = {
    filters: {
      dateFrom: '',
      dateTo: '',
      permission: '',
    },
    resultSet: {
      count: 0,
      competitions: '',
      first: '',
      last: '',
      played: 0,
    },
    matches: [],
  };
  id: number = 0;
  season: number = 0;

  public constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.season = parseInt(this.route.snapshot.paramMap.get('year')!);
  }

  ngOnInit(): void {
    this.apiService
      .ObtenerPartidosPorCompeticionYSeason(this.id, this.season)
      .subscribe((match: IAllMatchesDomain) => {
        if (match != null) {
          this.matches = match;
          console.log('Mis partidos:' + JSON.stringify(this.matches, null, 2));
        } else {
          console.log('Fallo la consulta a la api');
        }
      });
  }
}
