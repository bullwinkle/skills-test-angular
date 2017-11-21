import {IUser} from '../core/services/user.service';

export interface ICaseWallData {

  CaseCommentWallActivities: ICaseCommentWallActivity[];
  CaseEvidenceWallActivities: ICaseEvidenceWallActivity[];
  CaseStatusChangedWallActivities: ICaseStatusChangedWallActivity[];

}


export enum WallActivityEnum {
  CaseStatusChange = 2,
  CaseEvidence = 1,
  CaseComment = 0
}


export interface IBaseWallActivity {

  CreatorUserId: string;
  Id: number;
  Type: WallActivityEnum;
  CaseId: number;
  IsFavorite: boolean;
  ModificationTimeUnixTimeInMs: number;
  user?: IUser;

}


export interface ICaseCommentWallActivity extends IBaseWallActivity {

  Comment: string;

}


export interface ICaseEvidenceWallActivity extends IBaseWallActivity {

  EvidenceName: string;
  Description: string;
  EvidenceThumbnailBase64: string;
  EvidenceId: number;
  FileType: string;

}


export interface ICaseStatusChangedWallActivity extends IBaseWallActivity {

  Description: string;

}


export type ActivityUnion = ICaseCommentWallActivity | ICaseEvidenceWallActivity | ICaseStatusChangedWallActivity;
