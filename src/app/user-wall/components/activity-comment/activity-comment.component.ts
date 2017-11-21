import { Component, Input, OnInit } from '@angular/core';
import { CaseCommentWallActivity } from '../../services/activities.model';

@Component({
  selector: 'app-activity-comment',
  templateUrl: './activity-comment.component.html',
  styleUrls: [ './activity-comment.component.scss']
})
export class ActivityCommentComponent implements OnInit {

  constructor() {
  }

  @Input() data: CaseCommentWallActivity;

  ngOnInit() {
  }

}
