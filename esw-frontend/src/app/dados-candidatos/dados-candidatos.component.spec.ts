import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosCandidatosComponent } from './dados-candidatos.component';

describe('DadosCandidatosComponent', () => {
  let component: DadosCandidatosComponent;
  let fixture: ComponentFixture<DadosCandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosCandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
