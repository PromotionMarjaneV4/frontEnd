import {Component} from '@angular/core';
import {AdminGeneralService} from "../admin-general.service";

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css']
})
export class AdminCenterComponent{
  constructor(private Service:AdminGeneralService) {
  }
  deleteAdminCenter(id: any) {
    console.log(id)
  }
}
