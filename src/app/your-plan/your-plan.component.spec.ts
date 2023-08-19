import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPlanComponent } from './your-plan.component';

describe('YourPlanComponent', () => {
  let component: YourPlanComponent;
  let fixture: ComponentFixture<YourPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourPlanComponent]
    });
    fixture = TestBed.createComponent(YourPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
