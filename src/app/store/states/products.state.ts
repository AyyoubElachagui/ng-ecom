import { Action, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { CartActions } from "../actions/cart.action";
import { TProducts } from "../../services/interfaces/products.interface";
import { ProductsService } from "../../services/api/products/products.service";
import { ProductsActions } from "../actions/products.action";
import { Observable } from "rxjs";

export interface ProductsStateModel {
    productsItems: TProducts[],
    featuredItems: TProducts[],
    recommendedItems: TProducts[],
    countItems: number,
}

@State<ProductsStateModel>({
    name: 'product',
    defaults: {
        productsItems: [] as TProducts[],
        featuredItems: [] as TProducts[],
        recommendedItems: [] as TProducts[],
        countItems: 0,
    }
})
@Injectable()
export class ProductState{

    constructor(
        private productService : ProductsService
    ){}

    @Action(ProductsActions.GetAllProducts)
    getAllProducts(ctx: StateContext<ProductsStateModel>, action: ProductsActions.GetAllProducts):void {
        this.productService.get().subscribe({
            next: (data: TProducts[]):void =>{
                ctx.patchState({productsItems: data})
            }
        })
    }

    @Action(ProductsActions.GetLimitedFeaturedProducts)
    getLimitedFeaturedProducts(ctx: StateContext<ProductsStateModel>, action: ProductsActions.GetLimitedFeaturedProducts): void {
        this.productService.get().subscribe({
            next: (data: TProducts[]): void =>{
                ctx.patchState({featuredItems: data.slice(action.start, action.end)})
            }
        })
    }
    

    @Action(ProductsActions.GetLimitedRecommendedProducts)
    getLimitedRecommendedProducts(ctx: StateContext<ProductsStateModel>, action: ProductsActions.GetLimitedRecommendedProducts): void {
        this.productService.get().subscribe({
            next: (data: TProducts[]): void =>{
                ctx.patchState({recommendedItems: data.slice(action.start, action.end)})
            }
        })
    }
}