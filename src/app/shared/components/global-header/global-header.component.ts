import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartLocalstorageService } from '../../../services/localstorage/cart-localstorage/cart-localstorage.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { CartStateModel } from '../../../store/states/cart.state';
import { Observable } from 'rxjs';
import { CartActions } from '../../../store/actions/cart.action';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-global-header',
  standalone: true,
  imports: [
    RouterLink, 
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './global-header.component.html',
  styleUrl: './global-header.component.css'
})
export class GlobalHeaderComponent {


  @Select((state: {cart: CartStateModel}) => state.cart.countItems)
  countItems$!: Observable<number>;
  
  constructor(
    private cartService: CartLocalstorageService,
    private store: Store
  ){
    store.dispatch(new CartActions.GetCountItemsOnCart())
  }

  @Output()
  handleSearchOnChange: EventEmitter<string> = new EventEmitter<string>();

  onSearch(event: any) {
    this.handleSearchOnChange.emit(event.target.value)
  }
}
