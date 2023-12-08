import {Promotion} from "./promotion.model";

export interface Category {
  id: number
  name: string
  description: string
  promotion: Promotion
}
