import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../services/product.service';
import {ProductModel} from '../models/product-model';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  categoryName = '';
  productLists: ProductModel[] = [];
  constructor(private route: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {
   this.getProductListPerCategory();

  }

  getProductListPerCategory() {
    this.route.params.subscribe(params => {
      console.log(params);
      this.categoryName = params.categoryName;
      this.getProductDetails(this.categoryName);
    });
  }

  getProductDetails(categoryName: string) {
    this.productService.getProductLists(categoryName).subscribe((products) => {
      console.log(products);
      this.productLists = this.convertToTheResponse(products);
      console.log(this.productLists);
    });
  }

  convertToTheResponse(response): ProductModel[] {
    const products: ProductModel[] = [];
    for (const value of response) {
      products.push({
        id: value.id,
        title: value.title,
        price: value.price,
        description: value.description,
        image: value.image
      });
    }
    return products;
  }
}
