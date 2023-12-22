import {Component, OnInit} from '@angular/core';
import {AdminCenterService} from "../admin-center.service";
import {StatisticService} from "../../services/statisticService/statistic.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class ACDashboardComponent implements OnInit{
  constructor(private DashboardService:AdminCenterService, private statisticService: StatisticService) {
  }
  staticsApi = {
    "refused": 0,
    "total_promotions": 0,
    "accepted": 0,
    "total_responsable_rayon": 0,
    "total_products": 0,
    "total_admin_center": 0
  }

  actions = []
  ngOnInit(): void {
    this.DashboardService.setInfo({data: this.actions})
    this.getAllStatistic()
  }
  getAllStatistic(){
    this.statisticService.getAllStatistique()
      .subscribe({
        next: data => {
          // @ts-ignore
          this.staticsApi["accepted"] = data.accepted
          // @ts-ignore
          this.staticsApi["refused"] = data.refused
          // @ts-ignore
          this.staticsApi["total_promotions"] = data.total_promotions
          // @ts-ignore
          this.staticsApi["total_responsable_rayon"] = data.total_responsable_rayon
          // @ts-ignore
          this.staticsApi["total_products"] = data.total_products
          // @ts-ignore
          this.staticsApi["total_admin_center"] = data.total_admin_center
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
