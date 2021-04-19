import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  productName = '';
  productDescription = '';
  productImage = '';
  productPrice = 56;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.productName = params.productName;
      this.productDescription = params.productDescription;
      this.productImage = params.productImage;
      this.productPrice = params.productPrice;
    });
  }
}
