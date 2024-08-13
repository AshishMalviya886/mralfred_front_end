import { createReducer, on } from '@ngrx/store';
import { customerlogin, customerloginFailure, customerloginSuccess } from '../actions/user-auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  error: any;
}

export const initialState: any = {
  isLoggedIn: false,
  error: null,
};

export const userAuthReducer = createReducer(
  initialState,
  on(customerlogin, state => ({ ...state })),
  on(customerloginSuccess, state => ({ ...state, isLoggedIn: true, error: null })),
  on(customerloginFailure, (state, { error }) => ({ ...state, error })),
);

