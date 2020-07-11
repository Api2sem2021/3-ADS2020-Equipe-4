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
  id: number;

  constructor(
    private vagasService: VagasService
  ) { }

  ngOnInit() {
   var url_atual = window.location.href;
   var getId = url_atual.replace("http://localhost:4200/vaga-detalhada/","");
   console.log(getId);

   this.cadastrarNaVaga(getId);
  }

  cadastrarNaVaga(id) {
    /*this.vagasService.cadastrar(id).subscribe( res => {
            this.vaga = res;
            console.log(this.vaga);
            (<HTMLSelectElement>document.getElementById('nome')).value = "abacate";
            (<HTMLSelectElement>document.getElementById('descricaoDetalhada')).value = this.vaga.descricaoDetalhada;
            (<HTMLSelectElement>document.getElementById('requisitos')).value = this.vaga.requisitos;
            (<HTMLSelectElement>document.getElementById('observacoes')).value = this.vaga.observacoes;
            (<HTMLSelectElement>document.getElementById('data')).value = this.vaga.data;

       }
     );*/

     (<HTMLSelectElement>document.getElementById('nome')).value = "abacate";
  }

}
