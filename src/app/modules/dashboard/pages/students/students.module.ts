import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students-table/students.component';
import {MatTableModule} from '@angular/material/table';
import { StudentsFormComponent } from './components/students-form/students-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ShearedModule } from '../../../sheared/sheared.module';
import { StudentsModalComponent } from './components/students-modal/students-modal.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsModalComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    ShearedModule,
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
