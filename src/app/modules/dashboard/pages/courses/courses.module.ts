import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CoursesComponent } from './components/courses-table/courses.component';
import { CoursesModalComponent } from './components/courses-modal/courses-modal.component';
import { ShearedModule } from '../../../sheared/sheared.module';
import { CourseDetailComponent } from './pages/course-detail/course-detail.component';
import { CourseRoutingModule } from './course.routing.module';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesModalComponent,
    CourseDetailComponent,
  ],
  imports: [
    CommonModule,
    ShearedModule,
    RouterModule,
    CourseRoutingModule,

    
  ], exports: [
    CoursesComponent,
  ]
})
export class  CoursesModule { }
