import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';
import { Course } from '../../modules/dashboard/pages/courses/interface';

let COURSES_DB: Course[] = [
  {
    id: 1,
    courseName: "Curso Test",
    startDate: "10/04/2024",
    endDate: "10/07/2024",
    profesor: "Test Test",

  }
]

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses() {
    return of(COURSES_DB).pipe(delay(1500));
  }

  deleteCourse(courseId: number) {
    COURSES_DB = COURSES_DB.filter ((course) => course.id !== courseId);
    return this.getCourses();
  }
}
