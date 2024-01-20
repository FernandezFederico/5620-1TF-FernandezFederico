import { Component } from '@angular/core';
import { Student } from '../interface';
import Swal from 'sweetalert2';


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
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
    
  }

  deleteStudent(student: Student): void {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataSource = this.dataSource.filter(s => s.id !== student.id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
    
  }
 
}
