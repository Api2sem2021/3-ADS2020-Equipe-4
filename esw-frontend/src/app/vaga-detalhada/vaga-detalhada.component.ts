import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Candidato } from './../model/candidato';
import { CandidatoService } from './../services/candidato.service';
import { Vaga } from './../model/vaga';
import { VagasService } from './../services/vagas.service';
import { Component, OnInit } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { $ } from 'protractor';

@Component({
  selector: 'app-vaga-detalhada',
  templateUrl: './vaga-detalhada.component.html',
  styleUrls: ['./vaga-detalhada.component.css']
})
export class VagaDetalhadaComponent implements OnInit {

  vaga: Vaga = new Vaga();
  candidato: Candidato = new Candidato();
  id: number;
  formulario: FormGroup;

  constructor(
    private vagasService: VagasService,
    private candidatoService: CandidatoService,
    private formBuilder: FormBuilder,
  ) {
    this.formulario = this.formBuilder.group({
      cpf: [null, Validators.required]
    });
   }

  ngOnInit() {
   var url_atual = window.location.href;
   var getId = url_atual.replace("http://localhost:4200/vaga-detalhada/","");
   var id: number = +getId;
   console.log(getId);
   this.buscarVaga(id);
  }
  
  buscarVaga(id) {
    this.vagasService.buscarVagaPorId(id).subscribe( res => {
          this.vaga = res;
          this.preencherItens(this.vaga);
          //console.log(this.vaga);
      }
    );
  }

  preencherItens(vaga) {
    console.log(vaga);
    (<HTMLSelectElement>document.getElementById('nome')).value = this.vaga.nome;
    (<HTMLSelectElement>document.getElementById('descricaoDetalhada')).value = this.vaga.descricaoDetalhada;
    (<HTMLSelectElement>document.getElementById('requisitos')).value = this.vaga.requisitos;
    (<HTMLSelectElement>document.getElementById('observacoes')).value = this.vaga.observacoes;
    (<HTMLSelectElement>document.getElementById('data')).value = this.vaga.data;
  }

  buscaFiltrada() {
    let cpfCandidato = this.formulario.controls.cpf.value;
    console.log(cpfCandidato);
    this.candidatoService.buscarCandidatoFiltrado(cpfCandidato).subscribe( res => {
      this.candidato = res;
      this.cadastrarNaVaga(this.candidato);
      
  }
);
  }

  cadastrarNaVaga(candidato) {
    console.log(candidato);
    if(candidato.length == 0){
      console.log("Não Foi");
      //mostrar que não foi
    } else {
      console.log("Foi");
      //chamar o put
      //redirecionar
    }
    
  }

}
