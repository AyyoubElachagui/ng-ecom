import { Inject, Injectable, InjectionToken } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Base } from '../models/base.model';

@Injectable({
  providedIn: 'any'
})
export class BaseService<T extends Base> {
  apiUrl: string = '';
  endpoint: string = '';

  constructor(
    private httpClient: HttpClient,
    @Inject('apiUrl') apiUrl: string,
    @Inject('endpoint') endpoint: string,
  ) {
    this.apiUrl = apiUrl;
    this.endpoint = endpoint
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  
  //#region [ Public ]
  get(): Observable<T[]> {
    return this.httpClient
      .get<T[]>(`${this.apiUrl}/${this.endpoint}`)
      .pipe(
        retry(2),
        catchError(this.handleError)        
      )
  }

  getById(id: number): Observable<T> {
    return this.httpClient
      .get<T>(`${this.apiUrl}/${this.endpoint}/${id}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  create(item: T): Observable<T> {
    return this.httpClient.post<T>(`${this.apiUrl}/${this.endpoint}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  update(item: T): Observable<T> {
    return this.httpClient.put<T>(`${this.apiUrl}/${this.endpoint}/${item.id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }  
  
  delete(item: T) {
    return this.httpClient.delete<T>(`${this.apiUrl}/${this.endpoint}/${item.id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }  
  //#endregion

  //#region [ Private ]
  private handleError(error: HttpErrorResponse){
    let errorMessage = '';

    if(error.error instanceof ErrorEvent){
      //error client
      errorMessage = error.error.message; 
    } else {
      //error server
      errorMessage = `error code : ${error.status}, ` + `message: ${error.message}`;
    }

    return throwError(errorMessage);
  }
  //#endregion

}

function Injet(arg0: string): (target: typeof BaseService, propertyKey: undefined, parameterIndex: 2) => void {
    throw new Error('Function not implemented.');
}