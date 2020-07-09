import { FuncionarioService } from './../services/funcionario.service';
import { Funcionario } from './../model/funcionario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-funcionario',
  templateUrl: './cadastro-funcionario.component.html',
  styleUrls: ['./cadastro-funcionario.component.css']
})
export class CadastroFuncionarioComponent implements OnInit {

  formulario: FormGroup;
  funcionario: Funcionario = new Funcionario();

  constructor(
    private formBuilder: FormBuilder,
    private funcionarioService: FuncionarioService
    ) { this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      curriculo: ['', Validators.required],
      cargoAtual: ['', Validators.required]
    });
  }
  ngOnInit() {
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
    cadastrar() {
      this.funcionario.nome = this.formulario.controls.nome.value;
      this.funcionario.cpf = this.formulario.controls.cpf.value;
      this.funcionario.email = this.formulario.controls.email.value;
      this.funcionario.telefone = this.formulario.controls.telefone.value;
      this.funcionario.curriculo = this.formulario.controls.curriculo.value;
      this.funcionario.cargoAtual = this.formulario.controls.cargoAtual.value;

      console.log(this.formulario.value);
      console.log(this.funcionario);
      this.funcionarioService.cadastrarFuncionario(this.funcionario).subscribe(async response => {
        console.log(response);
      });
    }
    
  
  }