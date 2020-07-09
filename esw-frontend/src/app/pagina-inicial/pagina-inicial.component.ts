import { Router } from '@angular/router';
import { Vaga } from './../model/vaga';
import { VagasService } from './../services/vagas.service';
import { Login } from './../model/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  formulario: FormGroup;
  login: Login = new Login();
  vagas: any[];
  contador: number;
  constructor(
    private formBuilder: FormBuilder,
    private vagasService: VagasService,
    private route: Router
  ) {
    this.formulario = this.formBuilder.group({

      email: ['', Validators.required],
      senha: ['', Validators.required],

    });
   }

  ngOnInit() {
    this.contador = 0;
    this.buscarVagas();
  }

  cadastrarNaVaga() {
    this.route.navigate(["/vaga-detalhada"])
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

  buscarVagas() {
    this.vagasService.buscarVagas().subscribe( res => {
          this.vagas = res;
          console.log(this.vagas);
      }
    );
  }

  somarContador() {
    this.contador += this.contador + 1;
  }


}
