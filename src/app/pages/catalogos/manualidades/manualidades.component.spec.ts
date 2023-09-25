import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualidadesComponent } from './manualidades.component';

describe('ManualidadesComponent', () => {
  let component: ManualidadesComponent;
  let fixture: ComponentFixture<ManualidadesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManualidadesComponent]
    });
    fixture = TestBed.createComponent(ManualidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
