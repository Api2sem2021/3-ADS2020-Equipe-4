import { Vaga } from './../model/vaga';
import { Candidato } from './../model/candidato';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class VagasService {
    endPoint: string = `http://localhost:8080/vagas`;
  
    constructor(
      private http: HttpClient
    ) { }
  
    public cadastrarVaga(vaga: Vaga) {
      return this.http.post(`http://localhost:8080/vagas`, vaga);
      //tratar erro quando possível
    }

    public buscarVagas(): Observable<any> {
        return this.http.get<Vaga>(`http://localhost:8080/vagas/buscarTodas`).pipe();
      }
}