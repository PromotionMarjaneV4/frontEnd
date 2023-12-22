import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableRayonService {
  actions: Array<any> = [
    {title: 'Dashboard', "route": "RR/Dashboard",'id':1},
    {title: 'Promotion', "route": "RR/PromotionModel",'id':2},
    {title: 'Produit', "route": "RR/Produit",'id':3}
  ];
  constructor() { }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
}
