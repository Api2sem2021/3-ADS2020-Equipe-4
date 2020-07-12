import { CandidatoService } from './../services/candidato.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-status-candidato',
  templateUrl: './status-candidato.component.html',
  styleUrls: ['./status-candidato.component.css']
})
export class StatusCandidatoComponent implements OnInit {
  subscribed = [""];

  selected = [""];
  interviewed = [""];
  test =[""];
  approved = [""];
  failed = [""];
  employed=[""];
  candidatos = [];
  candidato;
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(  event.previousContainer.data,
                          event.container.data,
                          event.previousIndex,
                          event.currentIndex);
    }
  }
  constructor(
    // tslint:disable-next-line: no-shadowed-variable
    private CandidatoService: CandidatoService,
  ){}
  ngOnInit() {
    this.CandidatoService.buscarCandidatos().subscribe( res => {
      this.candidatos = res;
      for (let i = 0; this.candidatos.length; i++){
        this.candidato = this.candidatos[i];

        switch (this.candidato.status){
          case 'Candidatado':
            this.subscribed.push(this.candidato.nome)
            break;
          case 'Selecionado':
            this.selected.push(this.candidato.nome)
            break;
          case 'Entrevistado':
            this.interviewed.push(this.candidato.nome)
            break;
          case 'Teste de competência':
            this.test.push(this.candidato.nome)
            break;
          case 'Aprovado':
            this.approved.push(this.candidato.nome);
            break;
          case 'Reprovado':
            this.failed.push(this.candidato.nome)
            break;
          case 'Contratado':
            this.employed.push(this.candidato.nome)
            break;
        }
      }
    });
  }

}
