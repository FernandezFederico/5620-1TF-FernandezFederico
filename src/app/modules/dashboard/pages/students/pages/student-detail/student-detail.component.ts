import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, } from '@angular/router';
import { StudentsService } from '../../../../../../core/services/students.service';
import { RegistrationsService } from '../../../../../../core/services/registrations.service';
import { LoadingService } from '../../../../../../core/services/loading.service';

import { Registration } from '../../../registrations/interface';
import { Student } from '../../interface';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss'
})
export class StudentDetailComponent implements OnInit {

  studentById: Student | undefined;
  registrationsById: Registration[] = [];

  displayedStudentsColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone'];
  displayedCoursesColumns: string[] = ['id', 'courseName', 'startDate', 'endDate', 'profesor'];

  constructor(
    private route: ActivatedRoute,
    private studentsService: StudentsService,
    private registrationsService: RegistrationsService,
    private loadingService: LoadingService,

  ) { }

  ngOnInit(): void { 
    this.loadingService.setLoading(true);
    this.studentsService.getStudentById(this.route.snapshot.params['id']).subscribe({
      next: (foundStudent) =>{
        this.studentById = foundStudent;
      },
      complete: () => {
        this.loadingService.setLoading(false);
      } 

    });

    this.registrationsService.getRegistrationsByStudentId(this.route.snapshot.params['id']).subscribe({
      next: (foundedRegistration) => {
        this.registrationsById = foundedRegistration;
      },
      complete: () => {
        this.loadingService.setLoading(false);
      }
    })


  }

}
