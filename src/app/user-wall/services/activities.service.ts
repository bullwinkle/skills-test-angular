import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import {
  ICaseWallData
} from './activities.constants';
import { ActivityUnion, CaseWallData } from './activities.model';

import { UserService } from '../../core/services/user.service';

@Injectable()
export class ActivitiesService {

  constructor(
    public $http: HttpClient,
    public userService: UserService) {
  }

  getActivities(): Observable<Array<ActivityUnion>> {

    const users$ = this.userService.getUsers();
    const activities$ = this.$http.get(`/assets/mocks/activity-mock.json`) as Observable<ICaseWallData>;

    return Observable.forkJoin(users$, activities$)
      .map(([users, result]) => {
        const wallData = new CaseWallData(result);
        return [
          ...wallData.caseEvidenceWallActivities,
          ...wallData.caseCommentWallActivities,
          ...wallData.caseStatusChangedWallActivities
        ].map(el => {
          el.user = users.find( user => user.id === el.creatorUserId );
          return el;
        });
      });
  }
}
