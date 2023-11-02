import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLogRegComponent } from './user-log-reg.component';

describe('UserLogRegComponent', () => {
  let component: UserLogRegComponent;
  let fixture: ComponentFixture<UserLogRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLogRegComponent]
    });
    fixture = TestBed.createComponent(UserLogRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
