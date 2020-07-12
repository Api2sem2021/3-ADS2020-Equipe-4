import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadosCandidatosComponent } from './dados-candidatos.component';
import { DadosCandidatosRoutingModule } from './dados-candidatos.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DadosCandidatosComponent
  ],
  imports: [
    CommonModule,
    DadosCandidatosRoutingModule,
    ReactiveFormsModule
  ]
})
export class DadosCandidatosModule { }
