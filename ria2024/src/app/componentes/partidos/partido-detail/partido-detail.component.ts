import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../servicios/api.service';
import { IMatchDomain } from '../../../dominio/ApiMatches/IMatchDomain';

@Component({
  selector: 'app-partido-detail',
  templateUrl: './partido-detail.component.html',
  styleUrl: './partido-detail.component.css',
})
export class PartidoDetailComponent implements OnInit {
  match: IMatchDomain = {} as IMatchDomain;

  public constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerEquipo();
  }

  obtenerEquipo(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.apiService.ObtenerPartido(id).subscribe((partido: IMatchDomain) => {
      if (partido != null) {
        this.match = partido;
        console.log('Mi partido:' + JSON.stringify(partido, null, 2));
        console.log('Mi partido:', partido);
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
