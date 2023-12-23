import { Component } from '@angular/core';
import { LeftbarComponent } from "../../shared/components/leftbar/leftbar.component";
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { BannerComponent } from "./banner/banner.component";
import { FeaturesComponent } from "./features/features.component";
import { CategoriesComponent } from "./categories/categories.component";
import { NewArrivalComponent } from "./new-arrival/new-arrival.component";
import { AdsComponent } from "./ads/ads.component";
import { HomeProductComponent } from "./home-product/home-product.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        HeaderComponent,
        LeftbarComponent,
        RouterOutlet,
        SkeletonComponent,
        NavbarComponent,
        BannerComponent,
        FeaturesComponent,
        CategoriesComponent,
        NewArrivalComponent,
        AdsComponent,
        HomeProductComponent
    ]
})
export class HomeComponent {

}