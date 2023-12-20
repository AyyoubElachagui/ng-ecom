import { RatingModel } from "./rating.model";

export interface ProductsModel {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: RatingModel
}