import { TProducts } from "./products.interface";

export interface TCarts {
    id: number,
    // userId: number,
    // date: string,
    products: TProducts[],
}