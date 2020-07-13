import { EditarVagaComponent } from './editar-vaga.component';
import { PaginaInicialComponent } from './../pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const editarVagasRoute: Routes = [
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "editar-vaga/:id", component: EditarVagaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forChild(editarVagasRoute)],
  exports: [RouterModule]
})
export class EditarVagasRoutingModule { }