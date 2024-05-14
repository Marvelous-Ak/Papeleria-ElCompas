import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuysCompleteComponent } from './buys-complete.component';

describe('BuysCompleteComponent', () => {
  let component: BuysCompleteComponent;
  let fixture: ComponentFixture<BuysCompleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuysCompleteComponent]
    });
    fixture = TestBed.createComponent(BuysCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
