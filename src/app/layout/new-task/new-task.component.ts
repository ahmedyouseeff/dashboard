import { Component } from '@angular/core';
import { emojies } from 'src/app/shared/data/emojies';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css'],
})
export class NewTaskComponent {
  emojies = emojies;
}
