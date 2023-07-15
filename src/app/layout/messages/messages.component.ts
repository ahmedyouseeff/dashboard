import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  @Input() messages: Person[] = [];
}
