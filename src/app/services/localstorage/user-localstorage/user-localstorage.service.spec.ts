import { TestBed } from '@angular/core/testing';

import { UserLocalstorageService } from './user-localstorage.service';

describe('UserLocalstorageService', () => {
  let service: UserLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
