import {Component, OnInit} from '@angular/core';
import {ResponsableRayonService} from "../responsable-rayon.service";
import {StatisticService} from "../../services/statisticService/statistic.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class RRDashboardComponent implements OnInit {
  constructor(private DashboardService:ResponsableRayonService,private statisticService: StatisticService) {
  }
  actions = []
  staticsApi = {
    "refused": 0,
    "total_promotions": 0,
    "accepted": 0,
    "total_responsable_rayon": 0,
    "total_products": 0,
    "total_admin_center": 0,
    "users": 0
  }
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
          // @ts-ignore
          this.staticsApi["users"] = data.total_admin_center + data.total_responsable_rayon
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }
}
