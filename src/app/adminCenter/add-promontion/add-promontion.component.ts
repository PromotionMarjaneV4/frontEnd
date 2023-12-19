import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../../services/promotionService/promotion.service";
import {CategorieService} from "../../services/CategorieService/category.service";

@Component({
  selector: 'app-add-promontion',
  templateUrl: './add-promontion.component.html',
  styleUrls: ['./add-promontion.component.css']
})
export class AddPromontionComponent implements OnInit{

  categories: Array<any> = [];

  promotion = {
    name: '',
    description: '',
    status: 'PENDING',
    discountPercentage: 0,
    created_at: "",
    ending_at: "",
    category: [
      {
        id:0
      }
    ]
  }
  constructor(private service:PromotionService,private serviceCategorie:CategorieService) {
  }

  ngOnInit() {
    this.getAllcategories();
  }

  getAllcategories() {
    this.serviceCategorie.getAllcategories()
      .subscribe({
        next: data => {
          this.categories = data
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }

  addPromotion(promotion: { discountPercentage: number; name: string; description: string; status: string }){
    console.log(promotion)
    this.service.addPromotion(promotion)
      .subscribe({
        next: () => {
          console.log(promotion);
        },
        error: err => {
          console.log(err);
        }
      })
  }
}
