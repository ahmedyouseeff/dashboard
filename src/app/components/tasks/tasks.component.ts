import { Component } from '@angular/core';
import { TaskModel } from 'src/app/shared/models/task';
import { tasks } from './taskData';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  taskTime = new Date();
  tasks: TaskModel[] = tasks;
}
