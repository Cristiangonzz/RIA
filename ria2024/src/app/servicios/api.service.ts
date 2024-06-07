import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllMatchesDomain } from '../dominio/ApiMatches/IAllMatches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api/v4/matches';
  private apiToken = '5e5f4b403ed749dcb7065634af5e8dc4';

  constructor(private http: HttpClient) {}

  public ObtenerPartidos(): Observable<IAllMatchesDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllMatchesDomain>(this.apiUrl, { headers });
  }

  public ObtenerPartidosPorFechas(
    dateFrom: string,
    dateTo: string
  ): Observable<IAllMatchesDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllMatchesDomain>(
      this.apiUrl + '?dateFrom=' + dateFrom + '&dateTo=' + dateTo,
      { headers }
    );
  }
}
