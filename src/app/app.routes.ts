import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsDetailsComponent } from './components/products/products-details/products-details.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'products/:productId',
        component: ProductsDetailsComponent
    },
    {
        path: 'users/manager',
        component: UsersManagerComponent
    }
];
