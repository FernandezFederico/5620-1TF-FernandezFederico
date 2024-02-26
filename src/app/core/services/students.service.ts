import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/interface';
import { Observable, catchError, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AlertsService } from './alerts.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient, private alertsService: AlertsService) { }

    generateRandomString(length:number){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  getStudents() {
    return this.httpClient.get<Student[]>(`${environment.apiURL}/students`).pipe(
      catchError((error) => {
        this.alertsService.showErrorAlert('Ups!', 'Error al cargar los Estudiantes');
        return of([]);
      }

      )
    )
  }

  studentSubmit(payload: Student) {
    return this.httpClient.post<Student>(`${environment.apiURL}/students`, {...payload, token: this.generateRandomString(15)}).pipe(mergeMap(() => this.getStudents()));
  }

  deleteStudent(studentId: number) {
    return this.httpClient.delete<Student>(`${environment.apiURL}/students/${studentId}`).pipe(mergeMap(() => this.getStudents()));
  }

  getStudentById(studentId: number | string): Observable<Student | undefined> {
    return this.httpClient.get<Student>(`${environment.apiURL}/students/${studentId}`);
  }

  getAllStudents(){
    return this.httpClient.get<Student[]>(`${environment.apiURL}/students?role=STUDENT`);
  }
}
