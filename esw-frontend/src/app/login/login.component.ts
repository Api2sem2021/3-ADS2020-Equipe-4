import { AutenticacaoService } from './autenticacao.service';
import { Login } from './../model/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  login: Login = new Login();
  constructor(
    private formBuilder: FormBuilder,
    private autenticacaoService: AutenticacaoService
  ) {
    this.formulario = this.formBuilder.group({

      email: ['', Validators.required],
      senha: ['', Validators.required],

    });
   }

  ngOnInit() {
  }

  logar() {
    this.login.email = this.formulario.controls.email.value;
    this.login.senha = this.formulario.controls.senha.value;
    console.log(this.formulario.value);
    this.autenticacaoService.logar(this.login.email, this.login.senha);
    /*this.candidatoService.cadastrarCandidato(this.candidato).subscribe(async response => {
      console.log(response);
    });*/
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
  
  verificaValidTouched(campo: string) {
    return (
      !this.formulario.get(campo).valid &&
      (this.formulario.get(campo).touched || this.formulario.get(campo).dirty));
    }

}
