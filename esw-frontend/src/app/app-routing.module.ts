import { LoginComponent } from './login/login.component';
import { CadastrarVagaComponent } from './cadastrar-vaga/cadastrar-vaga.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';

const routes: Routes = [
  { path: "cadastroCandidato", component: CadastroCandidatoComponent } ,
  { path: "pagina-inicial", component: PaginaInicialComponent },
  { path: "cadastrar-vaga", component: CadastrarVagaComponent },
  { path: "cadastro-funcionario", component: CadastroFuncionarioComponent},
  { path: "login", component: LoginComponent},
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
