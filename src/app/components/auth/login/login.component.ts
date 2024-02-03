import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/api/auth/login/login.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthLocalstorageService } from '../../../services/localstorage/auth-localstorage/auth-localstorage.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SkeletonComponent } from "../../../shared/components/skeleton/skeleton.component";
import { CartLocalstorageService } from '../../../services/localstorage/cart-localstorage/cart-localstorage.service';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [
      ReactiveFormsModule, 
      CommonModule, 
      FormsModule, 
      SkeletonComponent,
      RouterLink, 
      RouterLinkActive
    ]
})
export class LoginComponent implements OnInit {
  loginForm?: FormGroup;

  constructor(
    private loginService: LoginService,
    private authLSService: AuthLocalstorageService,
    private router: Router,
  ){}

  isLoading: boolean = false;
  errorMessage: string;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('eve.holt@reqres.in', [Validators.required, Validators.email]),
      password: new FormControl('cityslicka', Validators.required)
    });
    const token = this.authLSService.get();
    if(token !== null){
      this.router.navigateByUrl('/');
    }
  }
  onSubmit() {
    this.isLoading = true;
    if (this.loginForm?.valid) {
      this.loginService.create(this.loginForm.value).subscribe({
        next: (data) => {
          this.router.navigateByUrl('/');
          this.authLSService.set(data.token);
          this.isLoading = false;
        },
        error: (error) => {
          this.errorMessage = 'email or password incorrect'
          this.isLoading = false;
        }
      })
    }
  }

}
