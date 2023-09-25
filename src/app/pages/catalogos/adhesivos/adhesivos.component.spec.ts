import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhesivosComponent } from './adhesivos.component';

describe('AdhesivosComponent', () => {
  let component: AdhesivosComponent;
  let fixture: ComponentFixture<AdhesivosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdhesivosComponent]
    });
    fixture = TestBed.createComponent(AdhesivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
