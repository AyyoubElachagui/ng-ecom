import { Injectable } from '@angular/core';
import { BaseLocalstorageService } from '../base-localstorage.service';
import { TCarts } from '../../interfaces/carts.interface';
import { constants } from '../../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CartLocalstorageService extends BaseLocalstorageService<TCarts> {

  constructor() {
    super(
      constants.cart
    );
   }
}
