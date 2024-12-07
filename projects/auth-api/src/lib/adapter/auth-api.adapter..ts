import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginAPIRes, LoginRes } from '../interfaces/loginRes';

@Injectable({
  providedIn: 'root'
})
export class AuthApiAdapter  implements Adapter{

  constructor() { 
   
  
  }

  adapt(data:LoginAPIRes): LoginRes{
    return {
      message:data.message,
      token:data.token,
      userEmail:data.user.email
    }
  }
}
