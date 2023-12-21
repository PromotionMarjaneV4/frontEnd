import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../../services/promotionService/promotion.service";
import {Promotion} from "../../models/promotion.model";

@Component({
  selector: 'app-promontion',
  templateUrl: './promontion.component.html',
  styleUrls: ['./promontion.component.css']
})
export class PromontionComponent implements OnInit {
  totalPages: number = 0;
  pageSize:number = 5;
  currentPage: number = 0;

  promotions: Array<Promotion> = [];
  constructor(private service:PromotionService) {
  }

  ngOnInit() {
    this.getAllPromotions();
  }

  getAllPromotions() {
    this.service.getAllPromotions(this.currentPage, this.pageSize)
      .subscribe({
        next: (resp) => {
          // @ts-ignore
          this.promotions = resp.body.content as Promotion[];
          // @ts-ignore
          this.totalPages = resp.body.totalPages;
        },
        error: err => {
          console.error(err);
        }
      });
  }
  handlePageChange(event: number) {
    this.currentPage = event;
    this.getAllPromotions();
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
