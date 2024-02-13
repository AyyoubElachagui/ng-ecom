import { TProducts } from "../../services/interfaces/products.interface"

export namespace ProductsActions {

    export class GetAllProducts{
        static readonly type = `[TProducts] Get all from API`;
    }

    export class GetLimitedFeaturedProducts{
        static readonly type = `[TProducts] Get limited featured product from API`;

        constructor(
            public start: number,
            public end: number
        ){}
    }

    

    export class GetLimitedRecommendedProducts{
        static readonly type = `[TProducts] Get limited recommended product from API`;

        constructor(
            public start: number,
            public end: number
        ){}
    }
}