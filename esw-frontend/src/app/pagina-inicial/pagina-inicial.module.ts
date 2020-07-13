import { AutenticacaoService } from './../login/autenticacao.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ControleErroComponent } from './../controle-erro/controle-erro.component';
import { PaginaInicialComponent } from './pagina-inicial.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PaginaInicialComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
    providers: [
    AutenticacaoService
  ],
})
export class PaginaInicialModule { }
