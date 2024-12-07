
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthApiService } from 'auth-api';
import { Router,} from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetPassComponent {
  showPassword: boolean = false;
  ForgetPassForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
  });

  constructor(private _AuthApiService: AuthApiService ,private _Router:Router) {}

  ForgetPass() {
    if (this.ForgetPassForm.valid) {
      this._AuthApiService.ForgetPass(this.ForgetPassForm.value).subscribe({
        next: (res) => {
          // Handle successful response
          console.log('Password reset initiated:', res);
  
          // Navigate to the verification code page
          this._Router.navigate(['/verify-code']);
        },
        error: (err) => {
          // Handle error response
          console.error('Error during password reset:', err);
  
          // Show an error message to the user
          alert('An error occurred while requesting a password reset. Please try again.');
        }
      });
    }

}
    
togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

}
