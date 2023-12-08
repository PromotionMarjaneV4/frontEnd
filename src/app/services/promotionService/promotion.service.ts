import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) {}
  public getAllPromotions(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8080/api/v1/promotions')
  }

  deletePromotionById(id: any) {
      return this.http.delete(`http://localhost:8080/api/v1/promotions/${id}`)
  }
}
