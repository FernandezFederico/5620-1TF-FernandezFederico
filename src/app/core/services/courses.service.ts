import { Injectable } from '@angular/core';
import { Course } from '../../modules/dashboard/pages/courses/interface';
import { Observable, delay, of } from 'rxjs';


let COURSES_DB: Course[] = [
  {
    id: 1,
    courseName: "Curso Test",
    startDate: new Date(),
    endDate: new Date(),
    profesor: "Test Test",
    group: "testGroup"

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

  createCourse(data: Course){
    COURSES_DB = [...COURSES_DB, {...data, id: COURSES_DB.length + 1 }]; 
    return this.getCourses();
  }

  updateCourseById(id: number, datar: Course){
    COURSES_DB = COURSES_DB.map((el) => el.id === id ? {...el, ...datar} : el);
    return this.getCourses();
  }

  deleteCourse(courseId: number) {
    COURSES_DB = COURSES_DB.filter ((course) => course.id !== courseId);
    return this.getCourses();
  }

  getCourseById(id: number | string): Observable < Course | undefined > {

    return of(COURSES_DB.find((course) => course.id == id)).pipe(delay(1500));

  }
}

