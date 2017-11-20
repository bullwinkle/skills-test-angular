import {
  ICaseWallData,
  WallActivityEnum,
  IBaseWallActivity,
  ICaseCommentWallActivity,
  ICaseEvidenceWallActivity,
  ICaseStatusChangedWallActivity
} from './constants';


export class CaseWallData implements ICaseWallData {

  CaseCommentWallActivities: ICaseCommentWallActivity[] = [];
  CaseEvidenceWallActivities: ICaseEvidenceWallActivity[] = [];
  CaseStatusChangedWallActivities: ICaseStatusChangedWallActivity[] = [];

}


export class BaseWallActivity implements IBaseWallActivity {

  Type = WallActivityEnum.CaseComment;
  CreatorUserId = '';
  Id = null;
  CaseId = null;
  IsFavorite = false;
  ModificationTimeUnixTimeInMs = null;

  constructor (data = {}) {
    Object.assign(this, data);
  }

}


export class CaseCommentWallActivity extends BaseWallActivity implements ICaseCommentWallActivity {

  Type = WallActivityEnum.CaseComment;

  Comment = '';
}


export class CaseEvidenceWallActivity extends BaseWallActivity implements ICaseEvidenceWallActivity {

  Type = WallActivityEnum.CaseEvidence;

  EvidenceName = '';
  Description = '';
  EvidenceThumbnailBase64 = '';
  EvidenceId = null;
  FileType = '';

}


export class CaseStatusChangedWallActivity extends BaseWallActivity implements ICaseStatusChangedWallActivity {

  Type = WallActivityEnum.CaseStatusChange;

  Description = '';

}
