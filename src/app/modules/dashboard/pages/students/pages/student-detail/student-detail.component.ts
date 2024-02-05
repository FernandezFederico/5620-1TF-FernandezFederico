import { Component } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { StudentsService } from '../../../../../../core/services/students.service';
import { LoadingService } from '../../../../../../core/services/loading.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private loadingService: LoadingService,
  ) {
    this.loadingService.setLoading(true);
    this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe({
      next: (finedStudent) =>{
        console.log(finedStudent);
      },
      complete: () => {
        this.loadingService.setLoading(false);
      }
    });
  }
}
