import { Action, State, StateContext } from "@ngxs/store";
import { TCarts } from "../../services/interfaces/carts.interface";
import { Injectable } from "@angular/core";
import { CartActions } from "../actions/cart.action";
import { CartLocalstorageService } from "../../services/localstorage/cart-localstorage/cart-localstorage.service";
import { TWishList } from "../../services/interfaces/wishlist.interface";
import { WishlistLocalstorageService } from "../../services/localstorage/wishlistLocalstorage/wishlist-localstorage.service";
import { WishListActions } from "../actions/wish_list.action";

export interface WishListStateModel {
    wishlistItems: TWishList[],
    countItems: number,
}

@State<WishListStateModel>({
    name: 'wishlist',
    defaults: {
        wishlistItems: [] as TWishList[],
        countItems: 0,
    }
})
@Injectable()
export class WishListState{

    constructor(
        private wishlistService: WishlistLocalstorageService
    ){}

    @Action(WishListActions.GetAllFromWishList)
    getAllFromWishList(ctx: StateContext<WishListStateModel>, action: WishListActions.GetAllFromWishList):void {
        ctx.patchState({wishlistItems: this.wishlistService.getArray()})
    }

    @Action(WishListActions.AddIntoWishList)
    addIntoWishList(ctx: StateContext<WishListStateModel>, action: WishListActions.AddIntoWishList):void {
        ctx.patchState({wishlistItems: [...ctx.getState().wishlistItems, action.payload]})
    }

    @Action(WishListActions.DeleteItemFromWishList)
    deleteItemFromWishList(ctx: StateContext<WishListStateModel>, action: WishListActions.DeleteItemFromWishList):void {
        this.wishlistService.deleteFromArray(action.payload);
        ctx.patchState({wishlistItems: this.wishlistService.getArray()})
    }

    @Action(WishListActions.GetCountItemsOnWishList)
    getCountItemsOnWishList(ctx: StateContext<WishListStateModel>, action: WishListActions.GetCountItemsOnWishList):void {
        ctx.patchState({countItems: this.wishlistService.countOfItems()})
    }
}