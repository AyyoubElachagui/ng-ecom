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
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.key, JSON.stringify(item));
    }
  }

  setArray = (item: T) => {
    if (typeof window !== 'undefined') {
      const oldData = this.getArray();
      localStorage.setItem(this.key,JSON.stringify([...oldData, item]));
    }
  }

  get = (): T | null => {
    if (typeof window !== 'undefined') {
      let data = localStorage.getItem(this.key);
      if (data == null) {
        return null;
      }
      return JSON.parse(data);
    }
    return null;
  }

  getArray = (): T[] => {
    if (typeof window !== 'undefined') {
      let data = localStorage.getItem(this.key);
      if (data == null) {
        return [];
      }
      return JSON.parse(data);
    }
    return [];
  }

  countOfItems = (): number => {
    if (typeof window !== 'undefined') {
      let data = this.getArray();
      if (data == null) {
        return 0;
      }
      return data.length
    }
    return 0;
  }

  update = (updatedData: T): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.key, JSON.stringify(updatedData));
    }
  }

  updateArray = (updatedData: T[]): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.key, JSON.stringify(updatedData));
    }
  }

  deleteFromArray= (itemId: number): void => {
    if (typeof window !== 'undefined') {
      let currentData = this.getArray();
      let updatedData = currentData.filter(item => item.id !== itemId);
      this.updateArray(updatedData);
    }
  }

  clear = (): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.key);
    }
  }

}