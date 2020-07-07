import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controle-erro',
  templateUrl: './controle-erro.component.html',
  styleUrls: ['./controle-erro.component.css']
})
export class ControleErroComponent implements OnInit {

  @Input() mostrarErro: boolean;
  @Input() msgErro: string;
  
  constructor() { }

  ngOnInit() {
  }

}
