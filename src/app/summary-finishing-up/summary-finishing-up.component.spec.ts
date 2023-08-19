import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryFinishingUpComponent } from './summary-finishing-up.component';

describe('SummaryFinishingUpComponent', () => {
  let component: SummaryFinishingUpComponent;
  let fixture: ComponentFixture<SummaryFinishingUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SummaryFinishingUpComponent]
    });
    fixture = TestBed.createComponent(SummaryFinishingUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
