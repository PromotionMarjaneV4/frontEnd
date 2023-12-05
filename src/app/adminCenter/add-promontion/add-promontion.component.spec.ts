import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPromontionComponent } from './add-promontion.component';

describe('AddPromontionComponent', () => {
  let component: AddPromontionComponent;
  let fixture: ComponentFixture<AddPromontionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPromontionComponent]
    });
    fixture = TestBed.createComponent(AddPromontionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
