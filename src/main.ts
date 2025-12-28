import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfig } from './app/app.config';
import './firebase.config'; // Initialize Firebase

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
