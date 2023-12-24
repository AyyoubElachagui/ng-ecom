import { TCarts } from "../../services/interfaces/carts.interface";

export namespace CartActions {

    export class GetAllFromCart{
        static readonly type = `[TCarts] Get all from cart`;
    }

    export class AddIntoCart{
        static readonly type = `[TCarts] Add into cart`;
        constructor(
            public payload: TCarts
        ){}
    }

    export class DeleteItemFromCart{
        static readonly type = `[TCarts] Delete item from cart`;
        constructor(
            public payload: number
        ){}
    }

    export class GetCountItemsOnCart{
        static readonly type = `[TCarts] Get count item on cart`;
    }
}