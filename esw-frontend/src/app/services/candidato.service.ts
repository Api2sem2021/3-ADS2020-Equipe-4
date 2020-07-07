import { Candidato } from './../model/candidato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class CandidatoService {
    endPoint: string = `http://localhost:8080/candidatos`;
  
    constructor(
      private http: HttpClient
    ) { }
  
    public cadastrarCandidato(candidato: Candidato) {
      return this.http.post(`http://localhost:8080/candidatos`, candidato);
      //tratar erro quando possível
    }
}