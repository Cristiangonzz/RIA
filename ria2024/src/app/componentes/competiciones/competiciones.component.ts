import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api.service';
import { IAllCompetitionsDomain } from '../../dominio/ApiMatches/IAllCompetitionsDomain';

@Component({
  selector: 'app-competiciones',
  templateUrl: './competiciones.component.html',
  styleUrl: './competiciones.component.css',
})
export class CompeticionesComponent implements OnInit {
  competitions: IAllCompetitionsDomain = {
    resultSet: {
      count: 0,
      competitions: '',
      first: '',
      last: '',
      played: 0,
    },
    competitions: [],
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService
      .ObtenerCompeticiones()
      .subscribe((competition: IAllCompetitionsDomain) => {
        if (competition != null) {
          this.competitions = competition;
          console.log(
            'Mis Competiciones:' + JSON.stringify(this.competitions, null, 2)
          );
        } else {
          console.log('Fallo la consulta a la api');
        }
      });
  }
}
