import { TestBed } from '@angular/core/testing';

import { UserProfileTransactionsService } from './user-profile-transactions.service';

describe('UserProfileTransactionsService', () => {
  let service: UserProfileTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
