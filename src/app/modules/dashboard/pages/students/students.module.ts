import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students-table/students.component';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { SharedModule } from '../../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { StudentsRoutingModule } from './students-routing.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsModalComponent,
    StudentDetailComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    StudentsRoutingModule,
  ],
  exports: [

  ]
})
export class StudentsModule { }
