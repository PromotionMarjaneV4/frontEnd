import {Category} from "./category.model";

export interface Promotion {
  category: string;
  quantity: string;
  price: string;
  id: number
  name: string
  description: string
  created_at: any
  ending_at: any
  discountPercentage: number
  status: any
  categories: Category[]
}
