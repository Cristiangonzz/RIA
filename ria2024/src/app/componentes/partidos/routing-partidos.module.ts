import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartidosComponent } from './partidos.component';
import { PartidoDetailComponent } from './partido-detail/partido-detail.component';

const routes: Routes = [
  { path: '', component: PartidosComponent },
  { path: 'detail/:id', component: PartidoDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingPartidosModule {}
