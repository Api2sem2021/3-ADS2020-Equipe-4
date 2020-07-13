import { ReactiveFormsModule } from '@angular/forms';
import { EditarVagasRoutingModule } from './editar-vaga.routing.module';
import { EditarVagaComponent } from './editar-vaga.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [EditarVagaComponent],
  imports: [
    CommonModule,
    EditarVagasRoutingModule,
    ReactiveFormsModule
  ]
})
export class EditarVagaModule { }
