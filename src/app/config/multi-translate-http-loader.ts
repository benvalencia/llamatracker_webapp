import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';

import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export const TRANSLATE_FILES = {
  HOME: 'home',
};

const i18nFolder = './assets/i18n/';

/**
 * Translate Http Loaded class, loads the given array files
 * @implements TranslateLoader
 * @param http a http client
 * @param files a file array to load
 */
export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, public files: string[]) {}

  public getTranslation(lang: string): any {
    return forkJoin(
      this.files.map((file) => {
        return this.http.get(`${i18nFolder}${lang}/${file}.json`);
      })
    ).pipe(
      map((response) => {
        return response.reduce((a, b) => {
          return Object.assign(a, b);
        });
      })
    );
  }
}

export function GetMultiTranslateHttpLoader(http: HttpClient, _files: string[]) {
  return new MultiTranslateHttpLoader(http, Object.values(TRANSLATE_FILES));
}
/**
 * App Translate Class to set the Translate loader
 */
export class AppTranslate {
  static Loader() {
    return {
      loader: {
        provide: TranslateLoader,
        useFactory: GetMultiTranslateHttpLoader,
        deps: [HttpClient]
      }
    };
  }
}
