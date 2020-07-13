import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVagaComponent } from './editar-vaga.component';

describe('EditarVagaComponent', () => {
  let component: EditarVagaComponent;
  let fixture: ComponentFixture<EditarVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
