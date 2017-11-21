import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/from';
import 'rxjs/add/operator/map';

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

    return this.$http.get(`/assets/mocks/activity-mock.json`)
      .map((result: ICaseWallData) => [
        ...result.CaseEvidenceWallActivities,
        ...result.CaseCommentWallActivities,
        ...result.CaseStatusChangedWallActivities
      ]);
  }
}
