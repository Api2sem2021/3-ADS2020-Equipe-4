import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "cadastroCandidato", component: CadastroCandidatoComponent } ,
  { path: '', pathMatch: 'full', redirectTo: 'cadastroCandidato' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
