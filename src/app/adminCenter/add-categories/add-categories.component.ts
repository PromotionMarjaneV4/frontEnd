import {Component, OnInit} from '@angular/core';
import {PromotionService} from "../../services/promotionService/promotion.service";
import {CategorieService} from "../../services/CategorieService/category.service";

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit{

  category = {
    name: '',
    description: ''
  }
  constructor(private service:CategorieService) {
  }

  ngOnInit() {
  }

  addCategory(category: { name: string, description: string }){
    console.log("category is " + category)
    this.service.addCategory(category)
      .subscribe({
        next: data => {
          console.log(data);
        },
        error: err => {
          console.log(err);
        }
      })
  }
}
