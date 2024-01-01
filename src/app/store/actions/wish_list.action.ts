import { TWishList } from "../../services/interfaces/wishlist.interface";

export namespace WishListActions {
    export class GetAllFromWishList{
        static readonly type = `[TWishList] Get all from wishlist`;
    }

    export class AddIntoWishList{
        static readonly type = `[TWishList] Add into wishlist`;
        constructor(
            public payload: TWishList
        ){}
    }

    export class DeleteItemFromWishList{
        static readonly type = `[TWishList] Delete item from wishlist`;
        constructor(
            public payload: number
        ){}
    }

    export class GetCountItemsOnWishList{
        static readonly type = `[TWishList] Get count item on wishlist`;
    }
}