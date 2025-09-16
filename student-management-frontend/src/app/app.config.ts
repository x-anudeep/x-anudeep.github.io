import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Make sure the import path is correct

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
  ]
};

export const config = {
  apiUrl: 'http://localhost:8080/api', // Backend API URL
  tokenKey: 'token' // Local storage key for storing the token
};
