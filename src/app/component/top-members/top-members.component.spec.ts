import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMembersComponent } from './top-members.component';

describe('TopMembersComponent', () => {
  let component: TopMembersComponent;
  let fixture: ComponentFixture<TopMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
