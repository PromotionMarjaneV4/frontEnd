import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private http:HttpClient) {}
  public getAllResponsables(): Observable<Array<any>> {
    return this.http.get<Array<any>>('http://localhost:8080/api/v1/responsables')
  }

    deleteResponsableById(id: any) {
      return this.http.delete(`http://localhost:8080/api/v1/responsables/${id}`)
    }

  addResponsable(responsable: any): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/v1/responsables/create`, responsable)
  }
}
