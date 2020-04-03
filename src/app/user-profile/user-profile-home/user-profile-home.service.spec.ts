import { TestBed } from '@angular/core/testing';

import { UserProfileHomeService } from './user-profile-home.service';

describe('UserProfileHomeService', () => {
  let service: UserProfileHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserProfileHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
