import { Component, Input, OnInit } from '@angular/core';
import { ICaseCommentWallActivity } from '../../services/activities.constants';

@Component({
  selector: 'app-activity-comment',
  templateUrl: './activity-comment.component.html',
  styleUrls: ['./activity-comment.component.scss']
})
export class ActivityCommentComponent implements OnInit {

  constructor() {
  }

  @Input() data: ICaseCommentWallActivity;

  ngOnInit() {
  }

}
