import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DidacticosComponent } from './didacticos.component';

describe('DidacticosComponent', () => {
  let component: DidacticosComponent;
  let fixture: ComponentFixture<DidacticosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DidacticosComponent]
    });
    fixture = TestBed.createComponent(DidacticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
