import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditePromontionComponent } from './edite-promontion.component';

describe('EditePromontionComponent', () => {
  let component: EditePromontionComponent;
  let fixture: ComponentFixture<EditePromontionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditePromontionComponent]
    });
    fixture = TestBed.createComponent(EditePromontionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
