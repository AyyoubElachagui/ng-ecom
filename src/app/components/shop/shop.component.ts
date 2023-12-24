import { Component } from '@angular/core';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [SkeletonComponent]
})
export class ShopComponent {

}
