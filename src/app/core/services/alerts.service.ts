import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  private notification$ = new Subject<SweetAlertOptions>();

  constructor() {
    this.notification$.subscribe({
      next: (options) => {
        Swal.fire(options);
      }
    })
  }

  showAlert(options: SweetAlertOptions) {
    this.notification$.next(options);
  }

  showSuccessAlert(tittle: string, message: string) {
    this.notification$.next({
      icon: 'success',
      title: tittle,
      text: message,
    })
  }

  showErrorAlert(tittle: string, message: string) {
    this.notification$.next({
      icon: 'error',
      title: tittle,
      text: message,
    })
  }
}
