import { Component } from '@angular/core';
import {AdminCenterService} from "../admin-center.service";

@Component({
  selector: 'app-promontion',
  templateUrl: './promontion.component.html',
  styleUrls: ['./promontion.component.css']
})
export class PromontionComponent {
  constructor(private Service: AdminCenterService) {
  }
  deletePromotion(id: any) {
    console.log(id)
  }

  protected readonly status = this.Service.getStatus();
}
