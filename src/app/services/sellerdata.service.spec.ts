import { TestBed } from '@angular/core/testing';

import { SellerdataService } from './sellerdata.service';

describe('SellerdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SellerdataService = TestBed.get(SellerdataService);
    expect(service).toBeTruthy();
  });
});
