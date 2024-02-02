import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import { StudentsModule } from '../dashboard/pages/students/students.module';
import { LayoutModule } from '../layout/layout.module';
import { CoursesModule } from './pages/courses/courses.module';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StudentsModule,
    CoursesModule,
    LayoutModule,
    RouterModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
