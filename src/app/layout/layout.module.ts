import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LSidebarComponent } from './l-sidebar/l-sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { PagesModule } from '../components/pages.module';
import { MainContentComponent } from './main-content/main-content.component';
import { RSidebarComponent } from './r-sidebar/r-sidebar.component';
import { TodayScheudleComponent } from './today-scheudle/today-scheudle.component';
import { MessagesComponent } from './messages/messages.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavbarComponent,
    LSidebarComponent,
    LayoutComponent,
    MainContentComponent,
    RSidebarComponent,
    TodayScheudleComponent,
    MessagesComponent,
    NewTaskComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, PagesModule, SharedModule],
})
export class LayoutModule {}
