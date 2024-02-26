import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegistrations from './registrations.reducer';
import { state } from '@angular/animations';

export const selectRegistrationsState = createFeatureSelector<fromRegistrations.State>(
  fromRegistrations.registrationsFeatureKey
);

export const selectRegistrations = createSelector(selectRegistrationsState, (state) => state.registrations);
export const selectLoading = createSelector(selectRegistrationsState, (state) => state.loading);
export const selectStudents = createSelector(selectRegistrationsState, (state) => state.students);
export const selectCourses = createSelector(selectRegistrationsState, (state) => state.courses);