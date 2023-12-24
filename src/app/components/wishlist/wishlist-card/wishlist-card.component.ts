import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TProducts } from '../../../services/interfaces/products.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartLocalstorageService } from '../../../services/localstorage/cart-localstorage/cart-localstorage.service';
import { TCarts } from '../../../services/interfaces/carts.interface';

@Component({
  selector: 'app-wishlist-card',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive,
  ],
  templateUrl: './wishlist-card.component.html',
  styleUrl: './wishlist-card.component.css'
})
export class WishlistCardComponent {

  constructor(
    private cartService: CartLocalstorageService
  ){}

  @Input()
  cart: TCarts

  @Output()
  onDeleteFromCart: EventEmitter<number> = new EventEmitter<number>()

  
  deleteFormCart = (itemId: number) => {
    this.onDeleteFromCart.emit(itemId)
  }

  limitedDescription = (): string => {
    return this.cart.products.title.length > 20 ? this.cart.products.title.substring(0, 20) + '...' : this.cart.products.title;
  }

}
