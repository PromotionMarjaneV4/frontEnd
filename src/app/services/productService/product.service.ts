import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts() {
    return this.http.get(`http://localhost:8080/api/v1/products`, {observe: 'response'})
  }
  public deleteProductsById(id: any):Observable<any> {
    return this.http.delete(`http://localhost:8080/api/v1/products/${id}`)
  }

  addProduct(product: any):Observable<any>  {
    return this.http.post<any>(`http://localhost:8080/api/v1/products/create`, product)
  }
}
