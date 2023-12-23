import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftbarComponent } from './shared/components/leftbar/leftbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './helpers/http.interceptor';
import { TUserRes } from './services/interfaces/res/user-res.interface';
import { LocalStorageService } from './services/localstorage/localstorage.service';
import { constants } from './shared/constants/constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent,FormsModule, LeftbarComponent, HttpClientModule, ReactiveFormsModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor(
    private localStorageService: LocalStorageService<TUserRes>,
    private route: Router,
  ){}

  userStorage?: TUserRes | null;

  ngOnInit(): void {
    // this.userStorage = this.localStorageService.getItem(constants.user);
    // if(this.userStorage == null){
    //   this.route.navigateByUrl('/login');
    //   return;
    // }
  }

}
