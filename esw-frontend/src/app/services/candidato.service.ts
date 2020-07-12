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

    public detalharCandidato(id: number){
      return this.http.get<Candidato>(`http://localhost:8080/candidatos/` + id).pipe();
    }

    public editarCandidato(candidato: Candidato){
      return this.http.put(`http://localhost:8080/candidatos/editar`, candidato);
    }

    public buscarCandidatoFiltrado(cpf: string) {
      return this.http.get<Candidato>(`http://localhost:8080/candidatos/buscarCandidatoFiltrado?cpf=${cpf}`);
    }

    public buscarListaCandidatosFiltrados(nome: string, cpf: string, marcadores: string) {
      return this.http.get<Candidato>(`http://localhost:8080/candidatos/buscarListaCandidatosFiltrados?nome=${nome}&cpf=${cpf}&marcadores=${marcadores}`);
    }
}