import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-edite-product',
  templateUrl: './edite-product.component.html',
  styleUrls: ['./edite-product.component.css']
})
export class EditeProductComponent {
  @Input() id=''
}
