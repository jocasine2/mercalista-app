import { TestBed } from '@angular/core/testing';

import { ProductEstablishmentService } from './product-establishment.service';

describe('ProductEstablishmentService', () => {
  let service: ProductEstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductEstablishmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
