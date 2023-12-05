import { Component } from '@angular/core';
import {ResponsableRayonService} from "../responsable-rayon.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class RRDashboardComponent {
  constructor(private DashboardService:ResponsableRayonService) {
  }
  actions = []
  ngOnInit(): void {
    this.DashboardService.setInfo({data: this.actions})
  }
}
