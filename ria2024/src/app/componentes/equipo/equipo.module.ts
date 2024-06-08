import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutingEquipoModule } from './routing-equipo.module';
import { MatButtonModule } from '@angular/material/button';
import { EquipoComponent } from './equipo/equipo.component';

@NgModule({
  declarations: [EquipoComponent],
  imports: [CommonModule, RoutingEquipoModule, FormsModule, MatButtonModule],
  exports: [EquipoComponent],
})
export class EquipoModule {}
