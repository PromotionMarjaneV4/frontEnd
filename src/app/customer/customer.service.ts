import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  actions: Array<any> = [
    {title: 'Home', "route": "customer/home",'id':1},
    {title: 'Products', "route": "customer/products",'id':2},
    {title: 'Card', "route": "customer/card",'id':3}
  ];
  constructor() { }
  setInfo({data}: { data: any }){
    this.actions = data
  }
  getInfo(){
    return this.actions
  }
}
