import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private http:HttpClient) {}
  public getAllPromotions(page: number, size: number){
    return this.http.get(`http://localhost:8080/api/v1/promotions?page=${page}&size=${size}`, {observe: 'response'})
  }

  public deletePromotionById(id: any):Observable<any> {
      return this.http.delete(`http://localhost:8080/api/v1/promotions/${id}`)
  }
  public addPromotion(promotion: any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/v1/promotions/create`, promotion)
  }

  statusPromotion(promotion: { id: number; status: string }):Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/v1/promotions/updateStatus`, promotion)
  }
}
