import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthApiService } from 'auth-api';
import { Router, RouterLink } from '@angular/router';
import { Message } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    MessagesModule,
    RouterLink,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  // Messages to display for errors or notifications
  messages: Message[] = [];

  // Password visibility toggle
  showPassword: boolean = false;

  // Form initialization with validation
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
      ),
    ]),
  });

  constructor(private _AuthApiService: AuthApiService, private _Router: Router) {}

  /**
   * Handle form submission
   */
  Login(): void {
    if (this.loginForm.valid) {
      // Call the login API with form values
      this._AuthApiService.login(this.loginForm.value).subscribe({
        next: (res) => {
          console.log('Login successful:', res);
       
          // Navigate to the desired route after successful login
           localStorage.setItem('userToken', res.token)
          this._Router.navigate(['/layout/dash-bourd']);
        },
        error: (err) => {
          console.error('Login failed:', err);
          // Display error message
          this.messages = [
            {
              severity: 'error',
              summary: 'Login Failed',
              detail:
                'Invalid credentials. Ensure your email is valid and password meets requirements.',
            },
          ];
        },
      });
    }
  }

  /**
   * Toggle the visibility of the password field
   */
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
