import { Candidato } from './../model/candidato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

    public buscarCandidatos(): Observable<any>{
      return this.http.get<Candidato>(`http://localhost:8080/candidatos/buscarTodos`).pipe();
    }
}