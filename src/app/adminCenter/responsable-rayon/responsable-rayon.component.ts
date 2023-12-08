import {Component, OnInit} from '@angular/core';
import {AdminCenterService} from "../admin-center.service";
import {ResponsableService} from "../../services/responsableRayon/responsable.service";

@Component({
  selector: 'app-responsable-rayon',
  templateUrl: './responsable-rayon.component.html',
  styleUrls: ['./responsable-rayon.component.css']
})
export class ACResponsableRayonComponent implements OnInit{
  responsables : Array<any> = [];
  constructor(private Service: ResponsableService ) {
  }
  ngOnInit() {
    this.Service.getAllResponsables()
      .subscribe({
        next: data => {
          this.responsables = data
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }

    deleteResponsableById(id:any) {
        this.Service.deleteResponsableById(id)
            .subscribe({
                next: () => {
                    console.log("PromotionModel deleted successfully")
                },
                error: err => {
                    console.error(err);
                }
            })
        var responsableId = 'responsable'+id
        const responsableHTML = document.getElementById(responsableId)
        if (responsableHTML!=null){
            responsableHTML.setAttribute('style', 'display:none')
        }
    }
}
