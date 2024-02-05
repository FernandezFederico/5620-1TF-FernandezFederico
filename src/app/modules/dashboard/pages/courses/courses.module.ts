import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './components/courses.component';
import { ShearedModule } from '../../../sheared/sheared.module';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    ShearedModule,
  ], exports: [
    CoursesComponent,
  ]
})
export class CoursesModule { }
