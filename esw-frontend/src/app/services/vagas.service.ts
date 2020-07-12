import { Vaga } from './../model/vaga';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class VagasService {
    [x: string]: any;
    endPoint: string = `http://localhost:8080/vagas`;
  
    constructor(
      private http: HttpClient
    ) { }
  
    public cadastrarVaga(vaga: Vaga) {
      return this.http.post(`http://localhost:8080/vagas`, vaga);
    }

    public buscarVagas(): Observable<any> {
        return this.http.get<Vaga>(`http://localhost:8080/vagas/buscarTodas`).pipe();
      }

    public buscarVagaPorId(id: number) {
      return this.http.get(`http://localhost:8080/vagas/${id}`);
    }
}