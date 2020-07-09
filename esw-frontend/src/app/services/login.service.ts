import { HttpClient } from '@angular/common/http';
import { Login } from './../model/login';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class LoginService {
    endPoint: string = `http://localhost:8080/login`;
  
    constructor(
      private http: HttpClient
    ) { }
  
    public logar(login: Login) {
      return this.http.post(`http://localhost:8080/login`, login);
      //tratar erro quando possível
    }
}