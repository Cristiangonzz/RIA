import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartidosComponent } from './partidos.component';
import { RoutingPartidosModule } from './routing-partidos.module';
import { MatButtonModule } from '@angular/material/button';
import { PartidoDetailComponent } from './partido-detail/partido-detail.component';

@NgModule({
  declarations: [PartidosComponent, PartidoDetailComponent],
  imports: [CommonModule, RoutingPartidosModule, FormsModule, MatButtonModule],
  exports: [PartidosComponent, PartidoDetailComponent],
})
export class PartidosModule {}
