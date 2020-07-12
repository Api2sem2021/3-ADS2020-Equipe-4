import { Component, OnInit } from '@angular/core';
import { CandidatoService } from '../services/candidato.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Login } from '../model/login';
import { Router } from '@angular/router';

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
  nome: string;
  cpf: string;
  marcadores: string;
  
  constructor(
    private candidatosService: CandidatoService,
    private route: Router,
    private formBuilder: FormBuilder
  ) { this.formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    marcadores: ['', Validators.required],
    });   
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

  buscarCandidatosFiltrados() {
    this.nome = this.formulario.controls.nome.value;
    this.cpf = this.formulario.controls.cpf.value;
    this.marcadores = this.formulario.controls.marcadores.value;
    console.log(this.cpf);
    this.candidatosService.buscarListaCandidatosFiltrados(this.nome, this.cpf, this.marcadores).subscribe( res => {
      this.candidatos = res as any[];
      console.log(this.candidatos);
  }
);
    console.log(this.nome);
  }

  conferirCandidato(id: number) {
    console.log(id);
    this.route.navigate([`/dados-candidatos/${id}`]);
  }

}
