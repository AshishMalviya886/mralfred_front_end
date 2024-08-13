import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "../reducers/user-auth.reducers";

export const selectCustomerAuthState = createFeatureSelector<AuthState>('auth');

