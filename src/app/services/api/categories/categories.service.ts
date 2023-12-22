// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { environment } from '../../../shared/environment/environment';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'any'
// })
// export class CategoriesService {
//   private apiUrl = environment.fakeStore.apiUrl;

//   constructor(
//     protected http: HttpClient
//     ) { }

//     getAllCategories = (): Observable<string[]> => {
//       return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
//     }

// }
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../shared/environment/environment';
import { BaseService } from '../base-service.service';

@Injectable({
  providedIn: 'any'
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