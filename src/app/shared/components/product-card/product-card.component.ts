import { Component, Input, OnInit, } from '@angular/core';
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
import { ToastrService } from 'ngx-toastr';

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
export class ProductCardComponent implements OnInit {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarRegular = faStarRegular;

  constructor(
    private cartService: CartLocalstorageService,
    private wishlistService: WishlistLocalstorageService,
    private authLSService: AuthLocalstorageService,
    private router: Router,
    private store: Store,
    private toastr: ToastrService
  ){

  }
  
  isFavorite: boolean = false;
  isCart: boolean = false;
  uuid: number = uuidv4();

  ngOnInit(): void {
    this.handleIsFavorite();
    this.handleIsOnCart();
  }

  @Input()
  product: TProducts;


  handleIsFavorite = () => {
    if(!this.chackIfUserLoggedIn()){
      return;
    }
    const productOnWishList = this.wishlistService.getArray().filter((e) => e.products.id == this.product.id);
    if(productOnWishList.length == 1){
      this.isFavorite = true;
    }else{
      this.isFavorite = false;
    }
  }


  handleIsOnCart = () => {
    const productOnCart = this.cartService.getArray().filter((e) => e.products.id == this.product.id);
    if(productOnCart.length == 1){
      this.isCart = true;
    }else{
      this.isCart = false;
    }
  }

  addToCart = () => {
    const cart: TCarts = {
      id: uuidv4(),
      products: this.product
    }
    this.cartService.setArray(cart);
    this.handleAddCartStore(cart);
    this.handleIsOnCart();
  }
  
  DeleteFromCart = () => {
    const productOnCart = this.cartService.getArray().filter((e) => e.products.id == this.product.id);
    this.cartService.deleteFromArray(productOnCart[0].id);
    this.handleDeleteCartStore();
    this.handleIsOnCart();
  }

  chackIfUserLoggedIn = (): boolean => {
    const token = this.authLSService.get();
    if(token === null){
      return false;
    }
    return true;
  } 

  handleWishList = () => {
    if(this.isFavorite == true){
      this.deleteFromWishList();
      return;
    }
    this.addToWishList();
  }

  addToWishList = () => {
    if(!this.chackIfUserLoggedIn()){
      this.router.navigateByUrl('/login');
      return;
    }

    const wishlist: TWishList = {
      id: this.uuid,
      products: this.product
    }
    this.wishlistService.setArray(wishlist);
    this.handleAddWishListStore(wishlist);
    this.handleIsFavorite();
    this.toastr.success(`this product "${this.product.title}"`, 'Added into wishlist');
  }

  deleteFromWishList = () => {
    if(!this.chackIfUserLoggedIn()){
      this.router.navigateByUrl('/login');
      return;
    }
    const productOnWishList = this.wishlistService.getArray().filter((e) => e.products.id == this.product.id)
    this.wishlistService.deleteFromArray(productOnWishList[0].id);
    this.handleDeleteWishListStore();
    this.handleIsFavorite();
    this.toastr.info(`this product "${this.product.title}"`, 'Deleted from wishlist');
  }

  private handleAddCartStore = (cart: TCarts) => {
    this.store.dispatch(new CartActions.GetCountItemsOnCart())
    this.store.dispatch(new CartActions.AddIntoCart(cart))
  }
  

  private handleDeleteCartStore = () => {
    this.store.dispatch(new CartActions.GetCountItemsOnCart())
    this.store.dispatch(new CartActions.DeleteItemFromCart(this.product.id))
  }

  private handleAddWishListStore = (wishlist: TWishList) => {
    this.store.dispatch(new WishListActions.GetCountItemsOnWishList())
    this.store.dispatch(new WishListActions.AddIntoWishList(wishlist))
  }

  private handleDeleteWishListStore = () => {
    this.store.dispatch(new WishListActions.GetCountItemsOnWishList())
    this.store.dispatch(new WishListActions.DeleteItemFromWishList(this.product.id))
  }

  get stars() {
    return Array(Math.floor(this.product.rating.rate)).fill(0);
  }

  get regularStars() {
    return Array(Math.floor( 5 - this.product.rating.rate)).fill(0);
  }

  limitedTitle = (): string => {
    return this.product.title.length > 20 ? this.product.title.substring(0, 20) + '...' : this.product.title;
  }
}
