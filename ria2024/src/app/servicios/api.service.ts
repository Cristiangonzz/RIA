import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAllMatchesDomain } from '../dominio/ApiMatches/IAllMatches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://api.sportradar.com/soccer/trial/v4/en/schedules/live/summaries?api_key=i0kJloOZsr5BZVu7p0IsA9cF0oEXXP7z6Dnnz83s';
  //private apiToken = '5e5f4b403ed749dcb7065634af5e8dc4';

  constructor(private http: HttpClient) { }

  public ObtenerPartidos(): Observable<IAllMatchesDomain>{
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });  
    return this.http.get<IAllMatchesDomain>(this.apiUrl,{headers});
  }
}
