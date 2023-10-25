import { TestBed } from '@angular/core/testing';

import { SoltProductService } from './solt-product.service';

describe('SoltProductService', () => {
  let service: SoltProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoltProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
