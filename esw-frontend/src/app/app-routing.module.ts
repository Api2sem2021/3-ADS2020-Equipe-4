import { StatusCandidatoComponent } from './status-candidato/status-candidato.component';
import { VagaDetalhadaComponent } from './vaga-detalhada/vaga-detalhada.component';
import { LoginComponent } from './login/login.component';
import { CadastrarVagaComponent } from './cadastrar-vaga/cadastrar-vaga.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
  { path: "status-candidato", component: StatusCandidatoComponent } ,
  { path: "cadastroCandidato", component: CadastroCandidatoComponent } ,
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "cadastrar-vaga", component: CadastrarVagaComponent },
  { path: "vaga-detalhada", component: VagaDetalhadaComponent},
  { path: "cadastro-funcionario", component: CadastroFuncionarioComponent},
  { path: "login", component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
