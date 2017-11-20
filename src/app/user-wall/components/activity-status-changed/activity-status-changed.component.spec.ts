import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityStatusChangedComponent } from './activity-status-changed.component';

describe('ActivityStatusChangedComponent', () => {
  let component: ActivityStatusChangedComponent;
  let fixture: ComponentFixture<ActivityStatusChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityStatusChangedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityStatusChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
