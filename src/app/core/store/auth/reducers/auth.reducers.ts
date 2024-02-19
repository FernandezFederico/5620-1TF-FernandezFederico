import { createReducer, on } from '@ngrx/store';
import { Student } from '../../../../modules/dashboard/pages/students/interface/index';
import { AuthActions } from '../actions/auth.actions';

export const featureName = "authReducer";

export interface AuthState {
  student: Student | null;
}

const initialState: AuthState = {
  student: null,
}
export const authReducer = createReducer(initialState, on(AuthActions.setAuthStudent, (state, action) => {
  return {
    ...state,
    student: action.student,
  }
}),
  on(AuthActions.logOut, () => initialState)
);