import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _router: Router) { }
  canActivate() {
    if (localStorage.getItem('userToken')) {
      this._router.navigate(["/dashboard"])
      return false;
    }
    else {
      return true;
    }
  }

}
