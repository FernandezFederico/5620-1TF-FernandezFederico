import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CreateRegistrationsData, Registration } from '../interface';
import { Student } from '../../students/interface';
import { Course } from '../../courses/interface';

export const RegistrationsActions = createActionGroup({
  source: 'Registrations',
  events: {
    'Load Registrations': emptyProps(),
    'Load Registrations Success': props<{ data: Registration[] }>(),
    'Load Registrations Failure': props<{ error: unknown }>(),

    'Load Students': emptyProps(),
    'Load Students Success': props<{ data: Student[] }>(),
    'Load Students Failure': props<{ error: unknown }>(),

    'Load Courses': emptyProps(),
    'Load Courses Success': props<{ data: Course[] }>(),
    'Load Courses Failure': props<{ error: unknown }>(),

    'Create Registration': props<{ data: CreateRegistrationsData}>(),
    'Create Registration Success': props<{ data: Registration }>(),
    'Create Registration Failure': props<{ error: unknown }>(),
  }
});
