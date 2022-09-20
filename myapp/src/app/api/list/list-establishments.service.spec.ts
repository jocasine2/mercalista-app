import { TestBed } from '@angular/core/testing';

import { ListEstablishmentsService } from './list-establishments.service';

describe('ListEstablishmentsService', () => {
  let service: ListEstablishmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListEstablishmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
