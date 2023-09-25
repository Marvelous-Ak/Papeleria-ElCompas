import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArteComponent } from './arte.component';

describe('ArteComponent', () => {
  let component: ArteComponent;
  let fixture: ComponentFixture<ArteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArteComponent]
    });
    fixture = TestBed.createComponent(ArteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
