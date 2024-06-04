import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PartidosComponent } from './partidos.component';
import { RoutingPartidosModule } from './routing-partidos.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [PartidosComponent],
  imports: [
    CommonModule,
    RoutingPartidosModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [PartidosComponent]
})
export class PartidosModule { }
