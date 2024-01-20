import { Component } from '@angular/core';
import { Student } from '../interface';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone', 'password', 'role'];
  dataSource: Student[] = [
    {
      id: 1,
      firstName: 'Mark',
      lastName: 'Otto',
      email: '@mdo',
      address: 'mdo',
      phone: '3513123123',
      password: '1234',
      role: 'ADMIN',
    },
    {
      id: 2,
      firstName: 'Cart',
      lastName: 'Stark',
      email: '@mdo',
      address: 'mdo',
      phone: '3513321321',
      password: '4321',
      role: 'USER',
    }
  ];
}
