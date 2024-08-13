import { createReducer, on } from '@ngrx/store';
import { Posts } from 'src/app/shared/constants/post';
import { CreatePostSuccess, GetPostByIdSuccess, GetPostSuccess } from '../actions/user.action';
import { PaginationMeta } from 'src/app/shared/constants/meta';

export interface UserState {
  posts: Posts[] | null,
  createdPost: Posts | null,
  postbyId: Posts | null,
  meta: PaginationMeta | null
}

export const initialState: any = {
  posts: [],
  createdPost: null,
  postbyId: null,
  meta: null
};

export const userReducer = createReducer(
  initialState,
  on(CreatePostSuccess, (state, action)=>{
    return{
      ...state,
      createdPost: action.post
    }
  }),
  on(GetPostSuccess, (state, action) => {
    return {
      ...state,
      posts: action.post,
      meta: action.meta
    }
  }),
  on(GetPostByIdSuccess, (state, action) => {
    return {
      ...state,
      postbyId: action.postbyId
    }
  })
);

