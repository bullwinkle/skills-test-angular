import { Component, Input, OnInit } from '@angular/core';
import { ICaseStatusChangedWallActivity } from '../../services/activities.constants';

@Component({
  selector: 'app-activity-status-changed',
  templateUrl: './activity-status-changed.component.html',
  styleUrls: ['./activity-status-changed.component.scss']
})
export class ActivityStatusChangedComponent implements OnInit {

  constructor() {
  }

  @Input() data: ICaseStatusChangedWallActivity;

  ngOnInit() {
  }

}
