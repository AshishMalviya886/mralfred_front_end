import { createAction, props } from '@ngrx/store';

export const customerlogin = createAction(
  '[Customer] customerLogin',
  props<{ email: string; password: string }>()
);

export const customerloginSuccess = createAction('[Customer] customerLogin Success');
export const customerloginFailure = createAction('[Customer] customerLogin Failure', props<{ error: any }>());

export const customerlogout = createAction('[Customer] customerLogout');
export const customerlogoutSuccess = createAction('[Customer] customerLogout Success');
export const customerlogoutFailure = createAction('[Customer] customerLogout Failure', props<{ error: any }>());
