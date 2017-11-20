import {
  ICaseWallData,
  WallActivityEnum,
  IBaseWallActivity,
  ICaseCommentWallActivity,
  ICaseEvidenceWallActivity,
  ICaseStatusChangedWallActivity
} from './constants';

import {
  BaseWallActivity,
  CaseCommentWallActivity,
  CaseEvidenceWallActivity,
  CaseStatusChangedWallActivity,
  CaseWallData
} from './model';

export const mockedResponse = new CaseWallData();

for (let i = 0; i < 20; i++) {
  mockedResponse.CaseCommentWallActivities.push(
    new CaseCommentWallActivity({
      Id: i
    })
  );
  mockedResponse.CaseEvidenceWallActivities.push(
    new CaseEvidenceWallActivity({
      Id: i * 2
    })
  );
  mockedResponse.CaseStatusChangedWallActivities.push(
    new CaseStatusChangedWallActivity({
      Id: i * 3
    })
  );
}
