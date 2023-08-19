import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPersonalInfoComponent } from './your-personal-info.component';

describe('YourPersonalInfoComponent', () => {
  let component: YourPersonalInfoComponent;
  let fixture: ComponentFixture<YourPersonalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourPersonalInfoComponent]
    });
    fixture = TestBed.createComponent(YourPersonalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
