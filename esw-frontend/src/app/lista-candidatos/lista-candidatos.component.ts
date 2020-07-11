import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidato.service';
import { FormGroup } from '@angular/forms';
import { Login } from '../model/login';

@Component({
  selector: 'app-lista-candidatos',
  templateUrl: './lista-candidatos.component.html',
  styleUrls: ['./lista-candidatos.component.css']
})
export class ListaCandidatosComponent implements OnInit {

  formulario: FormGroup;
  login: Login = new Login();
  candidatos: any[];
  id: number;
  
  constructor(
    private candidatosService: CandidatoService
  ) {
    
  }

  ngOnInit() {
    this.buscarCandidatos();
  }

  buscarCandidatos() {
    this.candidatosService.buscarCandidatos().subscribe( res => {
          this.candidatos = res;
          console.log(this.candidatos);
      }
    );
  }

}
