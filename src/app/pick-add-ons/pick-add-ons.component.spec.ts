import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickAddOnsComponent } from './pick-add-ons.component';

describe('PickAddOnsComponent', () => {
  let component: PickAddOnsComponent;
  let fixture: ComponentFixture<PickAddOnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PickAddOnsComponent]
    });
    fixture = TestBed.createComponent(PickAddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
