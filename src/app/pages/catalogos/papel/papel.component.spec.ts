import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PapelComponent } from './papel.component';

describe('PapelComponent', () => {
  let component: PapelComponent;
  let fixture: ComponentFixture<PapelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PapelComponent]
    });
    fixture = TestBed.createComponent(PapelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
