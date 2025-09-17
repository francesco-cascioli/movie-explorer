import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';
import { inject } from '@angular/core';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

const router = inject(Router);

router.events.subscribe((event: any) => {
  if (event instanceof NavigationEnd) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
