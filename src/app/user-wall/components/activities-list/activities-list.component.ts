import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../../services/activities.service';
import { WallActivityEnum } from '../../services/activities.constants';



@Component({
  selector: 'app-activities-list',
  templateUrl: './activities-list.component.html',
  styleUrls: ['./activities-list.component.scss']
})
export class ActivitiesListComponent implements OnInit {

  public acivities = [];
  public activityTypes = WallActivityEnum;

  constructor(
    public activitiesService: ActivitiesService) {
  }

  ngOnInit() {
    this.activitiesService.getActivities()
      .subscribe(
        (response) => this.acivities = response,
        (error) => console.warn('ActivitiesListComponent.ngOnInit error', error)
      );
  }

}
