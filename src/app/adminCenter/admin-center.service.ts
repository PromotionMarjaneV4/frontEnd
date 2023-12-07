import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCenterService {
  actions: Array<any> = [
    {title: 'Dashboard', "route": "AC/Dashboard",'id':1},
    {title: 'Promotion', "route": "AC/Promotion",'id':2},
    {title: 'Reseponsable Rayon', "route": "AC/ResponsableRayon",'id':3}
  ];
  constructor() { }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
  status='cancelled'
  getStatus(){
    return this.status
  }
}
