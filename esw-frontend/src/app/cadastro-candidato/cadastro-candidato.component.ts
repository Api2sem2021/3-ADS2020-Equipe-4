import { Router } from '@angular/router';
import { CandidatoService } from './../services/candidato.service';
import { Candidato } from './../model/candidato';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-candidato',
  templateUrl: './cadastro-candidato.component.html',
  styleUrls: ['./cadastro-candidato.component.css']
})
export class CadastroCandidatoComponent implements OnInit {
  scrollUp: any;
  formulario: FormGroup;
  candidato: Candidato = new Candidato();
  constructor(
    private formBuilder: FormBuilder,
    private candidatoService: CandidatoService,
    private route: Router
    ) { this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      curriculo: ['', Validators.required]
    });
  }
  ngOnInit() {
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
  
  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    }
    
  resetar() {
      this.formulario.reset();
  }

  cadastrar() {
    this.candidato.nome = this.formulario.controls.nome.value;
    this.candidato.cpf = this.formulario.controls.cpf.value;
    this.candidato.email = this.formulario.controls.email.value;
    this.candidato.telefone = this.formulario.controls.telefone.value;
    this.candidato.curriculo = this.formulario.controls.curriculo.value;
    this.candidato.status = this.formulario.controls.curriculo.value;
    //this.candidato.status = 1;
    console.log(this.formulario.value);
    console.log(this.candidato);
    this.candidatoService.cadastrarCandidato(this.candidato).subscribe(async response => {
      console.log(response);
      alert(response == null ? "Candidato cadastrado com sucesso!" : "Não foi possível cadastrar o candidato.");
          window.location.href = "../pagina-inicial";
    });
  }
  

}
