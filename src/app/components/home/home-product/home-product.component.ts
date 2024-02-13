import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule, NgFor } from '@angular/common';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { Select, Store } from '@ngxs/store';
import { ProductsStateModel } from '../../../store/states/products.state';
import { Observable } from 'rxjs';
import { ProductsActions } from '../../../store/actions/products.action';

@Component({
    selector: 'app-home-product',
    standalone: true,
    templateUrl: './home-product.component.html',
    styleUrl: './home-product.component.css',
    imports: [
        NgFor,
        CommonModule,
        ProductCardComponent
    ]
})
export class HomeProductComponent  implements OnInit {

  constructor(
    private productService: ProductsService,
    private store: Store,
  ){}


  products: TProducts[];

  @Select((state: {product: ProductsStateModel}) => state.product.recommendedItems)
  productsItems!: Observable<TProducts[]>;

  ngOnInit(): void {
    this.store.dispatch(new ProductsActions.GetLimitedRecommendedProducts(3,13))
    this.productsItems.subscribe({
        next: (data: TProducts[]):void =>{
          this.products = data;
        }
      })
  }

  limitedDescription = (value: string): string => {
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }

}
