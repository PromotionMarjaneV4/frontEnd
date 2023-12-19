import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../../services/promotionService/promotion.service";

@Component({
  selector: 'app-promontion',
  templateUrl: './promontion.component.html',
  styleUrls: ['./promontion.component.css']
})
export class PromontionComponent implements OnInit {

  promotions: Array<any> = [];
  constructor(private service:PromotionService) {
  }

  ngOnInit() {
    this.getAllPromotions();
  }

  getAllPromotions() {
    this.service.getAllPromotions()
      .subscribe({
        next: data => {
          this.promotions = data
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }

    deletePromotionById(id: any){
    this.service.deletePromotionById(id)
      .subscribe({
        next: () => {
          console.log("PromotionModel deleted successfully")
        },
        error: err => {
          console.error(err);
        }
      })
    var promotionId = 'promotion'+id
    const promotionHTML = document.getElementById(promotionId)
    if (promotionHTML!=null){
      promotionHTML.setAttribute('style', 'display:none')
    }
  }

}
