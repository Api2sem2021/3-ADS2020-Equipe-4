import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from '../pagina-inicial/pagina-inicial.component';
import { VagaDetalhadaComponent } from './vaga-detalhada.component';



const vagasRoutes: Routes = [
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "vaga-detalhada/:id", component: VagaDetalhadaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forChild(vagasRoutes)],
  exports: [RouterModule]
})
export class VagaDetalhadaRoutingModule { }