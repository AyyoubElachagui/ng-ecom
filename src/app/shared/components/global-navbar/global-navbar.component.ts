import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthLocalstorageService } from '../../../services/localstorage/auth-localstorage/auth-localstorage.service';
import { constants } from '../../constants/constants';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-global-navbar',
  standalone: true,
  imports: [
    NgIf,
    RouterLink, 
    RouterLinkActive 
  ],
  templateUrl: './global-navbar.component.html',
  styleUrl: './global-navbar.component.css'
})
export class GlobalNavbarComponent implements OnInit {

  constructor(
    private authService: AuthLocalstorageService,
  ){}

  isLoggedIn: boolean = false;

  ngOnInit(): void {
      this.isLoggedIn = this.checkUserIfLoggedIn();
  }

  checkUserIfLoggedIn = (): boolean => {
    const user = this.authService.get()
    if(user == null){
      return true;
    }
    return false
  }

  
  handleLogout() {
    this.authService.clear();
    location.reload();
  }

}
