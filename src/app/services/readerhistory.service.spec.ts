import { TestBed } from '@angular/core/testing';

import { ReaderhistoryService } from './readerhistory.service';

describe('ReaderhistoryService', () => {
  let service: ReaderhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReaderhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
