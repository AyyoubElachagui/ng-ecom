import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/api/auth/login/login.service';
import { LocalStorageService } from '../../../services/localstorage/localstorage.service';
import { TUserRes } from '../../../services/interfaces/res/user-res.interface';
import { Router } from '@angular/router';
import { constants } from '../../../shared/constants/constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public form?: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private loginService: LoginService,
    private localStorageService: LocalStorageService<TUserRes>,
    private route: Router,
  ){
    
  }

  userStorage?: TUserRes | null;


  ngOnInit(): void {
    this.userStorage = this.localStorageService.getItem(constants.user);
    if(this.userStorage){
      this.route.navigateByUrl('/');
      return ;
    }
  }

  private _createForm(): void {
    this.form = this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

}
