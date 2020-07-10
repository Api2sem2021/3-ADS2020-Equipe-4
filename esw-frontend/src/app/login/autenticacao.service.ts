import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private autenticado: boolean = false;
  liberarItensAdm = new EventEmitter<boolean>();
  constructor(
    private router: Router
  ) { }


  logar(nome: string, senha: string) {

    if (nome == 'admin@hotmail.com' && senha == '123'){
      this.autenticado = true;
      this.liberarItensAdm.emit(true);
      this.router.navigate(["/pagina-inicial"])
    } else {
      this.autenticado = false;
      this.liberarItensAdm.emit(false);
    }
  }
}
