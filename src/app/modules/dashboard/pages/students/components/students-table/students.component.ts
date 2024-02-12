import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { StudentsService } from '../../../../../../core/services/students.service';
import { AlertsService } from '../../../../../../core/services/alerts.service';
import { Student } from '../../interface/index';
import { MatDialog } from '@angular/material/dialog';
import { StudentsModalComponent } from '../students-modal/students-modal.component';
import { HttpErrorResponse } from '@angular/common/http';
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
  ) { }

  ngOnInit(): void {
    this.loadingService.setLoading(true)
    this.studentsService.getStudents().subscribe({
      next: (students) => {

        this.dataSource = students
      },
      complete: () => {
        this.loadingService.setLoading(false)
      }
    })
  }
  displayedColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone', 'password', 'role', 'actions'];
  dataSource: Student[] = [];

  onStudentSubmit(ev: Student): void {
    this.loadingService.setLoading(true);
    this.studentsService.studentSubmit(ev).subscribe({
      next: (student) => {
        this.dataSource = [...student];
      },
      complete: () => {
        this.alertsService.showSuccessAlert("Estudiante creado", "Estudiante creado exitosamente");
        this.loadingService.setLoading(false);
      }
    });


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



  }

  OnEditStudent(student: Student): void {

  }

  OnShowStudent(student: Student): void {

  }

  //método para abrir el modal de modificar el estudiante
  openModal(id: number): void {
    const dialogRef = this.dialog.open(StudentsModalComponent, {
      disableClose: true,
      data: { id: id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: cerrado`);
    });


  }

}
