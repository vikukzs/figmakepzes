import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeRangeButtonGroupComponent } from './time-range-button-group.component';

describe('TimeRangeButtonGroupComponent', () => {
  let component: TimeRangeButtonGroupComponent;
  let fixture: ComponentFixture<TimeRangeButtonGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeRangeButtonGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeRangeButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
