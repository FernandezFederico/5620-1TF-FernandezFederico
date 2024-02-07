import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from '../../../../../../core/services/courses.service';
import { LoadingService } from '../../../../../../core/services/loading.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})
export class CourseDetailComponent {

  constructor(
    private route: ActivatedRoute,
    private coursesService: CoursesService,
    private loadingService: LoadingService,
  ) {
    this.loadingService.setLoading(true);
    this.coursesService.getCourseById(this.route.snapshot.params['id']).subscribe({
      next: (finedCourse) => {
        console.log(finedCourse);
      },
      complete: () => {
        this.loadingService.setLoading(false);
      }
    });
  }
}
