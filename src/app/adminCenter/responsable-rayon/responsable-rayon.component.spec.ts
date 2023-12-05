import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACResponsableRayonComponent } from './responsable-rayon.component';

describe('ACResponsableRayonComponent', () => {
  let component: ACResponsableRayonComponent;
  let fixture: ComponentFixture<ACResponsableRayonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACResponsableRayonComponent]
    });
    fixture = TestBed.createComponent(ACResponsableRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
