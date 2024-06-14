import { Component, OnInit } from '@angular/core';
import { IAllMatchesDomain } from '../../dominio/ApiMatches/IAllMatches';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
})
export class PartidosComponent implements OnInit {
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
    const dateFrom = this.dateFrom
      ? this.formatDate(this.parseDateString(this.dateFrom))
      : null;
    const dateTo = this.dateTo
      ? this.formatDate(this.parseDateString(this.dateTo))
      : null;

    if (!dateFrom || !dateTo) {
      alert('Ambas fechas deben estar definidas.');
      return;
    }

    const from = this.parseDateString(this.dateFrom);
    const to = this.parseDateString(this.dateTo);
    const diffInDays = Math.ceil(
      (to.getTime() - from.getTime()) / (1000 * 3600 * 24)
    );

    if (diffInDays > 10) {
      alert('La diferencia entre las fechas no debe ser mayor a 10 días.');
      return;
    }

    if (from > to) {
      alert('La fecha "Desde" no puede ser mayor que la fecha "Hasta".');
      return;
    }

    this.apiService.ObtenerPartidosPorFechas(dateFrom, dateTo).subscribe({
      next: (match: IAllMatchesDomain) => {
        if (match != null) {
          this.matches = match;
        } else {
          console.log('Fallo la consulta a la api');
        }
      },
      error: error => {
        console.error(error);
      },
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
