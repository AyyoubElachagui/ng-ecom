import { Injectable } from '@angular/core';
import { BaseLocalstorageService } from '../base-localstorage.service';
import { constants } from '../../../shared/constants/constants';

@Injectable({
  providedIn: 'any'
})
export class AuthLocalstorageService extends BaseLocalstorageService<any> {

  constructor() {
    super(
      constants.token
    );
   }
}
