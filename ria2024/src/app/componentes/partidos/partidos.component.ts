import { Component, OnInit } from '@angular/core';
import { IAllMatchesDomain } from '../../dominio/ApiMatches/IAllMatches';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css',
})
export class PartidosComponent implements OnInit {
  matches: IAllMatchesDomain = {} as IAllMatchesDomain;
  dateFrom!: string;
  dateTo!: string;
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.ObtenerPartidos().subscribe((match: IAllMatchesDomain) => {
      if (match != null) {
        this.matches = match;
        console.log('Mis partidos:' + JSON.stringify(this.matches, null, 2));
      } else {
        console.log('Fallo la consulta a la api');
      }
    });
  }

  partidosPorFechas(): void {
    const dateFrom = this.formatDate(this.parseDateString(this.dateFrom));
    const dateTo = this.formatDate(this.parseDateString(this.dateTo));
    console.log('Fecha desde: ' + dateFrom);
    console.log('Fecha hasta: ' + dateTo);
    this.apiService
      .ObtenerPartidosPorFechas(dateFrom, dateTo)
      .subscribe((match: IAllMatchesDomain) => {
        if (match != null) {
          this.matches = match;
          console.log('Mis partidos:' + JSON.stringify(this.matches, null, 2));
        } else {
          console.log('Fallo la consulta a la api');
        }
      });
  }

  parseDateString(dateString: string): Date {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
