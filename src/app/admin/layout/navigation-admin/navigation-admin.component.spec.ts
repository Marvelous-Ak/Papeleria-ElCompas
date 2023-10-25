import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationAdminComponent } from './navigation-admin.component';

describe('NavigationAdminComponent', () => {
  let component: NavigationAdminComponent;
  let fixture: ComponentFixture<NavigationAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavigationAdminComponent]
    });
    fixture = TestBed.createComponent(NavigationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
