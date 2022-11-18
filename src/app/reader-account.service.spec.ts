import { TestBed } from '@angular/core/testing';

import { ReaderAccountService } from './reader-account.service';

describe('ReaderAccountService', () => {
  let service: ReaderAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
