import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsService } from '../../../services/api/products/products.service';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule, NgFor } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ProductCardComponent } from "../../../shared/components/product-card/product-card.component";
import { Select, Store } from '@ngxs/store';
import { ProductsActions } from '../../../store/actions/products.action';
import { ProductsStateModel } from '../../../store/states/products.state';

@Component({
    selector: 'app-new-arrival',
    standalone: true,
    templateUrl: './new-arrival.component.html',
    styleUrl: './new-arrival.component.css',
    imports: [
        NgFor,
        CommonModule,
        ProductCardComponent
    ]
})
export class NewArrivalComponent implements OnInit {

  constructor(
    private store: Store,
  ){}
  
  @Output()
  countOfItems: EventEmitter<number> = new EventEmitter<number>();

  product?: Subscription;

  newArrival: TProducts[];

  @Select((state: {product: ProductsStateModel}) => state.product.featuredItems)
  productsItems!: Observable<TProducts[]>;

  ngOnInit(): void {
    this.store.dispatch(new ProductsActions.GetLimitedFeaturedProducts(0,7))
    this.productsItems.subscribe({
      next: (data: TProducts[]):void =>{
        this.newArrival = data;
      }
    })
  }

  limitedDescription = (value: string): string => {
    return value.length > 20 ? value.substring(0, 20) + '...' : value;
  }


}
