import { Injectable } from '@angular/core';
import { TWishList } from '../../interfaces/wishlist.interface';
import { BaseLocalstorageService } from '../base-localstorage.service';
import { constants } from '../../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class WishlistLocalstorageService extends BaseLocalstorageService<TWishList> {

  constructor() {
    super(
      constants.wishlist
    );
  }
}

