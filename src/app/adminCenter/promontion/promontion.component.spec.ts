import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromontionComponent } from './promontion.component';

describe('PromontionComponent', () => {
  let component: PromontionComponent;
  let fixture: ComponentFixture<PromontionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromontionComponent]
    });
    fixture = TestBed.createComponent(PromontionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
