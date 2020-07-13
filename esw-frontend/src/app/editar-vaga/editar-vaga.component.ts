import { VagasService } from './../services/vagas.service';
import { Vaga } from './../model/vaga';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-vaga',
  templateUrl: './editar-vaga.component.html',
  styleUrls: ['./editar-vaga.component.css']
})
export class EditarVagaComponent implements OnInit {
  vaga: Vaga = new Vaga();
  id: number;
  formulario: FormGroup;

  constructor(
    private vagasService : VagasService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = this.formBuilder.group({
      id: ['', Validators.required],
      nome: ['', Validators.required],
      descricaoBreve: ['', Validators.required],
      descricaoDetalhada: ['', Validators.required],
      requisitos: ['', Validators.required],
      observacoes: ['', Validators.required],
      data: ['']
    });
   }

  ngOnInit() {
    var url_atual = window.location.href;
    var getId = url_atual.replace("http://localhost:4200/editar-vaga/","");
    var id: number = +getId;
    console.log(getId);
    this.buscarVaga(id);
  }

  buscarVaga(id) {
    console.log(id);
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
    (<HTMLSelectElement>document.getElementById('descricaoDetalhada')).value = this.vaga.descricaoBreve;
    (<HTMLSelectElement>document.getElementById('requisitos')).value = this.vaga.requisitos;
    (<HTMLSelectElement>document.getElementById('observacoes')).value = this.vaga.observacoes;
    (<HTMLSelectElement>document.getElementById('data')).value = this.vaga.data;
  }

  editar() {
    this.vaga.nome = (<HTMLSelectElement>document.getElementById('nome')).value;
    this.vaga.descricaoBreve = (<HTMLSelectElement>document.getElementById('descricaoDetalhada')).value;
    this.vaga.requisitos = (<HTMLSelectElement>document.getElementById('requisitos')).value;
    this.vaga.observacoes = (<HTMLSelectElement>document.getElementById('observacoes')).value;
    this.vaga.data = (<HTMLSelectElement>document.getElementById('data')).value;
    console.log(this.vaga)
    this.vagasService.editarVaga(this.vaga).subscribe(async response => {
      console.log(response);
      alert(response == null ? "Vaga editada com sucesso!" : "Não foi possível salvar a edição da vaga.");
      window.location.href = "../pagina-inicial";
  });
  }

}
