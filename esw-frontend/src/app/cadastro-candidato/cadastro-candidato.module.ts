import { ControleErroComponent } from './../controle-erro/controle-erro.component';
import { CadastroCandidatoComponent } from './cadastro-candidato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CadastroCandidatoComponent,
    ControleErroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
    //Implementar o shared module quando possível    
  ]
})
export class CadastroCandidatoModule { }
