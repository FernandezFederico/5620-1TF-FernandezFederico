import { Component } from '@angular/core';
import { Student } from '../../interface';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent {
  
  displayedColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone', 'password', 'role', 'actions'];
  dataSource: Student[] = [
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

  onStudentSubmit(ev: Student): void {
    this.dataSource = [...this.dataSource, {...ev, id: this.dataSource.length + 1}];
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Usuario registrado",
      showConfirmButton: false,
      timer: 1500
    });
    
  }

  deleteStudent(student: Student): void {
    Swal.fire({
      title: "Quieres ELIMINAR el usuario?",
      text: "No podrás revertir los cambios!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar el usuario",
    }).then((result) => {
      if (result.isConfirmed) {
        this.dataSource = this.dataSource.filter(s => s.id !== student.id);
        Swal.fire({
          title: "BORRADO!",
          text: "Usuario borrado",
          icon: "success"
        });
      }
    });
    
    
  }

  editStudent(student: Student): void {
    
  }

  showStudent(student: Student): void {
    
  }

  modalVisible: boolean = false;
  
  //método para abrir el modal
  abrirModal() {
    this.modalVisible = true;
  }
 
}
