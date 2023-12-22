import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {

  constructor(private http:HttpClient) { }
  public getAllStatistique(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8080/api/v1/promotions/statistic')
  }
}
