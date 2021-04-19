import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-list/product-view/product-view.component';



const routes: Routes = [
  {
    path: ':categoryName',
    component: ProductListComponent,
    loadChildren: 'src/app/product-list/product-list.module#ProductListModule',
    data: {
      title: 'Product-list'
    }
  },
  {
    path: ':categoryName/:productName/:productDescription/:productImage/:productPrice',
    component: ProductViewComponent,
    loadChildren: 'src/app/product-list/product-list.module#ProductListModule',
    data: {
      title: 'Product-list'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
