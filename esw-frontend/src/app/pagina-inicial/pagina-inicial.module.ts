import { PaginaInicialRoutingModule } from './pagina-inicial.routing.module';
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
    PaginaInicialRoutingModule
  ]
})
export class PaginaInicialModule { }
