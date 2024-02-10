import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';

import { ShearedModule } from '../sheared/sheared.module';
import { LayoutModule } from '../layout/layout.module';
import { StudentsModule } from '../dashboard/pages/students/students.module';
import { CoursesModule } from './pages/courses/courses.module';


import { DashboardRoutingModule } from './dashboard-routing.module';


@NgModule({
  declarations: [
    DashboardComponent
    
  ],
  imports: [
    CommonModule,
    ShearedModule,
    LayoutModule,
    DashboardRoutingModule,
    StudentsModule,
    CoursesModule
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
