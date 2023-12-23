import { Injectable } from '@angular/core';
import { TBase } from '../interfaces/base.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService<T extends TBase> {
  constructor() {}

  // Set a value in local storage
  setItem(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Get a value from local storage
  getItem(key: string): T | null {
    let data = localStorage.getItem(key);
    if (data == null) {
      return null;
    }
    return JSON.parse(data);
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all items from local storage
  clear(): void {
    localStorage.clear();
  }
}