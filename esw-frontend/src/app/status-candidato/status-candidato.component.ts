import { CandidatoService } from './../services/candidato.service';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-status-candidato',
  templateUrl: './status-candidato.component.html',
  styleUrls: ['./status-candidato.component.css']
})
export class StatusCandidatoComponent implements OnInit {
  subscribed = [
    "Claudia",
    "Gabriel",
    "Carlos",
    "Arthur",
    "Vânia",
    "Jairo",
    "Pedro",
    "Marcos",
    "Paulo",
    "Ana",
    "Victor",
    "Júlia",
    "Bianca",
    "Eduardo",
    "Flitzvaldo",
    "Valdisney",
    "Jóbison",
    "Janete"

  ];

  selected = [""];
  interviewed = [""];
  test =[""];
  approved = [""];
  failed = [""];
  employed=[""];

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
  ngOnInit() {
  }

}
