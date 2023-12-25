import {Component, OnInit} from '@angular/core';
import {Promotion} from "../../models/promotion.model";
import {ProductService} from "../../services/productService/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Array<any> = [];
  constructor(private service:ProductService) {
  }
  ngOnInit() {
    this.getAllProducts();
  }

  deleteProduct(id: any) {
    this.service.deleteProductsById(id)
      .subscribe({
        next: () => {
          console.log("ProductModel deleted successfully")
        },
        error: err => {
          console.error(err);
        }
      })
    var productId = 'product'+id
    const productHTML = document.getElementById(productId)
    if (productHTML!=null){
      productHTML.setAttribute('style', 'display:none')
    }
  }

  private getAllProducts() {
    this.service.getAllProducts()
      .subscribe({
        next: (resp) => {
          // @ts-ignore
          this.products = resp.body as Promotion[];
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
