import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../reducers/user.reducers";

export const selectUserState = createFeatureSelector<UserState>('user');

export const getPosts = createSelector(selectUserState,
  (state: UserState) => {
    return state.posts;
  }
)

export const getPostById = createSelector(selectUserState,
  (state: UserState) => {
    return state.postbyId;
  }
)

export const getMetaDetails = createSelector(selectUserState,
  (state: UserState) => {
    return state.meta;
  }
)
