import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-edite-admin-center',
  templateUrl: './edite-admin-center.component.html',
  styleUrls: ['./edite-admin-center.component.css']
})
export class EditeAdminCenterComponent {
  @Input() id=''
}
