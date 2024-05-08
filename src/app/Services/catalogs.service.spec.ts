import { TestBed } from '@angular/core/testing';

import { CatalogosService } from './catalogs.service';

describe('CatalogosService', () => {
  let service: CatalogosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
