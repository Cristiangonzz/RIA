import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidosComponent } from './partidos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: ``, component: PartidosComponent },
      { path: `**`, redirectTo: '' },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingPartidosModule { }
