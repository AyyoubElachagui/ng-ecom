import { Component, OnInit } from '@angular/core';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { ShopSidebarComponent } from './widgets/shop-sidebar/shop-sidebar.component';
import { ShopFilterComponent } from './widgets/shop-filter/shop-filter.component';
import { Select, Store } from '@ngxs/store';
import { TProducts } from '../../services/interfaces/products.interface';
import { ProductsStateModel } from '../../store/states/products.state';
import { Observable } from 'rxjs';
import { ProductsActions } from '../../store/actions/products.action';
import { NgFor } from '@angular/common';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { SortingEnum } from '../../services/enum/sorting.enum';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [
        NgFor,
        SkeletonComponent,
        ShopSidebarComponent,
        ShopFilterComponent,
        ProductCardComponent
    ]
})
export class ShopComponent implements OnInit {

    constructor(
        private store: Store,
    ) {

    }

    products: TProducts[];

    @Select((state: { product: ProductsStateModel }) => state.product.productsItems)
    productsItems!: Observable<TProducts[]>;

    ngOnInit(): void {
        this.loadAllProducts()
    }

    loadAllProducts = () => {
        this.store.dispatch(new ProductsActions.GetAllProducts)
        this.productsItems.subscribe({
            next: (data: TProducts[]): void => {
                this.products = data;
            }
        })
    }

    onSortingChanged = ($event: SortingEnum) => {
        this.sortProduct($event)
    }

    sortProduct = (sorting: SortingEnum) => {
        switch (sorting) {
            case SortingEnum.default:
                this.loadAllProducts()
            break

            case SortingEnum.lowPrice:
                this.productsItems.subscribe({
                    next: (data: TProducts[]): void => {
                        this.products = data.sort((a, b) => a.price - b.price);
                    }
                })
            break

            case SortingEnum.highPrice:
                this.productsItems.subscribe({
                    next: (data: TProducts[]): void => {
                        this.products = data.sort((a, b) => b.price - a.price);
                    }
                })
            break


            case SortingEnum.latestProduct:
                this.productsItems.subscribe({
                    next: (data: TProducts[]): void => {
                        this.products = data.reverse();
                    }
                })
            break
        }
    }

}
