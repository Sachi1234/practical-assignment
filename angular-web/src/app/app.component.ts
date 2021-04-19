import {Component, OnInit} from '@angular/core';
import {ProductService} from './services/product.service';
import {CategoryModel} from './models/category-model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-practical';
  categoryList: CategoryModel[] = [];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getCategoryLists();
  }

  getCategoryLists() {
    this.productService.getCategoryLists().subscribe((categories) => {
      console.log(categories);
      this.categoryList = this.convertToTheResponse(categories);
    });
  }

  convertToTheResponse(response): CategoryModel[] {
    const categories: CategoryModel[] = [];
    for (const value of response) {
      categories.push({
        categoryName: value
      });
    }
    return categories;
  }
}
