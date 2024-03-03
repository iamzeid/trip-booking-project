import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideClientHydration } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), provideClientHydration(),
  importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "booking-e25b3", "appId": "1:653654736161:web:fd7141e95c5009e08cd260", "storageBucket": "booking-e25b3.appspot.com", "apiKey": "AIzaSyB0n9pQ2UrcqzK249w0fvxFQcp8KCAj_ac", "authDomain": "booking-e25b3.firebaseapp.com", "messagingSenderId": "653654736161", "measurementId": "G-61K7CBGJVC" }))), importProvidersFrom(provideAuth(() => getAuth()))]
};