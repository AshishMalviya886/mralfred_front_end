import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
  passwordHidden:boolean = true;

  constructor(private fb:FormBuilder,private router:Router){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  login(){
    this.isSubmitted = true;
    if(this.loginForm.valid){
      const { email, password } = this.loginForm.value;
    }
  }
}
