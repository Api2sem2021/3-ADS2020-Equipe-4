import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroFuncionarioComponent } from './cadastro-funcionario.component';

@NgModule({
  declarations: [
    CadastroFuncionarioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class CadastroFuncionarioModule { }
