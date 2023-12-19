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
}
