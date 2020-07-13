import { EditarVagaModule } from './editar-vaga/editar-vaga.module';
import { StatusCandidatoModule } from './status-candidato/status-candidato.module';
import { StatusCandidatoComponent } from './status-candidato/status-candidato.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroCandidatoComponent } from './cadastro-candidato/cadastro-candidato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControleErroComponent } from './controle-erro/controle-erro.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CadastroFuncionarioComponent } from './cadastro-funcionario/cadastro-funcionario.component';
import { VagaDetalhadaComponent } from './vaga-detalhada/vaga-detalhada.component';
import { ListaCandidatosComponent } from './lista-candidatos/lista-candidatos.component';
import { ListaCandidatosModule } from './lista-candidatos/lista-candidatos.module';
import { DadosCandidatosComponent } from './dados-candidatos/dados-candidatos.component';
import { DadosCandidatosModule } from './dados-candidatos/dados-candidatos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    DragDropModule,
    StatusCandidatoModule,
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
    LoginModule,
    ListaCandidatosModule,
    DadosCandidatosModule,
    VagaDetalhadaModule,
    EditarVagaModule
  ],
  providers: [
    AutenticacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
