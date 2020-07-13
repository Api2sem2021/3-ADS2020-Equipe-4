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
  candidato: Vaga = new Vaga();
  id: number;
  formulario: FormGroup;

  constructor(
    private VagasService : VagasService,
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
  }

}
