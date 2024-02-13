import { Component } from '@angular/core';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { ShopSidebarComponent } from './widgets/shop-sidebar/shop-sidebar.component';
import { ShopFilterComponent } from './widgets/shop-filter/shop-filter.component';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [SkeletonComponent, 
        ShopSidebarComponent,
        ShopFilterComponent,
    ]
})
export class ShopComponent {

}
