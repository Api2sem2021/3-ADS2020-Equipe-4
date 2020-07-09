import { CadastrarVagaComponent } from './cadastrar-vaga.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CadastrarVagaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CadastrarVagaModule { }
