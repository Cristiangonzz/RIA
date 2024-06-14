import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';
import { ITeamDomain } from '../../../dominio/ApiMatches/ITeamDomain';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit {
  equipo: ITeamDomain = {} as ITeamDomain;

  public constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerEquipo();
  }

  obtenerEquipo(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.apiService.ObtenerEquipo(id).subscribe((equipo: ITeamDomain) => {
      if (equipo != null) {
        this.equipo = equipo;
        console.log('Mi equipo:' + JSON.stringify(equipo, null, 2));
        console.log('Mi equipo:', equipo);
      } else {
        console.error('Fallo la consulta a la api');
      }
    });
  }

  getGradientStyle(clubColors: string | undefined): string {
    if (!clubColors) {
      return '';
    }

    const colors = clubColors.split('/').map(color => color.trim());
    const colorCount = colors.length;

    const colorStops = colors.map((color, index) => {
      const position = (index / (colorCount - 1)) * 100;
      return `${color} ${position}%`;
    });

    return `linear-gradient(to right, ${colorStops.join(', ')})`;
  }
}
