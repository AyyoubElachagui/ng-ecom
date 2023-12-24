import { Component, OnInit } from '@angular/core';
import { SkeletonComponent } from "../../shared/components/skeleton/skeleton.component";
import { WishlistSidebarComponent } from "./wishlist-sidebar/wishlist-sidebar.component";
import { WishlistCardComponent } from "./wishlist-card/wishlist-card.component";
import { CartLocalstorageService } from '../../services/localstorage/cart-localstorage/cart-localstorage.service';
import { TProducts } from '../../services/interfaces/products.interface';
import { NgFor } from '@angular/common';
import { TCarts } from '../../services/interfaces/carts.interface';
import { Store } from '@ngxs/store';
import { CartActions } from '../../store/actions/cart.action';
import { CartStateModel } from '../../store/states/cart.state';

@Component({
    selector: 'app-wishlist',
    standalone: true,
    templateUrl: './wishlist.component.html',
    styleUrl: './wishlist.component.css',
    imports: [
      NgFor,
      SkeletonComponent, 
      WishlistSidebarComponent, 
      WishlistCardComponent
    ]
})
export class WishlistComponent implements OnInit {

  constructor(
    private store: Store
  ){}

  cart: TCarts[]

  ngOnInit(): void {
    this.getAllFromCart()
  }

  getAllFromCart = () => {
    this.store.dispatch(new CartActions.GetAllFromCart).subscribe({
      next: (data: any): void => {
        this.cart = data.cart.cartItems
      }
    });
  }

  deleteFormCart = (itemId: number) => {
    this.store.dispatch(new CartActions.DeleteItemFromCart(itemId))
    this.getAllFromCart()
    this.store.dispatch(new CartActions.GetCountItemsOnCart)
  }

}
