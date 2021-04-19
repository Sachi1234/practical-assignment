import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()  id = 1;
  @Input() title = 'user1@gmail.com';
  @Input() price = 177;
  @Input() description = 'user1@gmail.com';
  @Input() image = 'image1.jpg';

  constructor() { }

  ngOnInit() {
  }

}
