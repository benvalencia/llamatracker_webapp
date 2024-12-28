import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { EnvService } from '../services/env/env.service';

export interface IRequestOptions {
  headers?:
    | HttpHeaders
    | {
        [param: string]: string | string[];
      };
  observe?: 'body';
  params?:
    | HttpParams
    | {
        [param: string]: string | string[];
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export function apiClientCreator(http: HttpClient, envService: EnvService) {
  return new ApiClient(http, envService);
}

@Injectable()
export class ApiClient {
  private api;

  // Extending the HttpClient through the Angular DI.
  public constructor(public http: HttpClient, public envService: EnvService) {
    this.api = this.envService.apiUrl;
    // If you don't want to use the extended versions in some cases you can access the public
    // property and use the original one. for ex. this.httpClient.http.get(...)
  }

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public get<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.get<T>(this.api + '/' + endPoint, options);
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public post<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.post<T>(this.api + '/' + endPoint, params, options);
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public put<T>(endPoint: string, params: object, options?: IRequestOptions): Observable<T> {
    return this.http.put<T>(this.api + '/' + endPoint, params, options);
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public delete<T>(endPoint: string, options?: IRequestOptions): Observable<T> {
    return this.http.delete<T>(this.api + '/' + endPoint, options);
  }
}
