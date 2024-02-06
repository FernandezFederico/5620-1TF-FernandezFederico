import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students-table/students.component';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { ShearedModule } from '../../../sheared/sheared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsModalComponent,
    StudentDetailComponent,
    
  ],
  imports: [
    CommonModule,
    ShearedModule,
    RouterModule,
  ],
  exports: [

  ]
})
export class StudentsModule { }
