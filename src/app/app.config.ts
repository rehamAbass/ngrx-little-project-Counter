import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { counterReducer } from './store/counter.reducer';//'./store/counter.reducer';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers:
    [provideRouter(routes), provideClientHydration(), provideStore({
      counter: counterReducer
    })]
};
