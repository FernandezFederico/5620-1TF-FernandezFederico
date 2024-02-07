import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CoursesComponent } from './components/courses-table/courses.component';
import { CoursesModalComponent } from './components/courses-modal/courses-modal.component';
import { ShearedModule } from '../../../sheared/sheared.module';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesModalComponent
  ],
  imports: [
    CommonModule,
    ShearedModule,
    RouterModule,
  ], exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
