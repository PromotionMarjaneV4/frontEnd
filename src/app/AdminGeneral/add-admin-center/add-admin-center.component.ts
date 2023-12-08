import {Component, OnInit} from '@angular/core';
import {AdminCenterService} from "../../adminCenter/admin-center.service";
import {GeneralServiceService} from "../../services/adminCenterService/general-service.service";

@Component({
  selector: 'app-add-admin-center',
  templateUrl: './add-admin-center.component.html',
  styleUrls: ['./add-admin-center.component.css']
})
export class AddAdminCenterComponent implements OnInit{
  adminCenter = {
    password: '',
    name: '',
    email: ''
  };
  constructor(private service: GeneralServiceService) {
  }
  ngOnInit(): void {
  }
  addAdminCenter (adminCenter: { password: string; name: string; email: string }){
    this.service.addAdminCenter(adminCenter)
      .subscribe({
        next: () => {
          console.log(adminCenter);
          // todo : display data
        },
        error: err => {
          console.error(err);
        }
      })
  }
}
