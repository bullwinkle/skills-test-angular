import { Component, Input, OnInit } from '@angular/core';
import { CaseEvidenceWallActivity } from '../../services/activities.model';

@Component({
  selector: 'app-activity-evidence',
  templateUrl: './activity-evidence.component.html',
  styleUrls: ['./activity-evidence.component.scss']
})
export class ActivityEvidenceComponent implements OnInit {

  constructor() {
  }

  @Input() data: CaseEvidenceWallActivity;

  ngOnInit() {
  }

}
