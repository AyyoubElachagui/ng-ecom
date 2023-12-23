import { TestBed } from '@angular/core/testing';

import { AuthLocalstorageService } from './auth-localstorage.service';

describe('AuthLocalstorageService', () => {
  let service: AuthLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
