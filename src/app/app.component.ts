import {Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {AdminCenterService} from "./adminCenter/admin-center.service";
import {CustomerService} from "./customer/customer.service";
import {ResponsableRayonService} from "./ResponsableRayon/responsable-rayon.service";
import {AdminGeneralService} from "./AdminGeneral/admin-general.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  route = this.location.path()
  UrlPath = this.route.split('/')
  currentURL =this.UrlPath[1]

  constructor(private location: Location) {
  }
  actions: Array<any> = []
  ngOnInit(): void {
      var actionsService:any
      if (this.currentURL == 'AC'){
          actionsService = new AdminCenterService();
      }else if (this.currentURL == 'AG') {
        actionsService = new AdminGeneralService()
      } else if (this.currentURL == 'RR') {
        actionsService = new ResponsableRayonService()
      } else {
        actionsService = new CustomerService()
      }
      this.actions = actionsService.getInfo()
      document.addEventListener('DOMContentLoaded', function() {
          // open
          const burger = document.querySelectorAll('.navbar-burger');
          const menu = document.querySelectorAll('.navbar-menu');

          if (burger.length && menu.length) {
              for (var i = 0; i < burger.length; i++) {
                  burger[i].addEventListener('click', function() {
                      for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                      }
                  });
              }
          }

          // close
          const close = document.querySelectorAll('.navbar-close');
          const backdrop = document.querySelectorAll('.navbar-backdrop');

          if (close.length) {
              for (var i = 0; i < close.length; i++) {
                  close[i].addEventListener('click', function() {
                      for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                      }
                  });
              }
          }

          if (backdrop.length) {
              for (var i = 0; i < backdrop.length; i++) {
                  backdrop[i].addEventListener('click', function() {
                      for (var j = 0; j < menu.length; j++) {
                          menu[j].classList.toggle('hidden');
                      }
                  });
              }
          }
      });
  }
}
