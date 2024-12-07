import { ForgetPassComponent } from './Core/Pages/forgetpassword/forgetpassword.component';
import { Routes } from '@angular/router';

// Define your routes with lazy-loaded components
export const routes: Routes = [

  {
    path:'',
    redirectTo: 'welcome/login',
    pathMatch: 'prefix',
  },
  { 
   
  path : "welcome" , loadComponent:()=> import("./Core/Pages/welcome/welcome.component").then (c => c.WelcomeComponent),
  children:[
    {  

  
      path : "login" , loadComponent:()=> import("./Core/Pages/login/login.component").then (c => c.LoginComponent)
    },
    { 
      path : "register" , loadComponent:()=> import("./Core/Pages/register/register.component").then (c => c.RegisterComponent)
    },
    { 
      path : "forgetpassword" , loadComponent:()=> import("./Core/Pages/forgetpassword/forgetpassword.component").then (c => c.ForgetPassComponent)
    },
    { 
      path : "verify-code" , loadComponent:()=> import("./Core/Pages/verify-code/verify-code.component").then (c => c.VerifyCodeComponent)
    },
  
    { 
      path : "resetpassword" , loadComponent:()=> import("./Core/Pages/resetpassword/resetpassword.component").then (c => c.ResetpasswordComponent)
    },



  ]
},

];
