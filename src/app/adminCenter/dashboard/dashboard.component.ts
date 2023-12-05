import {Component, OnInit} from '@angular/core';
import {AdminCenterService} from "../admin-center.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class ACDashboardComponent implements OnInit{
  constructor(private DashboardService:AdminCenterService) {
  }
  actions = []
  ngOnInit(): void {
    this.DashboardService.setInfo({data: this.actions})
  }

}
