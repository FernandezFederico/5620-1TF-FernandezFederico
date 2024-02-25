import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { RegistrationsActions } from './registrations.actions';
import { RegistrationsService } from '../../../../../core/services/registrations.service';


@Injectable()
export class RegistrationsEffects {

  loadRegistrations$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(RegistrationsActions.loadRegistrations),
      concatMap(() =>
        this.registrationsService.getRegistrations().pipe(
          map(data => RegistrationsActions.loadRegistrationsSuccess({ data })),
          catchError(error => of(RegistrationsActions.loadRegistrationsFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions,private registrationsService: RegistrationsService) {}
}
