import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Partidos',
    pathMatch: 'full',
  },
  {
    path: 'Competiciones',
    loadChildren: () =>
      import('./componentes/competiciones/competiciones.module').then(
        (m) => m.CompeticionesModule
      ),
  },
  {
    path: 'Partidos',
    loadChildren: () =>
      import('./componentes/partidos/partidos.module').then(
        (m) => m.PartidosModule
      ),
  },
  {
    path: 'Equipo/:id',
    loadChildren: () =>
      import('./componentes/equipo/equipo.module').then((m) => m.EquipoModule),
  },
  {
    path: '**',
    redirectTo: 'Partidos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
