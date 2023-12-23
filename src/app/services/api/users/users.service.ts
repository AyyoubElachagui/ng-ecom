import { Injectable } from '@angular/core';
import { environment } from '../../../shared/environment/environment';
import { HttpClient } from '@angular/common/http';
import { TPaginationDataRes } from '../../interfaces/res/pagination-data-res.interface';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'any'
})
export class UsersService extends BaseService<TPaginationDataRes> {

  constructor(
    protected http: HttpClient
  ) {
    
    super(
      http,
      environment.fakeUsers.apiUrl,
      'users?page=1&per_page=10',
      );
  }
}
