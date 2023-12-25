import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../services/CategorieService/category.service";
import {ProductService} from "../../services/productService/product.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product= {
    name: '',
    description: '',
    category:
      {
        id: 0
      },
    price: 0,
    quantity: 0
  }
  categories: any = [];
  constructor(private serviceCategorie:CategorieService,private serviceProduct:ProductService) {
  }
  ngOnInit() {
    this.getAllcategories();
  }
  addproduct(product: any) {
    console.log(product)
    this.serviceProduct.addProduct(product)
      .subscribe({
        next: () => {
          console.log(product);
        },
        error: err => {
          console.log(err);
        }
      })
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
}
