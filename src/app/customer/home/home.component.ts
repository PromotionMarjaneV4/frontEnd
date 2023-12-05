import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../customer.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  constructor(private HomeService:CustomerService) {
  }
  actions = []
  ngOnInit(): void {
    this.HomeService.setInfo({data: this.actions})
  }
}
