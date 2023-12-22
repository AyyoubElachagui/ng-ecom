import { Injectable } from '@angular/core';
import { BaseLocalstorageService } from '../base-localstorage.service';
import { TUserRes } from '../../interfaces/res/user-res.interface';
import { constants } from '../../../shared/constants/constants';

@Injectable({
  providedIn: 'any'
})
export class UserLocalstorageService extends BaseLocalstorageService<TUserRes> {

  constructor() {
    super(
      constants.user
    );
  }
}
