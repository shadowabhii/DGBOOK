import { TestBed } from '@angular/core/testing';

import { AuthorAccountService } from './author-account.service';

describe('AuthorAccountService', () => {
  let service: AuthorAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
