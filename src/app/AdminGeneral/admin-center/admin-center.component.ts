import {Component, OnInit} from '@angular/core';
import {AdminGeneralService} from "../admin-general.service";
import {GeneralServiceService} from "../../services/adminCenterService/general-service.service";

@Component({
  selector: 'app-admin-center',
  templateUrl: './admin-center.component.html',
  styleUrls: ['./admin-center.component.css']
})
export class AdminCenterComponent implements OnInit {

  admins: Array<any> = [];

  constructor(private adminService: GeneralServiceService
  ) {
  }

  ngOnInit() {
    this.getAllAdmins();
  }

  getAllAdmins(){
    this.adminService.getAllAdmins()
      .subscribe({
        next: data => {
          this.admins = data
          console.log(data)
        },
        error: err => {
          console.error(err);
        }
      });
  }

  deleteAdminById(id: any){
    this.adminService.deleteAdminById(id)
      .subscribe({
        next: () => {
          console.log("Admin deleted successfully")
        },
        error: err => {
          console.error(err);
        }
      })
    var adminId = 'admin'+id
    const adminHTML = document.getElementById(adminId)
    if (adminHTML!=null){
      adminHTML.setAttribute('style', 'display:none')
    }
  }
}
