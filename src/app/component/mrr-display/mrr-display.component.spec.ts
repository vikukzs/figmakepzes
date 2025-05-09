import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrrDisplayComponent } from './mrr-display.component';

describe('MrrDisplayComponent', () => {
  let component: MrrDisplayComponent;
  let fixture: ComponentFixture<MrrDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MrrDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
