import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ShopComponent } from './components/shop/shop.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    // {
    //     path: 'shop',
    //     component: ShopComponent,
    // },
    {
        path: 'wishlist',
        component: WishlistComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products/:productId',
        component: ProductsDetailsComponent,
    },
    {
        path: 'users/manager',
        component: UsersManagerComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full',
    },
    { 
        path: '**', 
        pathMatch: 'full',  
        component: PagenotfoundComponent 
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})

export class AppRoutingModule { }