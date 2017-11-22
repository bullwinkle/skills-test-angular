import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import {
  ICaseWallData
} from './activities.constants';
import { ActivityUnion, CaseWallData } from './activities.model';

import { IUser, UserService } from '../../core/services/user.service';

@Injectable()
export class ActivitiesService {

  constructor(
    public $http: HttpClient,
    public userService: UserService) {
  }

  getActivities(): Observable<ActivityUnion[]> {

    const users$ = this.userService.getUsers();
    const activities$ = this.$http.get<ICaseWallData>(`/assets/mocks/activity-mock.json`);

    return Observable.forkJoin(users$, activities$)
      .map(([users, result]) => {
        const wallData = new CaseWallData(result);
        const activities = [
          ...wallData.caseEvidenceWallActivities,
          ...wallData.caseCommentWallActivities,
          ...wallData.caseStatusChangedWallActivities
        ];
        return joinActivitiesWithUsers(activities, users);
      });
  }
}



function joinActivitiesWithUsers(
  activities: ActivityUnion[] = [],
  users: IUser[] = []
): ActivityUnion[] {

  return activities.map(a => {
    a.user = users.find( u => u.id === a.creatorUserId );
    return a;
  });

}
