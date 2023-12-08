import {PromotionModel} from "./promotion.model";

export interface CategoryModel {
  id: number
  name: string
  description: string
  promotion: PromotionModel
}
