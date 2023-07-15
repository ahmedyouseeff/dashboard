import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-card',
  templateUrl: './statistics-card.component.html',
  styleUrls: ['./statistics-card.component.css'],
})
export class StatisticsCardComponent {
  @Input() statusInfo: any[] = [];
}
