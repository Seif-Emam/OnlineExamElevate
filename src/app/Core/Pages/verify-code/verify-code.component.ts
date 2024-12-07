import { Component } from '@angular/core';
import { AuthApiService } from 'auth-api';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router,  } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
  ],
  templateUrl: './verify-code.component.html',
  styleUrls: ['./verify-code.component.scss'], // Fixed potential typos
})
export class VerifyCodeComponent {
  showPassword: boolean = false;

  // Initialize the form group with proper validation
  VerifyCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]), // Ensure 'Code' is not empty
  });

  constructor(private _AuthApiService: AuthApiService, private _Router: Router) {}

  // Method to verify the code
  VerifyCode() {
    if (this.VerifyCodeForm.valid) {
      this._AuthApiService.VerifyCode(this.VerifyCodeForm.value).subscribe({
        next: (res) => {
          console.log('Verification successful:', res);
          this._Router.navigate(['/resetpassword']);
        },
        error: (err) => {
          // Log error and display meaningful feedback
          console.error('Verification failed:', err);

          if (err.status === 400) {
            alert('Invalid verification code. Please try again.');
          } else {
            alert('An error occurred during verification. Please try again later.');
          }
        },
      });
    } else {
      alert('Please enter the verification code before submitting.');
    }
  }

  // Toggle password visibility
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
