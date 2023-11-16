import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPageesComponent } from './auth-pagees.component';

describe('AuthPageesComponent', () => {
  let component: AuthPageesComponent;
  let fixture: ComponentFixture<AuthPageesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthPageesComponent]
    });
    fixture = TestBed.createComponent(AuthPageesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
