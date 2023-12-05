import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGeneralService {
  actions: Array<any> = [
    {title: 'Dashboard', "route": "AG/Dashboard",'id':1},
    {title: 'Admin Center', "route": "AG/AdminCenter",'id':2}
  ];
  constructor() { }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
}
