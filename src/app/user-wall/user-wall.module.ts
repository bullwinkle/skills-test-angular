import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesListComponent } from './components/activities-list/activities-list.component';
import { ActivityCommentComponent } from './components/activity-comment/activity-comment.component';
import { ActivityEvidenceComponent } from './components/activity-evidence/activity-evidence.component';
import { ActivityStatusChangedComponent } from './components/activity-status-changed/activity-status-changed.component';
import { ActivitiesService } from './services/activities.service';
import { ActivityBaseComponent } from './components/activity-base/activity-base.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ActivitiesListComponent,
    ActivityCommentComponent,
    ActivityEvidenceComponent,
    ActivityStatusChangedComponent,
    ActivityBaseComponent
  ],
  exports: [
    ActivitiesListComponent
  ],
  providers: [
    ActivitiesService
  ]
})
export class UserWallModule {
}
