// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { ProductsModel } from '../../models/products.model';
// import { environment } from '../../../shared/environment/environment';

// @Injectable({
//   providedIn: 'any'
// })
// export class ProductsService {
//   private apiUrl = environment.fakeStore.apiUrl;

//   constructor(
//     protected http: HttpClient
//   ) {}

//   getAllProducts = (): Observable<ProductsModel[]> => {
//     return this.http.get<ProductsModel[]>(`${this.apiUrl}/products`);
//   }

//   getProductById = (productId: number): Observable<ProductsModel> => {
//     console.log("product id :: "+productId);
//     return this.http.get<ProductsModel>(`${this.apiUrl}/products/${productId}`);
//   }

// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TProducts } from '../../interfaces/products.interface';
import { environment } from '../../../shared/environment/environment';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'any'
})
export class ProductsService extends BaseService<TProducts> {

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