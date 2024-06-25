import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../../serivces/authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';  // Corrección aquí

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordsDontMatch: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator() });

  constructor(private authService: AuthenticationService, private toast: HotToastService, private router: Router) {}  // Corrección aquí

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    if (!this.signUpForm.valid) return;

    const {name, email, password} = this.signUpForm.value;

    this.authService.signUp(name!, email!,password!).pipe(
      this.toast.observe({
        success: 'Congrats! You are all signed up',
        loading: 'Signing in',
        error: ({ message }) => `${message}`
      })  
    ).subscribe(() => {
      this.router.navigate(['/home']);
    })
  }
}
