import { TestBed } from '@angular/core/testing';

import { SharedCataService } from './shared-cata.service';

describe('SharedCataService', () => {
  let service: SharedCataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
