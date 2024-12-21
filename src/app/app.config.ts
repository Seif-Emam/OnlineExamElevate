import {  DialogModule } from 'primeng/dialog';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { HeaderInterceptor } from './Shared/interceptors/Headerinterceptor.interceptor';
import { CardModule } from 'primeng/card';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration() ,provideHttpClient(withFetch(),withInterceptors([HeaderInterceptor])),importProvidersFrom(DialogModule,BrowserAnimationsModule,BrowserModule,CardModule)]
};
