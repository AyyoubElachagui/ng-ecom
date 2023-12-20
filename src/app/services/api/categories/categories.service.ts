import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../shared/environment/environment';
import { Observable } from 'rxjs';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService<any> {

  constructor(
    protected http: HttpClient
  ) {
    
    super(
      http,
      environment.fakeStore.apiUrl,
      'products/categories',
      );
  }
}

