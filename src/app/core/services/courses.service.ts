import { Injectable } from '@angular/core';
import { Course } from '../../modules/dashboard/pages/courses/interface';
import { Observable, catchError, delay, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AlertsService } from './alerts.service';


@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient: HttpClient, private alertsService: AlertsService) { }

  getCourses() {
    return this.httpClient.get<Course[]>(`${environment.apiURL}/courses`).pipe(
      catchError((error) => {
        this.alertsService.showErrorAlert('Ups!', 'Error al cargar los Cursos')
        return of([])
      }

      )
    );
  }

  createCourse(data: Course){; 
    return this.httpClient.post<Course>(`${environment.apiURL}/courses`, data).pipe(mergeMap(() => this.getCourses()));
  }

  updateCourseById(courseId: number, data: Course){
    return this.httpClient.put<Course[]>(`${environment.apiURL}/courses/${courseId}`, data).pipe(mergeMap(()=> this.getCourses()));
  }

  deleteCourse(courseId: number) {
    return this.httpClient.delete<Course>(`${environment.apiURL}/courses/${courseId}`).pipe(mergeMap(()=> this.getCourses()));
  }

  getCourseById(courseId: number | string): Observable < Course | undefined > {
    return this.httpClient.get<Course>(`${environment.apiURL}/courses/${courseId}`);
  }
}

