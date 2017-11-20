import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/observable/from';

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

@Injectable()
export class ActivitiesService {

  constructor(
    public $http: HttpClient
  ) { }

  getActivities (): Observable<Array<ActivityUnion>> {
    return new Observable((subscriber) => {
      subscriber.next([
        ...mockedResponse.CaseEvidenceWallActivities,
        ...mockedResponse.CaseCommentWallActivities,
        ...mockedResponse.CaseStatusChangedWallActivities
      ]);
    });
  }
}
