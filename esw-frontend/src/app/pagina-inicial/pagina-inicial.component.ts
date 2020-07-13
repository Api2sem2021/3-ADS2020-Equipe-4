import { AutenticacaoService } from './../login/autenticacao.service';
import { Router } from '@angular/router';
import { Vaga } from './../model/vaga';
import { VagasService } from './../services/vagas.service';
import { Login } from './../model/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  mostrarItensAdm: boolean = false;
  formulario: FormGroup;
  login: Login = new Login();
  vagas: any[];
  id: number;
  constructor(
    private formBuilder: FormBuilder,
    private vagasService: VagasService,
    private route: Router,
    private autenticacaoService: AutenticacaoService
  ) {
    this.formulario = this.formBuilder.group({

      email: ['', Validators.required],
      senha: ['', Validators.required],

    });
   }

  ngOnInit() {
    this.mostrarItensAdm = this.autenticacaoService.getAutenticado();
    this.buscarVagas();
  }


  cadastrarNaVaga(id: number) {
    console.log(id);
    this.route.navigate([`/vaga-detalhada/${id}`]);
  }

  editarVaga(id: number) {
    console.log(id);
    this.route.navigate([`/editar-vaga/${id}`]);
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



}
