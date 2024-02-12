import { Injectable } from '@angular/core';
import { Student } from '../../modules/dashboard/pages/students/interface';
import { Router } from '@angular/router';
import { AlertsService } from './alerts.service';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { Observable, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from './loading.service';
interface loginData {
  email: null | string;
  password: null | string;
}

const MOCK_USER = {
  id: 1,
  firstName: "test",
  lastName: "test",
  email: "test@test.com",
  address: "Calle test 123",
  phone: "123456789",
  password: "123456",
  role: "ADMIN",
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  authUser: Student | null = null;
  LoadingService: any;
  constructor(
    private router: Router,
    private alertsService: AlertsService,
    private loadingService: LoadingService
  ) { };


  private setAuthUSer(mock_user: Student): void {
    this.authUser = mock_user;
    localStorage.setItem(
      'token',
      '132321jug3215kjh33lkj13543hjg21335135'
    )
  }

  login(data: loginData): void {

    if (data.email === MOCK_USER.email && data.password === MOCK_USER.password) {
      this.setAuthUSer(MOCK_USER);
      this.router.navigate(['dashboard', 'home']);
    } else {
      this.alertsService.showErrorAlert("Error", "Usuario o contraseña invalida");
    }

  }

  Logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token')
  }
  verifyToken() {
    this.loadingService.setLoading(true);
    return of(localStorage.getItem('token')).pipe(
      delay(1500),
      map((response) => !!response),
      tap(() => {
        this.setAuthUSer(MOCK_USER);
      }),
      finalize(() => this.loadingService.setLoading(false))
    );
  }

}
