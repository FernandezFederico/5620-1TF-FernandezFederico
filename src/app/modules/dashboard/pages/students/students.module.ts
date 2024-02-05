import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students-table/students.component';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';
import { StudentsFormComponent } from './components/students-form/students-form.component';
import { StudentDetailComponent } from './pages/student-detail/student-detail.component';
import { ShearedModule } from '../../../sheared/sheared.module';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import {MatDialogModule} from '@angular/material/dialog';





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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    ShearedModule,
    MatDialogModule,
    RouterModule,
  ],
  exports: [
    StudentsComponent,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    StudentDetailComponent,
  ]
})
export class StudentsModule { }
