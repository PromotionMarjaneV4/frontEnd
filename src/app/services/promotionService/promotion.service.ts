import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) {}
  public getAllPromotions(page: number = 1, size: number = 10): Observable<Array<any>> {
    return this.http.get<Array<any>>(`http://localhost:8080/api/v1/promotions?page=${page}&size=${size}`)
  }

  public deletePromotionById(id: any):Observable<any> {
      return this.http.delete(`http://localhost:8080/api/v1/promotions/${id}`)
  }
  public addPromotion(promotion: any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/v1/promotions/create`, promotion)
  }
}
