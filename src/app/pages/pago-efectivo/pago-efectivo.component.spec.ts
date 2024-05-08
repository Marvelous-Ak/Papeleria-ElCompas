import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoEfectivoComponent } from './pago-efectivo.component';

describe('PagoEfectivoComponent', () => {
  let component: PagoEfectivoComponent;
  let fixture: ComponentFixture<PagoEfectivoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagoEfectivoComponent]
    });
    fixture = TestBed.createComponent(PagoEfectivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
