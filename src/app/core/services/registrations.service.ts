import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Registration, CreateRegistrationsData } from '../../modules/dashboard/pages/registrations/interface';
import { finalize, mergeMap } from 'rxjs';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {

  constructor(private httpClient: HttpClient, private LoadingService: LoadingService) { }

  getRegistrations() {
    this.LoadingService.setLoading(true);
    return this.httpClient.get<Registration[]>(`${environment.apiURL}/registrations?_embed=student&_embed=course`).pipe(
      finalize(() => {
        this.LoadingService.setLoading(false);
      })
    );
  }

  createRegistrations(data: CreateRegistrationsData) {
    return this.httpClient.post<Registration>(`${environment.apiURL}/registrations`, data);
  }

  deleteRegistration(registrationId: string) {
    return this.httpClient.delete<Registration>(`${environment.apiURL}/registrations/${registrationId}`).pipe(mergeMap(() => this.getRegistrations()));
  }


}
