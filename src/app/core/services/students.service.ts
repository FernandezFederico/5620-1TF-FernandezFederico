import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/interface';
import { Observable, catchError, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AlertsService } from './alerts.service';
import { Registration } from '../../modules/dashboard/pages/registrations/interface';

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

  updateStudentById(studentId: string | number, data: Student) {
    return this.httpClient.put<Student[]>(`${environment.apiURL}/students/${studentId}`, data).pipe(mergeMap(() => this.getStudents()));
  }

  deleteStudent(studentId: string | number) {
    return this.httpClient.delete<Student>(`${environment.apiURL}/students/${studentId}`).pipe(mergeMap(() => this.getStudents()));
  }

  getStudentById(studentId: string | number): Observable<Student | undefined> {
    return this.httpClient.get<Student>(`${environment.apiURL}/students/${studentId}`);
  }

getStudentRegistrations(studentId: string) {
    return this.httpClient.get<Registration[]>(`${environment.apiURL}/registrations?studentId=${studentId}&_expand=course`)
}

  getAllStudents(){
    return this.httpClient.get<Student[]>(`${environment.apiURL}/students?role=STUDENT`);
  }
}
