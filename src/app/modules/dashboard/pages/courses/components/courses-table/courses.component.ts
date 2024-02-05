import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { Course } from '../../interface/index';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  constructor(
    private loadingService: LoadingService,
    private coursesService: CoursesService,
  ) { }

  ngOnInit(): void {
    this.loadingService.setLoading(true)
    this.coursesService.getCourses().subscribe({
      next: (courses) => {
        this.dataSource = courses
      },
      complete: () => {
        this.loadingService.setLoading(false)
      }
    })
    
  }

  displayedColumns: string[] = ['id', 'courseName', 'startDate' , 'endDate' , 'profesor' , 'actions'];
  dataSource: Course[] = [];


  onDeleteCourse(ev: Course): void {
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
        this.coursesService.deleteCourse(ev.id).subscribe({
          next: (course) => {
            this.dataSource = [...course]
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

}
