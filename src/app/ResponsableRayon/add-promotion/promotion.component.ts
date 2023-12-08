import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../../services/promotionService/promotion.service";
import {Promotion} from "../../models/promotion.model";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent{
  //
  // promotion: Promotion = {
  //
  // }
  constructor(private service: PromotionService){
  }
  addPromotion(){

  }
}
