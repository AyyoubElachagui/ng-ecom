import { Component, Input } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LeftbarComponent } from "../leftbar/leftbar.component";
import { CommonModule } from '@angular/common';
import { GlobalHeaderComponent } from "../global-header/global-header.component";
import { GlobalNavbarComponent } from "../global-navbar/global-navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { CopyrightComponent } from "../copyright/copyright.component";
import { Select, Store } from '@ngxs/store';
import { CartStateModel } from '../../../store/states/cart.state';
import { Observable } from 'rxjs';
import { TCarts } from '../../../services/interfaces/carts.interface';
import { CartActions } from '../../../store/actions/cart.action';

@Component({
    selector: 'app-skeleton',
    standalone: true,
    templateUrl: './skeleton.component.html',
    styleUrl: './skeleton.component.css',
    imports: [
        HeaderComponent,
        LeftbarComponent,
        CommonModule,
        GlobalHeaderComponent,
        GlobalNavbarComponent,
        FooterComponent,
        CopyrightComponent
    ]
})
export class SkeletonComponent {

  @Select((state: {cart: CartStateModel}) => state.cart.countItems)
  countItems$!: Observable<number>;

  @Input()
  isDashboard: boolean = false;

  constructor(
    private store: Store
  ){
    store.dispatch(new CartActions.GetCountItemsOnCart())
  }

}
