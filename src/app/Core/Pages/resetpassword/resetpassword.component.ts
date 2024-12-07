import { Component } from '@angular/core';
import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router,  Routes } from '@angular/router';
import { AuthApiService } from 'auth-api';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
  ], 
   templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.scss'
})
export class ResetpasswordComponent {
     
    showPassword: boolean = false;
    Set_passForm: FormGroup = new FormGroup({
      email: new FormControl(null, [Validators.required,Validators.email]),
      newPassword: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)]),
    });
  constructor(private _AuthApiService: AuthApiService,private _Router:Router) {}
                 
  Set_pass() {
    if (this.Set_passForm.valid) {
      this._AuthApiService.ResetPass(this.Set_passForm.value).subscribe({
        next: (res) => {
          // Handle successful response
          console.log('Password reset successful:', res);
          // Optionally navigate to another page, e.g., login
          this._Router.navigate(['/login']);
        },
        error: (err) => {
          // Handle error response
          console.error('Password reset failed:', err);
        
        },
      });
    }
  }
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  
}







