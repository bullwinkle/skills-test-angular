import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

import {
  ICaseWallData,
  WallActivityEnum,
  IBaseWallActivity,
  ICaseCommentWallActivity,
  ICaseEvidenceWallActivity,
  ICaseStatusChangedWallActivity,
  ActivityUnion
} from '../constants';

import {
  BaseWallActivity,
  CaseCommentWallActivity,
  CaseEvidenceWallActivity,
  CaseStatusChangedWallActivity,
  CaseWallData
} from '../model';

import {mockedResponse} from '../mock';
import {UserService} from '../../core/services/user.service';

@Injectable()
export class ActivitiesService {

  constructor(
    public $http: HttpClient,
    public userService: UserService
  ) { }

  getActivities (): Observable<Array<ActivityUnion>> {

    const users$ = this.userService.getUsers();
    const activities$ = this.$http.get(`/assets/mocks/activity-mock.json`) as Observable<ICaseWallData>;


    return Observable.forkJoin( users$, activities$ )
      .map(([users, result]) => {
        return [
          ...result.CaseEvidenceWallActivities,
          ...result.CaseCommentWallActivities,
          ...result.CaseStatusChangedWallActivities
        ].map(
          el => ({
            ...el,
            user: users.find(user => user.Id === el.CreatorUserId)
          })
        );
      });
  }
}
