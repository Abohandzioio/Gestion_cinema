import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export let appConfig: ApplicationConfig;
appConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
