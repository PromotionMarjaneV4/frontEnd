import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResponsableRayonComponent } from './add-responsable-rayon.component';

describe('AddResponsableRayonComponent', () => {
  let component: AddResponsableRayonComponent;
  let fixture: ComponentFixture<AddResponsableRayonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddResponsableRayonComponent]
    });
    fixture = TestBed.createComponent(AddResponsableRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
