import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/interface';
import { Router } from '@angular/router';
import { AlertsService } from './alerts.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from './loading.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Store } from '@ngrx/store';
import { AuthActions } from '../store/auth/actions/auth.actions';
interface loginData {
  email: null | string;
  password: null | string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService,
    private httpClient: HttpClient,
    private store: Store,
  ) { };

  private setAuthUSer(student: Student): void {
    this.store.dispatch(AuthActions.setAuthStudent({student}))

    localStorage.setItem(
      'token',
      student.token
    )
  }

  login(data: loginData): Observable<Student[]> {
    this.loadingService.setLoading(true)
    return this.httpClient
      .get<Student[]>(
        `${environment.apiURL}/students?email=${data.email}&password=${data.password}`
      ).pipe(
        tap((response) => {
          if (!!response[0]) {
            this.setAuthUSer(response[0])
            this.router.navigate(['dashboard', 'home']);
            this.loadingService.setLoading(false)
          } else {
            this.alertsService.showErrorAlert('Ups!', 'Email o contraseña incorrectos');
            this.loadingService.setLoading(false)
          }
        })
      )

  }

  Logout(): void {
    this.store.dispatch(AuthActions.logOut())
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token')
  }
  verifyToken() {
    return this.httpClient.get<Student[]>(
      `${environment.apiURL}/students?token=${localStorage.getItem('token')}`
    ).pipe(
      map((response) => {
        if (response.length) {
          this.setAuthUSer(response[0])
          return true;
        } else {
          this.store.dispatch(AuthActions.logOut())
          localStorage.removeItem('token');
          return false;
        }
      })
    )

  }

}
