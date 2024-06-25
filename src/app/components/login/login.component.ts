import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { validateHeaderName } from 'http';
import { AuthenticationService } from '../../serivces/authentication.service';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void{}

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  
  submit() {
    if (!this.loginForm.valid){
      return;
    }   

    const{ email, password } = this.loginForm.value;

    if (email && password) {
      this.authService.login(email!, password!).pipe(
        this.toast.observe({
          success:'Logged in successfully',
          loading:'Loggin in...',
          error:'There was an error'
        })
      ).subscribe(() => {
        this.router.navigate(['/home']);
      });
    }
    else {
      // Manejar el caso cuando email o password son null o undefined
      console.error('Email o password son inválidos');
    }

  }
}
