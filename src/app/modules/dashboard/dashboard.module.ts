import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';

import { ShearedModule } from '../sheared/sheared.module';
import { StudentsModule } from '../dashboard/pages/students/students.module';
import { LayoutModule } from '../layout/layout.module';
import { CoursesModule } from './pages/courses/courses.module';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/components/home.component';
import { CoursesComponent } from './pages/courses/components/courses-table/courses.component';
import { StudentsComponent } from './pages/students/components/students-table/students.component';
import { StudentDetailComponent } from './pages/students/pages/student-detail/student-detail.component';
import { CourseDetailComponent } from './pages/courses/pages/course-detail/course-detail.component';


@NgModule({
  declarations: [
    DashboardComponent,
    
  ],
  imports: [

    CommonModule,
    ShearedModule,
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
        path: 'students/:id',
        component: StudentDetailComponent,
      },
      {
        path: 'courses/:id',
        component: CourseDetailComponent,
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
