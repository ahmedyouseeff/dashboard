import { Component } from '@angular/core';
import { callParticipants } from 'src/app/shared/data/callData';
import { msgsData } from 'src/app/shared/data/msgsData';
import { Person } from 'src/app/shared/models/person';

@Component({
  selector: 'app-r-sidebar',
  templateUrl: './r-sidebar.component.html',
  styleUrls: ['./r-sidebar.component.css'],
})
export class RSidebarComponent {
  participants: Person[] = callParticipants;

  myMessages: Person[] = msgsData;
}
