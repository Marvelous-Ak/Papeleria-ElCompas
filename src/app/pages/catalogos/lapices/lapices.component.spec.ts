import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LapicesComponent } from './lapices.component';

describe('LapicesComponent', () => {
  let component: LapicesComponent;
  let fixture: ComponentFixture<LapicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LapicesComponent]
    });
    fixture = TestBed.createComponent(LapicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
