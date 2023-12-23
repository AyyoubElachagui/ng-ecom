import { Injectable } from '@angular/core';
import { BaseService } from '../../base-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../shared/environment/environment';

@Injectable({
  providedIn: 'any'
})
export class LoginService extends BaseService<any> {

  constructor(
    protected http: HttpClient
  ) {
    
    super(
      http,
      environment.fakeUsers.apiUrl,
      'login',
      );
  }
}
