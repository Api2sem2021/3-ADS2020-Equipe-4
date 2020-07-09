import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusCandidatoComponent } from './status-candidato.component';

describe('StatusCandidatoComponent', () => {
  let component: StatusCandidatoComponent;
  let fixture: ComponentFixture<StatusCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
