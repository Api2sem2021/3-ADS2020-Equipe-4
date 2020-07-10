import { AutenticacaoService } from './login/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'esw-frontend';

  mostrarItensAdm: boolean = false;

  constructor(private autenticacaoService: AutenticacaoService) {

  }

  ngOnInit() {
    this.autenticacaoService.liberarItensAdm.subscribe(
      res => this.mostrarItensAdm = res
    );
  }
}
