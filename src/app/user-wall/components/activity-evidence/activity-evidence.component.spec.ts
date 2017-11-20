import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEvidenceComponent } from './activity-evidence.component';

describe('ActivityEvidenceComponent', () => {
  let component: ActivityEvidenceComponent;
  let fixture: ComponentFixture<ActivityEvidenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityEvidenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityEvidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
