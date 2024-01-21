import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard.component';

import {MatButtonModule} from '@angular/material/button';
import { StudentsModule } from '../dashboard/pages/students/students.module';
import { LayoutModule } from '../layout/layout.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    StudentsModule,
    LayoutModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
