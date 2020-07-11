import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidato.service';
import { Candidato } from '../model/candidato';
import { Identifiers } from '@angular/compiler';
import { $ } from 'protractor';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dados-candidatos',
  templateUrl: './dados-candidatos.component.html',
  styleUrls: ['./dados-candidatos.component.css']
})
export class DadosCandidatosComponent implements OnInit {

  candidato: Candidato = new Candidato();
  id: number;
  formulario: FormGroup;
  
  constructor(
    private candidatosService: CandidatoService,
    private formBuilder: FormBuilder
    ) {
      this.formulario = this.formBuilder.group({
        id: ['', Validators.required],
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        curriculo: ['', Validators.required],
        cargoAtual: [''],
        dataAdmissao: [''],
        marcadores: [''],
        funcionario: ['']
      });
    }

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
             this.formulario.controls.id.setValue(this.candidato.id);
             this.formulario.controls.nome.setValue(this.candidato.nome);
             this.formulario.controls.cpf.setValue(this.candidato.cpf);
             this.formulario.controls.email.setValue(this.candidato.email);
             this.formulario.controls.telefone.setValue(this.candidato.telefone);
             this.formulario.controls.curriculo.setValue(this.candidato.curriculo);
             this.formulario.controls.funcionario.setValue(this.candidato.funcionario);

            this.formulario.controls.marcadores.setValue(
            this.candidato.marcadores == null || this.candidato.marcadores == undefined ?
            "" : this.candidato.marcadores);

            this.formulario.controls.cargoAtual.setValue(
            this.candidato.cargoAtual == null || this.candidato.cargoAtual == undefined ?
            "" : this.candidato.cargoAtual);

            this.formulario.controls.dataAdmissao.setValue(
            this.candidato.dataAdmissao == null || this.candidato.dataAdmissao == undefined ?
            "" : this.candidato.dataAdmissao);

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
    (<HTMLSelectElement>document.getElementById('marcadores')).disabled = false;
    (<HTMLSelectElement>document.getElementById('funcionario')).disabled = false;
    (<HTMLSelectElement>document.getElementById('btn-salvar')).disabled = false;
    (<HTMLSelectElement>document.getElementById('btn-editar')).disabled = true;
   }

   salvar(){
     console.log(this.formulario.value);
      this.candidato.id = this.formulario.controls.id.value;
      this.candidato.nome = this.formulario.controls.nome.value;
      this.candidato.cpf = this.formulario.controls.cpf.value;
      this.candidato.email = this.formulario.controls.email.value;
      this.candidato.telefone = this.formulario.controls.telefone.value;
      this.candidato.curriculo = this.formulario.controls.curriculo.value;
      this.candidato.dataAdmissao = this.formulario.controls.dataAdmissao.value;
      this.candidato.cargoAtual = this.formulario.controls.cargoAtual.value;
      this.candidato.marcadores = this.formulario.controls.marcadores.value;
      this.candidato.funcionario = this.formulario.controls.funcionario.value;
      console.log(this.candidato);
      // this.candidatosService.editarCandidato(this.candidato).subscribe(async response => {
      //     console.log(response);
      // });
   }

}
