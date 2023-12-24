import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartLocalstorageService } from '../../../services/localstorage/cart-localstorage/cart-localstorage.service';
import { TCarts } from '../../../services/interfaces/carts.interface';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngxs/store';
import { CartActions } from '../../../store/actions/cart.action';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, RouterLinkActive,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  constructor(
    private cartService: CartLocalstorageService,
    private store: Store
  ){}

  @Input()
  product: TProducts;


  addToCart = () => {
    const cart: TCarts = {
      id: uuidv4(),
      products: this.product
    }
    this.cartService.setArray(cart);
    this.handleCartStore(cart);
  }

  private handleCartStore = (cart: TCarts) => {
    this.store.dispatch(new CartActions.GetCountItemsOnCart())
    this.store.dispatch(new CartActions.AddIntoCart(cart))
  }

  limitedDescription = (): string => {
    return this.product.title.length > 12 ? this.product.title.substring(0, 12) + '...' : this.product.title;
  }
}
