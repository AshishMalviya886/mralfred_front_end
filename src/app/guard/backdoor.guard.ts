import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackdoorGuard implements CanActivate {
  constructor(private _router : Router) {}
  canActivate(){
    if(localStorage.getItem('userToken'))
    {
      return true;
    }
    else
    {
      this._router.navigate(["/login"])
      return false;
    }
  }

}
