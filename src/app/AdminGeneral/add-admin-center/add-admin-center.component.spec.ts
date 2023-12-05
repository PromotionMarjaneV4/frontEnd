import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminCenterComponent } from './add-admin-center.component';

describe('AddAdminCenterComponent', () => {
  let component: AddAdminCenterComponent;
  let fixture: ComponentFixture<AddAdminCenterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAdminCenterComponent]
    });
    fixture = TestBed.createComponent(AddAdminCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
