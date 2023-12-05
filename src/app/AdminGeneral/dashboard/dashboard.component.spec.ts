import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AGDashboardComponent } from './dashboard.component';

describe('AGDashboardComponent', () => {
  let component: AGDashboardComponent;
  let fixture: ComponentFixture<AGDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AGDashboardComponent]
    });
    fixture = TestBed.createComponent(AGDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
