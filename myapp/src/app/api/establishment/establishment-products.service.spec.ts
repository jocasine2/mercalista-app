import { TestBed } from '@angular/core/testing';

import { EstablishmentProductsService } from './establishment-products.service';

describe('EstablishmentProductsService', () => {
  let service: EstablishmentProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstablishmentProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
