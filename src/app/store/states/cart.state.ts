import { Action, State, StateContext } from "@ngxs/store";
import { TCarts } from "../../services/interfaces/carts.interface";
import { Injectable } from "@angular/core";
import { CartActions } from "../actions/cart.action";
import { CartLocalstorageService } from "../../services/localstorage/cart-localstorage/cart-localstorage.service";

export interface CartStateModel {
    cartItems: TCarts[],
    countItems: number,
}

@State<CartStateModel>({
    name: 'cart',
    defaults: {
        cartItems: [] as TCarts[],
        countItems: 0,
    }
})
@Injectable()
export class CartState{

    constructor(
        private cartService: CartLocalstorageService
    ){}

    @Action(CartActions.GetAllFromCart)
    getAllFromCart(ctx: StateContext<CartStateModel>, action: CartActions.GetAllFromCart):void {
        ctx.patchState({cartItems: this.cartService.getArray()})
    }

    @Action(CartActions.AddIntoCart)
    addIntoCart(ctx: StateContext<CartStateModel>, action: CartActions.AddIntoCart):void {
        ctx.patchState({cartItems: [...ctx.getState().cartItems, action.payload]})
    }

    @Action(CartActions.DeleteItemFromCart)
    deleteItemFromCart(ctx: StateContext<CartStateModel>, action: CartActions.DeleteItemFromCart):void {
        this.cartService.deleteFromArray(action.payload);
        ctx.patchState({cartItems: this.cartService.getArray()})
    }

    @Action(CartActions.GetCountItemsOnCart)
    getCountItemsOnCart(ctx: StateContext<CartStateModel>, action: CartActions.GetCountItemsOnCart):void {
        ctx.patchState({countItems: this.cartService.countOfItems()})
    }
}