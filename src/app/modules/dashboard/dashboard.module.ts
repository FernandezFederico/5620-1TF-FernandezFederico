import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { StudentsModule } from '../dashboard/pages/students/students.module';
import { LayoutModule } from '../layout/layout.module';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    StudentsModule,
    LayoutModule,
    MatListModule,
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
