import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    provideNoopAnimations(),
    provideAnimations(),
    provideHttpClient(),
  ],
<<<<<<< HEAD

}
=======
};
>>>>>>> 8adcd2496292e34469fd9a1369ee75b1d8e4f1bc
