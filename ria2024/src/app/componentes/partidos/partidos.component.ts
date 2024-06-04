import { Component, OnInit } from '@angular/core';
import { IAllMatchesDomain } from '../../dominio/ApiMatches/IAllMatches';
import { ApiService } from '../../servicios/api.service';
import { IMatcheDomain } from '../../dominio/ApiMatches/IMatcheDomain';

export interface IApuesta{
  home: number;
  away: number;
}

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css'
})
export class PartidosComponent implements OnInit {
  matches: IAllMatchesDomain = {} as IAllMatchesDomain;

  apuestas: IApuesta[] = [];
  showModal = false;
  currentApuesta : IApuesta = {home:0,away:0};
  currentIndex = 0;

  summarieBetdarar!: any;

  matchsApuesta: IMatcheDomain = {} as IMatcheDomain;//Partidos el cual el cliente selecciona para apostar

  
  constructor(
    private apiService: ApiService,
  ) { }
  
  ngOnInit(): void {
   this.apiService.ObtenerPartidos().subscribe((match : any) => {
    this.summarieBetdarar = match;
   })
  }

  openBetDialog(index: number): void {
    this.currentIndex = index;
    this.matchsApuesta = this.matches.matches[index];
    this.currentApuesta = { ...this.apuestas[index] };
    this.showModal = true;
  }

  closeBetDialog(): void {
    this.showModal = false;
  }

  confirmBet(): void {
    this.apuestas[this.currentIndex] = { ...this.currentApuesta };
    this.closeBetDialog();
    console.log("Todas las apuestas: " + this.apuestas);
  }

  
}
