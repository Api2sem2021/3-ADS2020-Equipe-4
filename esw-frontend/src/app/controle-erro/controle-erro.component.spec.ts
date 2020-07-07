import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleErroComponent } from './controle-erro.component';

describe('ControleErroComponent', () => {
  let component: ControleErroComponent;
  let fixture: ComponentFixture<ControleErroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleErroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
