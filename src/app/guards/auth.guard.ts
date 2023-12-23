import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthLocalstorageService } from '../services/localstorage/auth-localstorage/auth-localstorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
        private authService: AuthLocalstorageService, 
        private router: Router
    ) {}

  canActivate(): boolean {
    return this.checkAuth();
  }

  private checkAuth(): boolean {
    const token = this.authService.get();
    if (token !== null) {   
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}