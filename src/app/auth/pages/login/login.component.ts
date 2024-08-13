import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { customerlogin } from 'src/app/store/actions/user-auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  passwordHidden:boolean = true;

  constructor(private fb:FormBuilder,private router:Router,private store:Store){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    this.isSubmitted = true;
    if(this.loginForm.valid){
      const { email, password } = this.loginForm.value;
      this.store.dispatch(customerlogin({email:email,password:password}))
    }
  }
}
