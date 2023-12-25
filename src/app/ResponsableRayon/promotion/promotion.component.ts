import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../../services/promotionService/promotion.service";
import {Promotion} from "../../models/promotion.model";

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  totalPages: number = 0;
  pageSize:number = 5;
  currentPage: number = 0;

  promotions: Array<Promotion> = [];
  promotion: any = {
    id: 0,
    status : ""
  };
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


  acceptPromotion(id: number) {
    this.promotion = {
      id: id,
      status: "ACCEPTED"
    };
    this.service.statusPromotion(this.promotion)
  }

  refusePromotion(id: number) {
    this.promotion = {
      id: id,
      status: "REFUSED"
    };
    this.service.statusPromotion(this.promotion)
  }
}
