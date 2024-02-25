import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Registrations } from '../../modules/dashboard/pages/registrations/interface';
import { mergeMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationsService {

  constructor(private httpClient: HttpClient) { }

  getRegistrations() {
    return this.httpClient.get<Registrations[]>(`${environment.apiURL}/registrations?_embed=student&_embed=course`);
  }

  deleteRegistration(registrationId: string) {
    return this.httpClient.delete<Registrations>(`${environment.apiURL}/registrations/${registrationId}`).pipe(mergeMap(() => this.getRegistrations()));
  }


}
