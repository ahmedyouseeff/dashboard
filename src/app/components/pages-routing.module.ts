import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

export const Routing: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(Routing)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
