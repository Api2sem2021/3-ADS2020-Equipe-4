import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ListaCandidatosComponent } from './lista-candidatos.component';

@NgModule({
  declarations: [
    ListaCandidatosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ListaCandidatosModule { }
