import { Component } from '@angular/core';
import {AdminCenterService} from "../admin-center.service";

@Component({
  selector: 'app-responsable-rayon',
  templateUrl: './responsable-rayon.component.html',
  styleUrls: ['./responsable-rayon.component.css']
})
export class ACResponsableRayonComponent {
  constructor(private Service: AdminCenterService) {
  }
  deleteResponsableRayon(id: any) {
    console.log(id)
  }
}
