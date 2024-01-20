import { Component } from '@angular/core';
import { Student } from '../interface';




@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone', 'password', 'role', 'actions'];
  dataSource: Student[] = [
  ];

  onStudentSubmit(ev: Student): void {
    this.dataSource = [...this.dataSource, {...ev, id: this.dataSource.length + 1}];
  }

  deleteStudent(student: Student): void {
    this.dataSource = this.dataSource.filter(s => s.id !== student.id);
  }
 
}
