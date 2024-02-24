import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Registrations } from '../interface';

export const RegistrationsActions = createActionGroup({
  source: 'Registrations',
  events: {
    'Load Registrations': emptyProps(),
    'Load Registrations Success': props<{ data: Registrations[] }>(),
    'Load Registrations Failure': props<{ error: unknown }>(),
  }
});
