import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ApiClient } from '../../config/api-client';

@Injectable()
export class ShopService {
  constructor(private api: ApiClient) {}
  /**
   * Get a list of all clients.
   */
  getDailyShop(): Observable<string[]> {
    return this.api.get(environment.api.shop.dailyShop);
  }
}
