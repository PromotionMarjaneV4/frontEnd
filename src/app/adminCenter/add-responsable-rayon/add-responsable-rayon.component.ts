import {Component, OnInit} from '@angular/core';
import {ResponsableService} from "../../services/responsableRayon/responsable.service";

@Component({
  selector: 'app-add-responsable-rayon',
  templateUrl: './add-responsable-rayon.component.html',
  styleUrls: ['./add-responsable-rayon.component.css']
})
export class AddResponsableRayonComponent implements OnInit{
    responsable = {
        password: '',
        name: '',
        email: ''
    };
  constructor(private service: ResponsableService) {
  }

  ngOnInit() {
  }

    public addResponsable(responsable: { password: string; name: string; email: string }){
    this.service.addResponsable(responsable)
        .subscribe({
          next: () => {
              console.log(responsable);
            // todo : display data
          },
          error: err => {
            console.error(err);
          }
        })
  }
}
