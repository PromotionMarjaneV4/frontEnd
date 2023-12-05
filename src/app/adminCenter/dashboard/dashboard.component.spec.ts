import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACDashboardComponent } from './dashboard.component';

describe('ACDashboardComponent', () => {
  let component: ACDashboardComponent;
  let fixture: ComponentFixture<ACDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACDashboardComponent]
    });
    fixture = TestBed.createComponent(ACDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
