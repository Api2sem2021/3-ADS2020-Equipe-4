import { CandidatoCadastro } from './../model/candidatoCadastro';
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
  candidatoCadastro: CandidatoCadastro = new CandidatoCadastro();
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
    this.candidatoCadastro.nome = this.formulario.controls.nome.value;
    this.candidatoCadastro.cpf = this.formulario.controls.cpf.value;
    this.candidatoCadastro.email = this.formulario.controls.email.value;
    this.candidatoCadastro.telefone = this.formulario.controls.telefone.value;
    this.candidatoCadastro.curriculo = this.formulario.controls.curriculo.value;
    this.candidatoCadastro.status = "Inscrito";
    //this.candidato.status = 1;
    console.log(this.formulario.value);
    console.log(this.candidatoCadastro);
    this.candidatoService.cadastrarCandidato(this.candidatoCadastro).subscribe(async response => {
      console.log(response);
      alert(response == null ? "Candidato cadastrado com sucesso!" : "Não foi possível cadastrar o candidato.");
          window.location.href = "../pagina-inicial";
    });
  }
  

}
