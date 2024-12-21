import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthApiService } from 'auth-api';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { QuizesComponent } from "../quizes/quizes.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ButtonModule, NgIf, RouterLink, RouterLinkActive, DialogModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  currentRoute: string = '';
  isMobileView: boolean = false;
  isSidebarVisible: boolean = false;
  visible: boolean = false;


  constructor(
    private router: Router,
    private _AuthApiService: AuthApiService){}
  

    showLogoutDialog(){

      this.visible=true



    }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.isMobileView = window.innerWidth <= 768;
    }
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  logout() {
    // Call the logout service method and automatically include the token via interceptor
    this._AuthApiService.Logout().subscribe({
      next: (res) => {
        console.log('User logged out successfully', res);
        localStorage.removeItem('userToken'); // Remove the token from localStorage
        this.router.navigate(['welcome/login']); // Navigate to the login page
      },
      error: (err) => {
        console.log(err);
        // Handle the error if needed
      },
    });
  }


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (typeof window !== 'undefined') {
      this.isMobileView = window.innerWidth <= 768;
      if (!this.isMobileView) this.isSidebarVisible = false;
    }
  }


}
