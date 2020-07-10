import { VagaDetalhadaModule } from './vaga-detalhada/vaga-detalhada.module';
import { AutenticacaoService } from './login/autenticacao.service';
import { LoginModule } from './login/login.module';
import { CadastroFuncionarioModule } from './cadastro-funcionario/cadastro-funcionario.module';
import { CadastrarVagaModule } from './cadastrar-vaga/cadastrar-vaga.module';
import { CadastrarVagaComponent } from './cadastrar-vaga/cadastrar-vaga.component';
import { PaginaInicialModule } from './pagina-inicial/pagina-inicial.module';
import { CadastroCandidatoModule } from './cadastro-candidato/cadastro-candidato.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControleErroComponent } from './controle-erro/controle-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { VagaDetalhadaComponent } from './vaga-detalhada/vaga-detalhada.component';

@NgModule({
  declarations: [
    AppComponent,
    VagaDetalhadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroCandidatoModule,
    HttpClientModule,
    PaginaInicialModule,
    CadastrarVagaModule,
    VagaDetalhadaModule,
    CadastroFuncionarioModule,
    LoginModule
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }