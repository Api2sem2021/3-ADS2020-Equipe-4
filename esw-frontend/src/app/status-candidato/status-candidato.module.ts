import { StatusCandidatoComponent } from './status-candidato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [StatusCandidatoComponent],
  imports: [
    CommonModule,
    DragDropModule
  ]
})
export class StatusCandidatoModule { }
