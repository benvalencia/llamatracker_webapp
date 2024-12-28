import { TestBed } from '@angular/core/testing';

import { ShopService } from './shop.service';

xdescribe('ShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopService = TestBed.get(ShopService);
    expect(service).toBeTruthy();
  });
});
