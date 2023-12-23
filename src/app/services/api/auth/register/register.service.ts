import { Injectable } from '@angular/core';
import { BaseService } from '../../base-service.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../shared/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService extends BaseService<any> {

  constructor(
    protected http: HttpClient
  ) {
    
    super(
      http,
      environment.fakeUsers.apiUrl,
      'register',
      );
  }
}
