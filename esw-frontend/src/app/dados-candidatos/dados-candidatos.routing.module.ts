import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCandidatosComponent } from '../lista-candidatos/lista-candidatos.component';
import { DadosCandidatosComponent } from './dados-candidatos.component';


const dadosCandidatosRoute: Routes = [
  { path: "lista-candidatos", component: ListaCandidatosComponent },
  { path: "dados-candidatos/:id", component: DadosCandidatosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forChild(dadosCandidatosRoute)],
  exports: [RouterModule]
})
export class DadosCandidatosRoutingModule { }