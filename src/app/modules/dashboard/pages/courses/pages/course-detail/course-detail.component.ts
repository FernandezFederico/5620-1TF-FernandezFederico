import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { RegistrationsService } from '../../../../../../core/services/registrations.service';
import { LoadingService } from '../../../../../../core/services/loading.service';

import { Registration } from '../../../registrations/interface';
import { Course } from '../../interface';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent implements OnInit {

  courseById: Course | undefined;
  registrationsById: Registration[] = [];

  displayedCoursesColumns: string[] = ['id', 'courseName', 'startDate', 'endDate', 'profesor'];
  displayedStudentsColumns: string[] = ['id', 'fullName', 'email', 'address', 'phone'];
  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private registrationsService: RegistrationsService,
    private loadingService: LoadingService,

  ) { }

  ngOnInit(): void {
    this.loadingService.setLoading(true);
    this.coursesService.getCourseById(this.route.snapshot.params['id']).subscribe({
      next: (finedCourse) => {
        this.courseById = finedCourse;
      },
      complete: () => {
        this.loadingService.setLoading(false);
      }
    });

    this.registrationsService.getRegistrationsByCourseId(this.route.snapshot.params['id']).subscribe({
      next: (foundedRegistration) => {
        this.registrationsById = foundedRegistration;
      },
      complete: () => {
        this.loadingService.setLoading(false);
      }
    })
  }
}
