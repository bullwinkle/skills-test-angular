import { Component, Input, OnInit } from '@angular/core';
import { CaseCommentWallActivity } from '../../services/activities.model';

@Component({
  selector: 'app-activity-base',
  templateUrl: './activity-base.component.html',
  styleUrls: [
    '../activity-shared-styles.scss',
    './activity-base.component.scss'
  ]
})
export class ActivityBaseComponent implements OnInit {

  constructor() { }

  @Input() data: CaseCommentWallActivity;

  ngOnInit() {
  }

  onStarClick () {
    this.data.isFavorite = !this.data.isFavorite;
  }

}
