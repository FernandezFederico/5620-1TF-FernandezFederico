import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { StudentsService } from '../../../../../../core/services/students.service';
import { AlertsService } from '../../../../../../core/services/alerts.service';
import { Student } from '../../interface/index';
import { MatDialog } from '@angular/material/dialog';
import { StudentsModalComponent } from '../students-modal/students-modal.component';
import { AuthService } from '../../../../../../core/services/auth.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private loadingService: LoadingService,
    private alertsService: AlertsService,
    private studentsService: StudentsService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.loadingService.setLoading(true)
    this.loadStudents();
    
  }
  displayedColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone', 'password', 'role', 'actions'];
  dataSource: Student[] = [];

  loadStudents(): void {
    if (this.authService.authUser?.role === 'ADMIN') {
      this.studentsService.getStudents().subscribe({
        next: (students) => {
          this.dataSource = students;
        },
        complete: () => {
          this.loadingService.setLoading(false)
        }
      })
      
    }else {
      this.studentsService.getAllStudents().subscribe({
        next: (students) => {
          this.dataSource = students;
        },
        complete: () => {
          this.loadingService.setLoading(false)
        }
      })
    }
  }

  onStudentSubmit(): void {
    this.dialog.open(StudentsModalComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.loadingService.setLoading(true)
          this.studentsService.studentSubmit(result).subscribe({
            next: (courses) => (this.dataSource = courses),
            complete: () => {
              this.alertsService.showSuccessAlert("Curso creado", "Curso creado exitosamente");
              this.loadingService.setLoading(false);
            }
          })
        }
      }

    });
  }

  onEditStudent(student: Student): void {
    this.dialog.open(StudentsModalComponent, {
      data: student,
    }).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.loadingService.setLoading(true)
          this.studentsService.updateStudentById(student.id, result).subscribe({
            next: (courses) => (this.dataSource = courses),
            complete: () => {
              this.loadingService.setLoading(false);
            }
          })
        }
      }
    })
  }

  onDeleteStudent(ev: Student): void {
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
        this.loadingService.setLoading(true)
        this.studentsService.deleteStudent(ev.id).subscribe({
          next: (student) => {
            this.dataSource = [...student]
          },
          complete: () => {
            this.loadingService.setLoading(false)
            Swal.fire({
              title: "BORRADO!",
              text: "Usuario borrado",
              icon: "success"
            });
          }
        });

      }
    });
  };



}
