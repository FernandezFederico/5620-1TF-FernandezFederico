import { Injectable, Pipe } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { RegistrationsActions } from './registrations.actions';
import { RegistrationsService } from '../../../../../core/services/registrations.service';
import { StudentsService } from '../../../../../core/services/students.service';
import { CoursesService } from '../../../../../core/services/courses.service';


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

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(ofType(RegistrationsActions.loadStudents),
      concatMap(() => this.studentsService.getAllStudents().pipe(
        map(resp => RegistrationsActions.loadStudentsSuccess({ data: resp })),
        catchError(error => of(RegistrationsActions.loadStudentsFailure({ error })))
      )
      ));
  });
  loadCourses$ = createEffect(() => {
    return this.actions$.pipe(ofType(RegistrationsActions.loadCourses),
      concatMap(() => this.courseService.getCourses().pipe(
        map(resp => RegistrationsActions.loadCoursesSuccess({ data: resp })),
        catchError(error => of(RegistrationsActions.loadCoursesFailure({ error })))
      )
      ));
  });
  createRegistration$ = createEffect(() => {
    return this.actions$.pipe(ofType(RegistrationsActions.createRegistration),
      concatMap((action) => this.registrationsService.createRegistrations(action.data).pipe(
        map(resp => RegistrationsActions.createRegistrationSuccess({ data: resp })),
        catchError(error => of(RegistrationsActions.createRegistrationFailure({ error })))
      )))
  });

  createRegistrationSuccess$ = createEffect(() => {
    return this.actions$.pipe(ofType(RegistrationsActions.createRegistrationSuccess),
    map(() => RegistrationsActions.loadRegistrations()
    ))

  });


  constructor(
    private actions$: Actions,
    private registrationsService: RegistrationsService,
    private studentsService: StudentsService,
    private courseService: CoursesService,
  ) { }
}


