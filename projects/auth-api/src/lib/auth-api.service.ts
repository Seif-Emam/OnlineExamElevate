
import { AuthRegisterAdapter } from './adapter/auth-apiRegister.adapter.';
import { loginUser } from './interfaces/login';
import { Adapter } from './interfaces/adapter';
import { Injectable } from '@angular/core';
import { AuthAPI } from './base/AuthAPI';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthENDPOINT } from './enums/AuthAPI.endpoint';
import { AuthApiAdapter } from './adapter/auth-api.adapter.';
import { LoginAPIRes, LoginRes } from './interfaces/loginRes';
import { RegisterUser } from './interfaces/Register';
import { RegisterAPIRes, RegisterRes } from './interfaces/RegisterRes';
import {  ForgetPassUser } from './interfaces/forgetPass';
import { VerifyCode } from './interfaces/VerifyCode';
import { ResetPass } from './interfaces/ResetPass';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService implements AuthAPI {

  constructor(private _HttpClient:HttpClient, private _AuthApiAdapter:AuthApiAdapter, private _AuthRegisterAdapter:AuthRegisterAdapter) { }
 
   login(data: loginUser): Observable<LoginRes | never[]> {
    return this._HttpClient.post(AuthENDPOINT.LOGIN,data).pipe(

      map((res: any)=> this._AuthApiAdapter.adapt(res))
    )
      
  }
   register(data: RegisterUser): Observable<RegisterRes | never[]> {

    return this._HttpClient.post(AuthENDPOINT.REGISER,data).pipe(

      map((res:any)=> this._AuthRegisterAdapter.adapt(res))    )

  }


  ForgetPass(data:ForgetPassUser):Observable<any>{
   return this._HttpClient.post(AuthENDPOINT.FORGET_PASSWORD,data)
  }
  
  VerifyCode(data:VerifyCode):Observable<any>{
 
    return this._HttpClient.post(AuthENDPOINT.VERIFY_RESET_CODE,data)
  }


  ResetPass(data:ResetPass):Observable<any>{
   return this._HttpClient.put(AuthENDPOINT.RESET_PASSWORD,data)
  }
  
  


}


