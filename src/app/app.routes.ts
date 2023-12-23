import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
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
    {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'products/:productId',
        component: ProductsDetailsComponent,
        canActivate: [AuthGuard]
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
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }