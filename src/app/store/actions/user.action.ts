import { createAction, props } from '@ngrx/store';
import { PaginationMeta } from 'src/app/shared/constants/meta';
import { Posts } from 'src/app/shared/constants/post';

export const CreatePost = createAction('[Customer] customerCreatePost', props<{title:string,description:string}>());
export const CreatePostSuccess = createAction('[Customer] customerCreatePost Success', props<{post:Posts}>());
export const CreatePostFailure = createAction('[Customer] customerCreatePost Failure', props<{ error: any }>());


export const GetPost = createAction('[Customer] customerGetPost',props<{pageNumber:number}>());
export const GetPostSuccess = createAction('[Customer] customerGetPost Success', props<{post:Posts[],meta:PaginationMeta}>());
export const GetPostFailure = createAction('[Customer] customerGetPost Failure', props<{ error: any }>());


export const GetPostById = createAction('[Customer] GetPostById',props<{id:string}>());
export const GetPostByIdSuccess = createAction('[Customer] customerGetPostById Success', props<{postbyId:Posts}>());
export const GetPostByIdFailure = createAction('[Customer] customerGetPostById Failure', props<{ error: any }>());

export const UpdatePostById = createAction('[Customer] UpdatePostById',props<{id:string,title:string,description:string}>());
export const UpdatePostByIdSuccess = createAction('[Customer] customerUpdatePostById Success', props<{post:Posts}>());
export const UpdatePostByIdFailure = createAction('[Customer] customerUpdatePostById Failure', props<{ error: any }>());


export const DeletePost = createAction('[Customer] DeletePost',props<{id:string}>());
export const DeletePostSuccess = createAction('[Customer] customerDeletePost Success');
export const DeletePostFailure = createAction('[Customer] customerDeletePost Failure', props<{ error: any }>());
