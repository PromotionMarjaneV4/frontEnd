import {Component, OnInit} from '@angular/core';
import {CategorieService} from '../../services/CategorieService/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit {

  categories: Array<any> = [];
  constructor(private service:CategorieService) {
  }

  ngOnInit() {
    this.getAllcategories();
  }

  getAllcategories() {
    this.service.getAllcategories()
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
  deleteCategoryById(id: any) {
    this.service.deleteCategoryById(id)
      .subscribe({
        next: () => {
          console.log(id);
          this.getAllcategories();
        },
        error: err => {
          console.error(err);
        }
      });
    var categoryId = 'category'+id
    const categoryHTML = document.getElementById(categoryId)
    if (categoryHTML!=null){
      categoryHTML.setAttribute('style', 'display:none')
    }
  }
}
