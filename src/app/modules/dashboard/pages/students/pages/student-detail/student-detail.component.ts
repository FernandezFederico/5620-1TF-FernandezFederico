import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { StudentsService } from '../../../../../../core/services/students.service';
import { LoadingService } from '../../../../../../core/services/loading.service';
import { Student } from '../../interface';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {
  student: Student | undefined;
  displayedColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone'];
  dataSource: Student[] = [];

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void { 
    this.loadingService.setLoading(true);
    this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe({
      next: (foundStudent) =>{
        this.student = foundStudent;
        if (this.student) {
          this.dataSource.push(this.student);
        }
      },
      complete: () => {
        this.loadingService.setLoading(false);
      }
    });
  }

}
