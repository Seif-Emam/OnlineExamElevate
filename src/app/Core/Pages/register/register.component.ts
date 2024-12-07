import { RippleModule } from 'primeng/ripple';
import { CommonModule } from '@angular/common';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { AuthApiService } from 'auth-api';
import { Router, RouterLink } from '@angular/router';
import { error } from 'node:console';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,RouterLink
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  showPassword: boolean = false;
  registerForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z]{4,25}$/)]),
    firstName: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    lastName: new FormControl(null, [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    password: new FormControl(null, [Validators.required,Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/),
    ]),
    rePassword: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
  },{validators:this.CheckRepasswordMatch});

  constructor(private _AuthApiService: AuthApiService , private _Router:Router) {}

  Register() {
    if (this.registerForm.valid) {
      this._AuthApiService.register(this.registerForm.value).subscribe({
        next:(res) => {
          console.log('res', res);
          this._Router.navigate(['/login']);
        },
        error: (err) => {
          // Handle error response
          console.log('SignIn failed:', err);
  
          // Display an error message to the user
          alert('SignIn failed. Please check your credentials and try again.');
        }
    });
    }
  }
  // }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  CheckRepasswordMatch(P:AbstractControl){

      if(P.get('password')?.value === P.get('rePassword')?.value){
        return null

      }else{
        P.get('rePassword')?.setErrors({mismatch:true});
          return{mismatch:true}

      }


  }
}