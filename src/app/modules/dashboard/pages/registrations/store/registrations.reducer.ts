import { createFeature, createReducer, on } from '@ngrx/store';
import { RegistrationsActions } from './registrations.actions';
import { Registrations } from '../interface';

export const registrationsFeatureKey = 'registrations';

export interface State {
  registrations: Registrations[];
  loading: boolean;
  error: unknown;

}

export const initialState: State = {
  registrations: [],
  loading: false,
  error: null

};

export const reducer = createReducer(
  initialState,
  on(RegistrationsActions.loadRegistrations, state => ({...state, loading: true})),
  on(RegistrationsActions.loadRegistrationsSuccess, (state, action) => ({...state, loading:false, registrations: action.data})),
  on(RegistrationsActions.loadRegistrationsFailure, (state, action) => ({...state, loading: false, error: action.error})),
);

export const registrationsFeature = createFeature({
  name: registrationsFeatureKey,
  reducer,
});

