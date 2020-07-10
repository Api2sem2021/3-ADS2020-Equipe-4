import { PaginaInicialComponent } from './pagina-inicial.component';
import { VagaDetalhadaComponent } from './../vaga-detalhada/vaga-detalhada.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const vagasRoutes: Routes = [
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "vaga-detalhada/:id", component: VagaDetalhadaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forChild(vagasRoutes)],
  exports: [RouterModule]
})
export class PaginaInicialRoutingModule { }