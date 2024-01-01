import { Component, Input, } from '@angular/core';
import { TProducts } from '../../../services/interfaces/products.interface';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartLocalstorageService } from '../../../services/localstorage/cart-localstorage/cart-localstorage.service';
import { TCarts } from '../../../services/interfaces/carts.interface';
import { v4 as uuidv4 } from 'uuid';
import { Store } from '@ngxs/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CartActions } from '../../../store/actions/cart.action';
import { faStar, faStarHalfStroke, } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { WishlistLocalstorageService } from '../../../services/localstorage/wishlistLocalstorage/wishlist-localstorage.service';
import { TWishList } from '../../../services/interfaces/wishlist.interface';
import { WishListActions } from '../../../store/actions/wish_list.action';
import { UserLocalstorageService } from '../../../services/localstorage/user-localstorage/user-localstorage.service';
import { AuthLocalstorageService } from '../../../services/localstorage/auth-localstorage/auth-localstorage.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, RouterLinkActive,
    FontAwesomeModule
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarRegular = faStarRegular;

  constructor(
    private cartService: CartLocalstorageService,
    private wishlistService: WishlistLocalstorageService,
    private authLSService: AuthLocalstorageService,
    private router: Router,
    private store: Store
  ){

  }

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

  addToWishList = () => {

    const token = this.authLSService.get();
    if(token === null){
      this.router.navigateByUrl('/login');
      return;
    }

    const wishlist: TWishList = {
      id: uuidv4(),
      products: this.product
    }
    this.wishlistService.setArray(wishlist);
    this.handleWishListStore(wishlist);
  }

  private handleCartStore = (cart: TCarts) => {
    this.store.dispatch(new CartActions.GetCountItemsOnCart())
    this.store.dispatch(new CartActions.AddIntoCart(cart))
  }

  private handleWishListStore = (wishlist: TWishList) => {
    this.store.dispatch(new WishListActions.GetCountItemsOnWishList())
    this.store.dispatch(new WishListActions.AddIntoWishList(wishlist))
  }

  get stars() {
    return Array(Math.floor(this.product.rating.rate)).fill(0);
  }

  get regularStars() {
    return Array(Math.floor( 5 - this.product.rating.rate)).fill(0);
  }

  limitedDescription = (): string => {
    return this.product.title.length > 12 ? this.product.title.substring(0, 12) + '...' : this.product.title;
  }
}
