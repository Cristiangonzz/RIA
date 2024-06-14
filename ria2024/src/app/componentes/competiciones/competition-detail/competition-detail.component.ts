import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';
import { ICompetitionDomain } from '../../../dominio/ApiMatches/ICompetitionDomain';

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrl: './competition-detail.component.css',
})
export class CompetitionDetailComponent implements OnInit {
  competition: ICompetitionDomain = {} as ICompetitionDomain;

  public constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerEquipo();
  }

  obtenerEquipo(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.apiService
      .ObtenerCompeticion(id)
      .subscribe((competition: ICompetitionDomain) => {
        if (competition != null) {
          this.competition = competition;
          console.log('Mi competition:' + JSON.stringify(competition, null, 2));
          console.log('Mi competition:', competition);
        } else {
          console.error('Fallo la consulta a la api');
        }
      });
  }

  getYearFromDate(dateString: string): number {
    const date = new Date(dateString);
    return date.getFullYear();
  }
}
