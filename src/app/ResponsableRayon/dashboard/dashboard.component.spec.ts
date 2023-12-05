import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RRDashboardComponent } from './dashboard.component';

describe('RRDashboardComponent', () => {
  let component: RRDashboardComponent;
  let fixture: ComponentFixture<RRDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RRDashboardComponent]
    });
    fixture = TestBed.createComponent(RRDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
