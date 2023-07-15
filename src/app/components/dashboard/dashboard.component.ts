import { Component } from '@angular/core';
import { StatusInfoModel } from 'src/app/shared/models/status';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  statics: StatusInfoModel[] = [
    {
      title: 'Task Completed',
      icon: 'fa-regular fa-star',
      statusNo: 8,
      status: 'up',
      statusPR: 10,
    },
    {
      title: 'Task Completed',
      icon: 'fa-regular fa-file-lines',
      statusNo: 10,
      status: 'same',
      statusPR: 10,
    },
    {
      title: 'Project Done',
      icon: 'fa-regular fa-star',
      statusNo: 10,
      status: 'down',
      statusPR: 8,
    },
  ];
}
