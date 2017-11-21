import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityBaseComponent } from './activity-base.component';

describe('ActivityBaseComponent', () => {
  let component: ActivityBaseComponent;
  let fixture: ComponentFixture<ActivityBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
