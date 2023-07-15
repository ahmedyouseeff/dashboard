import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-today-scheudle',
  templateUrl: './today-scheudle.component.html',
  styleUrls: ['./today-scheudle.component.css'],
})
export class TodayScheudleComponent {
  @Input() participants: Person[] = [];
}
