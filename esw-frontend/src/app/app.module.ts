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
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CadastroCandidatoModule,
    HttpClientModule,
    PaginaInicialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
