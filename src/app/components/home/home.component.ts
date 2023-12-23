import { Component } from '@angular/core';
import { LeftbarComponent } from "../../shared/components/leftbar/leftbar.component";
import { RouterOutlet } from '@angular/router';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { BannerComponent } from "./banner/banner.component";
import { FeaturesComponent } from "./features/features.component";
import { CategoriesComponent } from "./categories/categories.component";
import { NewArrivalComponent } from "./new-arrival/new-arrival.component";
import { AdsComponent } from "./ads/ads.component";
import { HomeProductComponent } from "./home-product/home-product.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { GlobalHeaderComponent } from "../../shared/components/global-header/global-header.component";
import { GlobalNavbarComponent } from "../../shared/components/global-navbar/global-navbar.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        LeftbarComponent,
        RouterOutlet,
        SkeletonComponent,
        BannerComponent,
        FeaturesComponent,
        CategoriesComponent,
        NewArrivalComponent,
        AdsComponent,
        HomeProductComponent,
        FooterComponent,
        GlobalHeaderComponent,
        GlobalNavbarComponent
    ]
})
export class HomeComponent {

}