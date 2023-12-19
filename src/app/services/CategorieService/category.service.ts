import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CategorieService {
  constructor(private http:HttpClient) {}
  public getAllcategories(page: number = 1, size: number = 10): Observable<Array<any>> {
    return this.http.get<Array<any>>(`http://localhost:8080/api/v1/categories`)
  }
  public addcategory(category: any):Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/v1/promotions/create`, category)
  }
}
