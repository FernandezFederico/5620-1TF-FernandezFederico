import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CoursesComponent } from './components/courses-table/courses.component';
import { CoursesModalComponent } from './components/courses-modal/courses-modal.component';
import { SharedModule } from '../../../shared/shared.module';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CoursesRoutingModule } from './courses.routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesModalComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    CoursesRoutingModule,

    
  ], exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
