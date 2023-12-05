import { Component } from '@angular/core';
import {AdminGeneralService} from "../admin-general.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class AGDashboardComponent {
  constructor(private DashboardService:AdminGeneralService) {
  }
  actions = []
  ngOnInit(): void {
    this.DashboardService.setInfo({data: this.actions})
  }
}
