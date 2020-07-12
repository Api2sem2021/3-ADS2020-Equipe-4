import { VagasService } from './../services/vagas.service';
import { Vaga } from './../model/vaga';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-vaga',
  templateUrl: './cadastrar-vaga.component.html',
  styleUrls: ['./cadastrar-vaga.component.css']
})
export class CadastrarVagaComponent implements OnInit {

  formulario: FormGroup;
  vaga: Vaga = new Vaga();
  constructor(
    private vagaService: VagasService,
    private formBuilder: FormBuilder
  ) { this.formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    descricaoBreve: ['', Validators.required],
    descricaoDetalhada: ['', Validators.required],
    requisitos: ['', Validators.required],
    observacoes: ['', Validators.required],
    data: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  cadastrarVaga() {
    this.vaga.nome = this.formulario.controls.nome.value;
    this.vaga.descricaoBreve = this.formulario.controls.descricaoBreve.value;
    this.vaga.descricaoDetalhada = this.formulario.controls.descricaoDetalhada.value;
    this.vaga.requisitos = this.formulario.controls.requisitos.value;
    this.vaga.observacoes = this.formulario.controls.observacoes.value;
    this.vaga.data = this.formulario.controls.data.value;
    console.log(this.vaga);
    this.vagaService.cadastrarVaga(this.vaga).subscribe(async response => {
      console.log(response);
      alert(response == null ? "Vaga cadastrada com sucesso!" : "Não foi possível cadastrar a vaga.");
          window.location.href = "../pagina-inicial";
    });
    
  }

}
