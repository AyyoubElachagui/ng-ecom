import { TestBed } from '@angular/core/testing';

import { WishlistLocalstorageService } from './wishlist-localstorage.service';

describe('WishlistLocalstorageService', () => {
  let service: WishlistLocalstorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WishlistLocalstorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
