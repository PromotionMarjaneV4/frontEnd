import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeResponsableRayonComponent } from './edite-responsable-rayon.component';

describe('EditeResponsableRayonComponent', () => {
  let component: EditeResponsableRayonComponent;
  let fixture: ComponentFixture<EditeResponsableRayonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditeResponsableRayonComponent]
    });
    fixture = TestBed.createComponent(EditeResponsableRayonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
