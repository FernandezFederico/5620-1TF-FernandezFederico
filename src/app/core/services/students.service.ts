import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/interface';
import {  Observable, delay, of } from 'rxjs';

let STUDENTS_DB: Student[] = [
  {
    id: 1,
    firstName: "test",
    lastName: "test",
    email: "test@example.com",
    address: "Calle test 123",
    phone: "123456789",
    password: "123456",
    role: "student",
  }
];

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents() {
    return of(STUDENTS_DB).pipe(delay(1500));   
  }
  
  studentSubmit(payload: Student) {
    STUDENTS_DB.push(payload)
    return this.getStudents();
  }

  deleteStudent(studentId: number) {
    STUDENTS_DB = STUDENTS_DB.filter ((student) => student.id !== studentId);
    return this.getStudents(); 
  }

  getStudentById(id: number | string): Observable < Student | undefined > {
    
    return of(STUDENTS_DB.find((student) => student.id == id)).pipe(delay(1500));
    
  }
}
