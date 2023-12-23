import { TRating } from "./rating.interface";

export interface TProducts {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: TRating
}