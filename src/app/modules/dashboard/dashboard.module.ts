import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';

import { MatButtonModule } from '@angular/material/button';
import { StudentsModule } from '../dashboard/pages/students/students.module';
import { LayoutModule } from '../layout/layout.module';
import { CoursesModule } from './pages/courses/courses.module';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/components/home.component';
import { CoursesComponent } from './pages/courses/components/courses.component';
import { StudentsComponent } from './pages/students/components/students-table/students.component';


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
    RouterModule.forChild([
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      },
      {
        path: 'students',
        component: StudentsComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ]),
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
