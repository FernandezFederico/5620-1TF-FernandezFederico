import { createFeature, createReducer, on } from '@ngrx/store';
import { RegistrationsActions } from './registrations.actions';
import { Registration } from '../interface';
import { Student } from '../../students/interface';
import { Course } from '../../courses/interface';

export const registrationsFeatureKey = 'registrations';

export interface State {
  registrations: Registration[];
  students: Student[];
  courses: Course[];
  loading: boolean;
  loadingStudents: boolean;
  loadingCourses: boolean;
  error: unknown;

}

export const initialState: State = {
  registrations: [],
  students: [],
  courses: [],
  loading: false,
  loadingStudents: false,
  loadingCourses: false,
  error: null,

};

export const reducer = createReducer(
  initialState,
  on(RegistrationsActions.loadRegistrations, state => ({...state, loading: true})),
  on(RegistrationsActions.loadRegistrationsSuccess, (state, action) => ({...state, loading:false, registrations: action.data})),
  on(RegistrationsActions.loadRegistrationsFailure, (state, action) => ({...state, loading: false, error: action.error})),

  on(RegistrationsActions.loadStudents, (state) => { return {...state, loadingStudents: true}}),
  on(RegistrationsActions.loadStudentsSuccess, (state, action) => { return {...state, loadingStudents: false, students: action.data}}),
  on(RegistrationsActions.loadStudentsFailure, (state, action) => { return {...state, loadingStudents: false, error: action.error}}),

  on(RegistrationsActions.loadCourses, (state) => { return {...state, loadingCourses: true}}),
  on(RegistrationsActions.loadCoursesSuccess, (state, action) => { return {...state, loadingStudents: false, courses: action.data}}),
  on(RegistrationsActions.loadCoursesFailure, (state, action) => { return {...state, loadingStudents: false, error: action.error}}),
);

export const registrationsFeature = createFeature({
  name: registrationsFeatureKey,
  reducer,
});

