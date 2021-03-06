import { ReactiveFormsModule } from '@angular/forms';
import { VagaDetalhadaRoutingModule } from './vaga-detalhada.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VagaDetalhadaComponent } from './vaga-detalhada.component';

@NgModule({
  declarations: [
    VagaDetalhadaComponent
  ],
  imports: [
    CommonModule,
    VagaDetalhadaRoutingModule,
    ReactiveFormsModule
  ]
})
export class VagaDetalhadaModule { }
