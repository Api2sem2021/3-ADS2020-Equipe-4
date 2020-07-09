import { CadastrarVagaComponent } from './cadastrar-vaga/cadastrar-vaga.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "cadastroCandidato", component: CadastroCandidatoComponent } ,
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "cadastrar-vaga", component: CadastrarVagaComponent },
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
