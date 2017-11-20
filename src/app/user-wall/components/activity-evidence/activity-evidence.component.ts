import {Component, Input, OnInit} from '@angular/core';
import {ICaseEvidenceWallActivity} from '../../constants';

@Component({
  selector: 'app-activity-evidence',
  templateUrl: './activity-evidence.component.html',
  styleUrls: ['./activity-evidence.component.scss']
})
export class ActivityEvidenceComponent implements OnInit {

  constructor() { }

  @Input() data: ICaseEvidenceWallActivity;

  ngOnInit() {
  }

}
