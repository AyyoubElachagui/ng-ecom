import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModel } from '../../models/products.model';
import { environment } from '../../../shared/environment/environment';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<ProductsModel> {

  constructor(
    protected http: HttpClient
  ) {
    
    super(
      http,
      environment.fakeStore.apiUrl,
      'products',
      );
  }
}
