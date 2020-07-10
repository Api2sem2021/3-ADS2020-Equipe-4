import { VagasService } from './../services/vagas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaga-detalhada',
  templateUrl: './vaga-detalhada.component.html',
  styleUrls: ['./vaga-detalhada.component.css']
})
export class VagaDetalhadaComponent implements OnInit {

  vagas: any[];

  constructor(
    private vagasService: VagasService
  ) { }

  ngOnInit() {
    this.buscarVagas();
  }

  buscarVagas() {
    this.vagasService.buscarVagas().subscribe( res => {
          this.vagas = res;
          console.log(this.vagas);
      }
    );
  }

}
