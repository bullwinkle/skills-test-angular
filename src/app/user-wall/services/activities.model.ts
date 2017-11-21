import {
  ICaseWallData,
  WallActivityEnum,
  IBaseWallActivity,
  ICaseCommentWallActivity,
  ICaseEvidenceWallActivity,
  ICaseStatusChangedWallActivity, IActivityUnion
} from './activities.constants';
import { IUser } from '../../core/services/user.service';


export class CaseWallData {

  public caseCommentWallActivities: CaseCommentWallActivity[] = [];
  public caseEvidenceWallActivities: CaseEvidenceWallActivity[] = [];
  public caseStatusChangedWallActivities: CaseStatusChangedWallActivity[] = [];

  constructor (data: ICaseWallData = <ICaseWallData>{}) {
    if (data.CaseCommentWallActivities && data.CaseCommentWallActivities.length) {
      this.caseCommentWallActivities = data.CaseCommentWallActivities.map(
        el => new CaseCommentWallActivity(el)
      );
    }

    if (data.CaseEvidenceWallActivities && data.CaseEvidenceWallActivities.length) {
      this.caseEvidenceWallActivities = data.CaseEvidenceWallActivities.map(
        el => new CaseEvidenceWallActivity(el)
      );
    }

    if (data.CaseStatusChangedWallActivities && data.CaseStatusChangedWallActivities.length) {
      this.caseStatusChangedWallActivities = data.CaseStatusChangedWallActivities.map(
        el => new CaseStatusChangedWallActivity(el)
      );
    }
  }

}


export class BaseWallActivity {

  type: WallActivityEnum;
  creatorUserId: string;
  id: number;
  caseId: number;
  isFavorite: boolean;
  modificationTimeUnixTimeInMs: number;
  description: string;
  user: IUser;

  constructor(data: IActivityUnion = <IActivityUnion>{}) {
    Object.assign(this, this.fromJson(data));
  }

  fromJson (data: IActivityUnion) { return {
    type: data.Type,
    creatorUserId: data.CreatorUserId,
    id: data.Id,
    caseId: data.CaseId,
    isFavorite: data.IsFavorite,
    modificationTimeUnixTimeInMs: data.ModificationTimeUnixTimeInMs
  }; }

}


export class CaseCommentWallActivity extends BaseWallActivity {

  description: string;

  type = WallActivityEnum.CaseComment;

  fromJson (data: ICaseCommentWallActivity) { return {
    ...super.fromJson(data),
    description: data.Comment
  }; }

}


export class CaseEvidenceWallActivity extends BaseWallActivity {

  type = WallActivityEnum.CaseEvidence;

  evidenceName: string;
  description: string;
  evidenceThumbnailBase64: string;
  evidenceId: number;
  fileType: string;

  fromJson (data: ICaseEvidenceWallActivity) { return {
    ...super.fromJson(data),

    evidenceName: data.EvidenceName,
    description: data.Description,
    evidenceThumbnailBase64: data.EvidenceThumbnailBase64,
    evidenceId: data.EvidenceId,
    fileType: data.FileType
  }; }

}


export class CaseStatusChangedWallActivity extends BaseWallActivity {

  type = WallActivityEnum.CaseStatusChange;

  fromJson (data: ICaseStatusChangedWallActivity) { return {
    ...super.fromJson(data),
    description: data.Description
  }; }

}

export type ActivityUnion = CaseCommentWallActivity |  CaseEvidenceWallActivity | CaseStatusChangedWallActivity;
