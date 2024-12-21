import { NavbarComponent } from './Core/Layout/navbar/navbar.component';
import { ForgetPassComponent } from './Core/Pages/forgetpassword/forgetpassword.component';
import { Routes } from '@angular/router';

// Define your routes with lazy-loaded components
export const routes: Routes = [


  {
    path: '',
    redirectTo: 'welcome/login',
    pathMatch: 'prefix',
  },
  {

    path: 'layout',
    loadComponent: () =>
      import('./Core/Layout/layout/layout.component').then(
        (c) => c.LayoutComponent
      ), children: [
        {
          path: 'dash-bourd',
          loadComponent: () =>
            import('./Core/Layout/dash-board/dash-board.component').then(
              (c) => c.DashBoardComponent
            ),

        },
       
        {
          path: 'quiz-history',
          loadComponent: () =>
            import('./Core/Layout/quiz-history/quiz-history.component').then(
              (c) => c.QuizHistoryComponent
            ),
        },

      ]
  },

  {
    path: "welcome", loadComponent: () => import("./Core/Pages/welcome/welcome.component").then(c => c.WelcomeComponent),
    children: [
      {


        path: "login", loadComponent: () => import("./Core/Pages/login/login.component").then(c => c.LoginComponent)
      },
      {
        path: "register", loadComponent: () => import("./Core/Pages/register/register.component").then(c => c.RegisterComponent)
      },
      {
        path: "forgetpassword", loadComponent: () => import("./Core/Pages/forgetpassword/forgetpassword.component").then(c => c.ForgetPassComponent)
      },
      {
        path: "verify-code", loadComponent: () => import("./Core/Pages/verify-code/verify-code.component").then(c => c.VerifyCodeComponent)
      },

      {
        path: "resetpassword", loadComponent: () => import("./Core/Pages/resetpassword/resetpassword.component").then(c => c.ResetpasswordComponent)
      },



    ]
  },

];
