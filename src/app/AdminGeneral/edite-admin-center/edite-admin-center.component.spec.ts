import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeAdminCenterComponent } from './edite-admin-center.component';

describe('EditeAdminCenterComponent', () => {
  let component: EditeAdminCenterComponent;
  let fixture: ComponentFixture<EditeAdminCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeAdminCenterComponent]
    });
    fixture = TestBed.createComponent(EditeAdminCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
