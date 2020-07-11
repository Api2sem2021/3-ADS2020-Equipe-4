import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidato.service';
import { Candidato } from '../model/candidato';
import { Identifiers } from '@angular/compiler';
import { $ } from 'protractor';

@Component({
  selector: 'app-dados-candidatos',
  templateUrl: './dados-candidatos.component.html',
  styleUrls: ['./dados-candidatos.component.css']
})
export class DadosCandidatosComponent implements OnInit {

  candidato: Candidato = new Candidato();
  id: number;
  

  constructor(
    private candidatosService: CandidatoService
    ) { }

  ngOnInit() {
   
  //ToDo: Conferir como receber o ID
   var url_atual = window.location.href;
   var getId = url_atual.replace("http://localhost:4200/dados-candidatos/","");
   console.log(getId);

   this.detalharCandidato(getId);

  }


   detalharCandidato(id) {
     this.candidatosService.detalharCandidato(id).subscribe( res => {
             this.candidato = res;
             console.log(this.candidato);
             (<HTMLSelectElement>document.getElementById('nome')).value = this.candidato.nome;
             (<HTMLSelectElement>document.getElementById('cpf')).value = this.candidato.cpf;
             (<HTMLSelectElement>document.getElementById('email')).value = this.candidato.email;
             (<HTMLSelectElement>document.getElementById('telefone')).value = this.candidato.telefone;
             (<HTMLSelectElement>document.getElementById('curriculo')).value = this.candidato.curriculo;

             //ToDo: conferir, se for funcionario traz o cargo, senao fica em branco
             (<HTMLSelectElement>document.getElementById('cargoAtual')).value = "";
             (<HTMLSelectElement>document.getElementById('dataAdmissao')).value = "";
        }
      );

   }


   editar(){
    (<HTMLSelectElement>document.getElementById('nome')).disabled = false;
    (<HTMLSelectElement>document.getElementById('cpf')).disabled = false;
    (<HTMLSelectElement>document.getElementById('email')).disabled = false;
    (<HTMLSelectElement>document.getElementById('telefone')).disabled = false;
    (<HTMLSelectElement>document.getElementById('curriculo')).disabled = false;
    (<HTMLSelectElement>document.getElementById('cargoAtual')).disabled = false;
    (<HTMLSelectElement>document.getElementById('dataAdmissao')).disabled = false;
    (<HTMLSelectElement>document.getElementById('btn-salvar')).disabled = false;
    (<HTMLSelectElement>document.getElementById('btn-editar')).disabled = true;
   }

}
