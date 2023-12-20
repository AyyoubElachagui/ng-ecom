import { ProductsModel } from "./products.model";

export interface CartsModel {
    id: number,
    userId: number,
    date: string,
    products: ProductsModel[],
}