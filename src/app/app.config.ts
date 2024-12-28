import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';

import { routes } from './app.routes';
import {TranslateModule} from '@ngx-translate/core';
import {AppTranslate} from './config/multi-translate-http-loader';
import {HttpClientModule, provideHttpClient} from '@angular/common/http';
import {providePrimeNG} from 'primeng/config';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import Aura from '@primeng/themes/aura';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({scrollPositionRestoration: "top", anchorScrolling: "enabled"}),
    ),
    provideHttpClient(),
    importProvidersFrom(HttpClientModule),
    importProvidersFrom(
      TranslateModule.forRoot(AppTranslate.Loader())
    ),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {preset: Aura}
    })
]
};
