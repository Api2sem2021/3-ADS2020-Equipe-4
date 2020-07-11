import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosCandidatosComponent } from './dados-candidatos.component';
import { DadosCandidatosRoutingModule } from './dados-candidatos.routing.module';

@NgModule({
  declarations: [
    DadosCandidatosComponent
  ],
  imports: [
    CommonModule,
    DadosCandidatosRoutingModule
  ]
})
export class DadosCandidatosModule { }
