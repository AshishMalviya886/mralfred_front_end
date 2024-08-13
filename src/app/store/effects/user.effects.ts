import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DashboardService } from 'src/app/dashboard/service/dashboard.service';
import { CreatePost, CreatePostFailure, CreatePostSuccess, DeletePost, DeletePostFailure, DeletePostSuccess, GetPost, GetPostById, GetPostByIdFailure, GetPostByIdSuccess, GetPostFailure, GetPostSuccess, UpdatePostById } from '../actions/user.action';
import { catchError, map, of, switchMap } from 'rxjs';
import { Store } from '@ngrx/store';
import { ToastService } from 'src/app/shared/service/toaster.service';
import { LoaderService } from 'src/app/shared/service/loader.service';

@Injectable()
export class CustomerEffects {

  constructor(private actions$: Actions,private store: Store,
    private dashboardService: DashboardService,
    private loader:LoaderService,private toaster: ToastService
  ) { }

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CreatePost),
      switchMap(({title,description}) =>{
        this.loader.show();
        return this.dashboardService.createPost({title:title, description:description}).pipe(
          map((response) => {
            this.loader.hide();
            this.toaster.showSuccess("Post added successfully");
            return CreatePostSuccess(response.data);
          }),
          catchError((error) => {
            this.loader.hide();
            return of(CreatePostFailure(error));
          })
        )}
      )
    )
  );

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPost),
      switchMap(({pageNumber}) =>{
        this.loader.show();
        return this.dashboardService.getPost(pageNumber).pipe(
          map((response) => {
            this.loader.hide();
            return GetPostSuccess({
              post: response.data,
              meta: response.meta
            });
          }),
          catchError((error) => {
            this.loader.hide();
            return of(GetPostFailure(error));
          })
        )}
      )
    )
  );

  getPostbyId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetPostById),
      switchMap(({id}) =>{
        this.loader.show();
        return this.dashboardService.getPostById(id).pipe(
          map((response) => {
            this.loader.hide();
            return GetPostByIdSuccess({postbyId:response.data});
          }),
          catchError((error) => {
            this.loader.hide();
            return of(GetPostByIdFailure(error));
          })
        )}
      )
    )
  );

  updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdatePostById),
      switchMap(({id,title,description}) =>{
        this.loader.show();
        return this.dashboardService.updatePost(id,{title:title, description:description}).pipe(
          map((response) => {
            this.loader.hide();
            this.toaster.showSuccess("Post updated successfully");
            return CreatePostSuccess(response.data);
          }),
          catchError((error) => {
            this.loader.hide();
            return of(CreatePostFailure(error));
          })
        )}
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DeletePost),
      switchMap(({id}) =>{
        this.loader.show();
        return this.dashboardService.deletePost(id).pipe(
          map((response) => {
            this.store.dispatch(GetPost({pageNumber:1}));
            this.loader.hide();
            this.toaster.showSuccess("Post deleted successfully");
            return DeletePostSuccess();
          }),
          catchError((error) => {
            this.loader.hide();
            return of(DeletePostFailure(error));
          })
        )}
      )
    )
  );
}
