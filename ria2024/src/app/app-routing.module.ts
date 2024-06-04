import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Partidos',
    pathMatch: 'full',
  },
  {
    path: 'Partidos',
    //canActivate: [BackGuard],
    loadChildren: () =>
      import('./componentes/partidos/partidos.module').then((m) => m.PartidosModule),
  },
  {
    path: '**',
    redirectTo: 'Partidos',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
