import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllMatchesDomain } from '../dominio/ApiMatches/IAllMatches';
import { Observable } from 'rxjs';
import { ITeamDomain } from '../dominio/ApiMatches/ITeamDomain';
import { IMatchDomain } from '../dominio/ApiMatches/IMatchDomain';
import { IAllCompetitionsDomain } from '../dominio/ApiMatches/IAllCompetitionsDomain';
import { ICompetitionDomain } from '../dominio/ApiMatches/ICompetitionDomain';
import { IAllCompetitionTeamsDomain } from '../dominio/ApiMatches/IAllCompetitionTeamsDomain';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api/v4/matches';
  private apiUrlEquipo = '/api/v4/teams';
  private apiUrlCompetition = '/api/v4/competitions/';

  private apiToken = '5e5f4b403ed749dcb7065634af5e8dc4';

  constructor(private http: HttpClient) {}

  public ObtenerPartidos(): Observable<IAllMatchesDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllMatchesDomain>(this.apiUrl, { headers });
  }

  public ObtenerPartidosCompeticion(id: number): Observable<IAllMatchesDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllMatchesDomain>(
      this.apiUrlCompetition + '/' + id + '/matches',
      { headers }
    );
  }

  public ObtenerCompeticiones(): Observable<IAllCompetitionsDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllCompetitionsDomain>(this.apiUrlCompetition, {
      headers,
    });
  }

  public ObtenerEquiposCompeticion(
    id: number
  ): Observable<IAllCompetitionTeamsDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllCompetitionTeamsDomain>(
      this.apiUrlCompetition + '/' + id + '/teams',
      {
        headers,
      }
    );
  }

  public ObtenerCompeticion(id: number): Observable<ICompetitionDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<ICompetitionDomain>(
      this.apiUrlCompetition + '/' + id,
      {
        headers,
      }
    );
  }

  public ObtenerPartidosPorCompeticionYSeason(
    id: number,
    season: number
  ): Observable<IAllMatchesDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IAllMatchesDomain>(
      this.apiUrlCompetition + '/' + id + '/matches' + '?season=' + season,
      { headers }
    );
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

  public ObtenerEquipo(id: number): Observable<ITeamDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<ITeamDomain>(this.apiUrlEquipo + '/' + id, {
      headers,
    });
  }

  public ObtenerPartido(id: number): Observable<IMatchDomain> {
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'X-Auth-Token': this.apiToken,
    });
    return this.http.get<IMatchDomain>(this.apiUrl + '/' + id, {
      headers,
    });
  }
}
