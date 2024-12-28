import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

// import { webStorage } from 'src/app/core/utils/web-storage';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const apiToken = webStorage.apiToken;
    // if (apiToken) {
    //   const headers = request.headers.set('Authorization', apiToken);
    //   request = request.clone({ headers: headers });
    // }

    /** deprecated */
    // const csrfToken = webStorage.csrfToken;
    // if (csrfToken) {
    //   const headers = request.headers.set('CSRF-Token', csrfToken);
    //   request = request.clone({ headers: headers });
    // }

    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          /* Store API Token:  actually not comes with the new backend responses */
          // const apiTokenFromHeader = event.headers.get('Token');
          // if (apiTokenFromHeader) {
          //   webStorage.apiToken = apiTokenFromHeader;
          // }

          /** deprecated */
          /* Store CSRF Token */
          // const csrfTokenFromHeader = event.headers.get('csrf-token');
          // if (csrfTokenFromHeader) {
          //   webStorage.csrfToken = csrfTokenFromHeader;
          // }

          // API Anomaly [Unauthorised Request]
          if (event.status === 401) {
            this.ejectUser();
          }

          if (event.body.status === 'KO') {
            /* API Anomaly [General Errrors]
             * Unlike unauthorised requests above, normal errors return the httpCode directly
             * in the body of the result, (not in a result property).
             * Here we extract the http code (body.code) and the message (body.message).
             */
            const errorResponse = event.clone<HttpErrorResponse>({
              status: event.body.code,
              statusText: event.body.message
            });

            // Throw an error that Angular's HttpClient will pick up.
            // throw new HttpErrorResponse(errorResponse);
          } else {
            event = event.clone({
              body: event.body.result
            });
          }
        }
        return event;
      })
    );
  }

  ejectUser() {
    // Clean WebStorage
    // webStorage.clean();

    // start a new navigation to redirect to login page
    this.router.navigate(['/']);
  }
}
