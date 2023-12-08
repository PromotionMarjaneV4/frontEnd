import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService{

  constructor(private http:HttpClient) {}
  public getAllAdmins(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8080/api/v1/admins')
  }

  public deleteAdminById(adminId: any):Observable<any>{
    return this.http.delete(`http://localhost:8080/api/v1/admins/${adminId}`)
  }

  addAdminCenter(adminCenter: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/v1/admins/create`, adminCenter)
  }
}
