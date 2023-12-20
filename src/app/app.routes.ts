import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersManagerComponent } from './components/users-manager/users-manager.component';

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
        path: 'users/manager',
        component: UsersManagerComponent
    }
];
