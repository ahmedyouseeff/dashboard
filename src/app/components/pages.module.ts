import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { StatisticsCardComponent } from './statistics-card/statistics-card.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsComponent } from './charts/charts.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [StatisticsCardComponent, ChartsComponent, DashboardComponent, TasksComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, NgApexchartsModule],
})
export class PagesModule {}
