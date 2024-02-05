import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { CoursesComponent } from './components/courses-table/courses.component';
import { ShearedModule } from '../../../sheared/sheared.module';


@NgModule({
  declarations: [
    CoursesComponent
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
