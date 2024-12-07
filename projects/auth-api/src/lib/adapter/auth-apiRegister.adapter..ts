import { Injectable } from '@angular/core';
import { Adapter } from '../interfaces/adapter';
import { LoginAPIRes, LoginRes } from '../interfaces/loginRes';
import { RegisterAPIRes, RegisterRes } from '../interfaces/RegisterRes';

@Injectable({
  providedIn: 'root'
})
export class AuthRegisterAdapter  implements Adapter{

  constructor() { 
   
  
  }

  adapt(data:RegisterAPIRes): RegisterRes{
    return {
      
      message:data.message
      
    }
  }
}
