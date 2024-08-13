import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from 'src/app/auth/service/auth.service';
import { customerlogin, customerloginFailure, customerloginSuccess, customerlogout, customerlogoutSuccess } from '../actions/user-auth.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class CustomerAuthEffects {
  constructor(private actions$: Actions,
    private router: Router,
    private authService: AuthService,
  ) { }

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerlogin),
      mergeMap(({ email, password }) =>
        this.authService.login({ email, password }).pipe(
          tap((response) => {
            localStorage.setItem('userToken', response.data.access_token);
          }),
          map(() => {
            this.router.navigate(['/dashboard']);
            return customerloginSuccess();
          }),
          catchError((error) => of(customerloginFailure({ error })))
        )
      )
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(customerlogout),
        tap(() => {
          localStorage.removeItem('userToken');
        }),
        map(() => customerlogoutSuccess()),
        tap(() => { this.router.navigate(['/login']) }),
      ),
    { dispatch: true }
  );
}
