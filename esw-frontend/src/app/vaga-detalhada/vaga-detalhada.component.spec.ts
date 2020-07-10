import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VagaDetalhadaComponent } from './vaga-detalhada.component';

describe('VagaDetalhadaComponent', () => {
  let component: VagaDetalhadaComponent;
  let fixture: ComponentFixture<VagaDetalhadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VagaDetalhadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VagaDetalhadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
