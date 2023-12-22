import { Inject, Injectable } from '@angular/core';
import { TBase } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'any'
})
export class BaseLocalstorageService<T extends TBase> {

    key: string = "";

  constructor(
    @Inject('key') key: string,
    ) {
        this.key = key;
     }
     

  set = (item: T) => {
    localStorage.setItem(this.key, JSON.stringify(item));
  }

  get = (): T | null => {
    let data = localStorage.getItem(this.key);
    if (data == null) {
      return null;
    }
    return JSON.parse(data);
  }

//   getCountOfItems = (): number => {
//     let data = localStorage.getItem(this.key);
//     if (data == null) {
//       return 0;
//     }
//     let _data = JSON.parse(data);
//     return _data.length;
//   }

  update = (updatedData: T): void => {
    localStorage.setItem(this.key, JSON.stringify(updatedData));
  }

//   deleteItemFromStorage = (itemId: number): void => {
//     let currentData = this.get();
//     let updatedData = currentData.filter(item => item.id !== itemId);
//     this.update(updatedData);
//   }

  clear = (): void => {
    localStorage.removeItem(this.key);
  }

}