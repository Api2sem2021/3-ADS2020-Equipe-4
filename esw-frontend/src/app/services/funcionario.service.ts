import { HttpClient } from '@angular/common/http';
import { Funcionario } from './../model/funcionario';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class FuncionarioService {
    endPoint: string = `http://localhost:8080/funcionarios`;
  
    constructor(
      private http: HttpClient
    ) { }
  
    public cadastrarFuncionario(funcionario: Funcionario) {
      return this.http.post(`http://localhost:8080/funcionarios`, funcionario);
      //tratar erro quando possível
    }
}