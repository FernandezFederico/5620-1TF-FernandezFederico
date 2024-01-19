import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './components/students-list/students.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    StudentsComponent,
    
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    StudentsComponent
  ]
})
export class StudentsModule { }
