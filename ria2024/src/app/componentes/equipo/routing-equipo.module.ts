import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: ``, component: EquipoComponent },
      { path: `**`, redirectTo: '' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingEquipoModule {}
