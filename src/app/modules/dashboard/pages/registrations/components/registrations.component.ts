import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { RegistrationsActions } from '../store/registrations.actions';
import { selectLoading, selectRegistrations } from '../store/registrations.selectors';
import { Observable } from 'rxjs';
import { Registrations } from '../interface';
import { LoadingService } from '../../../../../core/services/loading.service';

@Component({
  selector: 'app-registrations',
  templateUrl: './registrations.component.html',
  styleUrl: './registrations.component.scss'
})
export class RegistrationsComponent {
  registrations$: Observable<Registrations[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store, private loadingService: LoadingService) {
    this.registrations$ = this.store.select(selectRegistrations);
    this.isLoading$ = this.store.select(selectLoading);
    this.store.dispatch(RegistrationsActions.loadRegistrations());

  }

}